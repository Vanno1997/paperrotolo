package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Micro1App;

import com.mycompany.myapp.domain.Robot;
import com.mycompany.myapp.repository.RobotRepository;
import com.mycompany.myapp.service.RobotService;
import com.mycompany.myapp.service.dto.RobotDTO;
import com.mycompany.myapp.service.mapper.RobotMapper;
import com.mycompany.myapp.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;


import static com.mycompany.myapp.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the RobotResource REST controller.
 *
 * @see RobotResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Micro1App.class)
public class RobotResourceIntTest {

    private static final String DEFAULT_NOME = "AAAAAAAAAA";
    private static final String UPDATED_NOME = "BBBBBBBBBB";

    @Autowired
    private RobotRepository robotRepository;

    @Autowired
    private RobotMapper robotMapper;

    @Autowired
    private RobotService robotService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restRobotMockMvc;

    private Robot robot;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final RobotResource robotResource = new RobotResource(robotService);
        this.restRobotMockMvc = MockMvcBuilders.standaloneSetup(robotResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Robot createEntity(EntityManager em) {
        Robot robot = new Robot()
            .nome(DEFAULT_NOME);
        return robot;
    }

    @Before
    public void initTest() {
        robot = createEntity(em);
    }

    @Test
    @Transactional
    public void createRobot() throws Exception {
        int databaseSizeBeforeCreate = robotRepository.findAll().size();

        // Create the Robot
        RobotDTO robotDTO = robotMapper.toDto(robot);
        restRobotMockMvc.perform(post("/api/robots")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(robotDTO)))
            .andExpect(status().isCreated());

        // Validate the Robot in the database
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeCreate + 1);
        Robot testRobot = robotList.get(robotList.size() - 1);
        assertThat(testRobot.getNome()).isEqualTo(DEFAULT_NOME);
    }

    @Test
    @Transactional
    public void createRobotWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = robotRepository.findAll().size();

        // Create the Robot with an existing ID
        robot.setId(1L);
        RobotDTO robotDTO = robotMapper.toDto(robot);

        // An entity with an existing ID cannot be created, so this API call must fail
        restRobotMockMvc.perform(post("/api/robots")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(robotDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Robot in the database
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllRobots() throws Exception {
        // Initialize the database
        robotRepository.saveAndFlush(robot);

        // Get all the robotList
        restRobotMockMvc.perform(get("/api/robots?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(robot.getId().intValue())))
            .andExpect(jsonPath("$.[*].nome").value(hasItem(DEFAULT_NOME.toString())));
    }
    
    @Test
    @Transactional
    public void getRobot() throws Exception {
        // Initialize the database
        robotRepository.saveAndFlush(robot);

        // Get the robot
        restRobotMockMvc.perform(get("/api/robots/{id}", robot.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(robot.getId().intValue()))
            .andExpect(jsonPath("$.nome").value(DEFAULT_NOME.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingRobot() throws Exception {
        // Get the robot
        restRobotMockMvc.perform(get("/api/robots/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateRobot() throws Exception {
        // Initialize the database
        robotRepository.saveAndFlush(robot);

        int databaseSizeBeforeUpdate = robotRepository.findAll().size();

        // Update the robot
        Robot updatedRobot = robotRepository.findById(robot.getId()).get();
        // Disconnect from session so that the updates on updatedRobot are not directly saved in db
        em.detach(updatedRobot);
        updatedRobot
            .nome(UPDATED_NOME);
        RobotDTO robotDTO = robotMapper.toDto(updatedRobot);

        restRobotMockMvc.perform(put("/api/robots")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(robotDTO)))
            .andExpect(status().isOk());

        // Validate the Robot in the database
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeUpdate);
        Robot testRobot = robotList.get(robotList.size() - 1);
        assertThat(testRobot.getNome()).isEqualTo(UPDATED_NOME);
    }

    @Test
    @Transactional
    public void updateNonExistingRobot() throws Exception {
        int databaseSizeBeforeUpdate = robotRepository.findAll().size();

        // Create the Robot
        RobotDTO robotDTO = robotMapper.toDto(robot);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restRobotMockMvc.perform(put("/api/robots")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(robotDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Robot in the database
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteRobot() throws Exception {
        // Initialize the database
        robotRepository.saveAndFlush(robot);

        int databaseSizeBeforeDelete = robotRepository.findAll().size();

        // Delete the robot
        restRobotMockMvc.perform(delete("/api/robots/{id}", robot.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Robot> robotList = robotRepository.findAll();
        assertThat(robotList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Robot.class);
        Robot robot1 = new Robot();
        robot1.setId(1L);
        Robot robot2 = new Robot();
        robot2.setId(robot1.getId());
        assertThat(robot1).isEqualTo(robot2);
        robot2.setId(2L);
        assertThat(robot1).isNotEqualTo(robot2);
        robot1.setId(null);
        assertThat(robot1).isNotEqualTo(robot2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(RobotDTO.class);
        RobotDTO robotDTO1 = new RobotDTO();
        robotDTO1.setId(1L);
        RobotDTO robotDTO2 = new RobotDTO();
        assertThat(robotDTO1).isNotEqualTo(robotDTO2);
        robotDTO2.setId(robotDTO1.getId());
        assertThat(robotDTO1).isEqualTo(robotDTO2);
        robotDTO2.setId(2L);
        assertThat(robotDTO1).isNotEqualTo(robotDTO2);
        robotDTO1.setId(null);
        assertThat(robotDTO1).isNotEqualTo(robotDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(robotMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(robotMapper.fromId(null)).isNull();
    }
}
