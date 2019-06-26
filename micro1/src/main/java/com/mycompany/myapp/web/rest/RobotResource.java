package com.mycompany.myapp.web.rest;
import com.mycompany.myapp.service.RobotService;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import com.mycompany.myapp.service.dto.RobotDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Robot.
 */
@RestController
@RequestMapping("/api")
public class RobotResource {

    private final Logger log = LoggerFactory.getLogger(RobotResource.class);

    private static final String ENTITY_NAME = "micro1Robot";

    private final RobotService robotService;

    public RobotResource(RobotService robotService) {
        this.robotService = robotService;
    }

    /**
     * POST  /robots : Create a new robot.
     *
     * @param robotDTO the robotDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new robotDTO, or with status 400 (Bad Request) if the robot has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/robots")
    public ResponseEntity<RobotDTO> createRobot(@RequestBody RobotDTO robotDTO) throws URISyntaxException {
        log.debug("REST request to save Robot : {}", robotDTO);
        if (robotDTO.getId() != null) {
            throw new BadRequestAlertException("A new robot cannot already have an ID", ENTITY_NAME, "idexists");
        }
        RobotDTO result = robotService.save(robotDTO);
        return ResponseEntity.created(new URI("/api/robots/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /robots : Updates an existing robot.
     *
     * @param robotDTO the robotDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated robotDTO,
     * or with status 400 (Bad Request) if the robotDTO is not valid,
     * or with status 500 (Internal Server Error) if the robotDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/robots")
    public ResponseEntity<RobotDTO> updateRobot(@RequestBody RobotDTO robotDTO) throws URISyntaxException {
        log.debug("REST request to update Robot : {}", robotDTO);
        if (robotDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        RobotDTO result = robotService.save(robotDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, robotDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /robots : get all the robots.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of robots in body
     */
    @GetMapping("/robots")
    public List<RobotDTO> getAllRobots() {
        log.debug("REST request to get all Robots");
        return robotService.findAll();
    }

    /**
     * GET  /robots/:id : get the "id" robot.
     *
     * @param id the id of the robotDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the robotDTO, or with status 404 (Not Found)
     */
    @GetMapping("/robots/{id}")
    public ResponseEntity<RobotDTO> getRobot(@PathVariable Long id) {
        log.debug("REST request to get Robot : {}", id);
        Optional<RobotDTO> robotDTO = robotService.findOne(id);
        return ResponseUtil.wrapOrNotFound(robotDTO);
    }

    /**
     * DELETE  /robots/:id : delete the "id" robot.
     *
     * @param id the id of the robotDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/robots/{id}")
    public ResponseEntity<Void> deleteRobot(@PathVariable Long id) {
        log.debug("REST request to delete Robot : {}", id);
        robotService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
