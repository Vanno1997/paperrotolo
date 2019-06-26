package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.service.RobotService;
import com.mycompany.myapp.domain.Robot;
import com.mycompany.myapp.repository.RobotRepository;
import com.mycompany.myapp.service.dto.RobotDTO;
import com.mycompany.myapp.service.mapper.RobotMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing Robot.
 */
@Service
@Transactional
public class RobotServiceImpl implements RobotService {

    private final Logger log = LoggerFactory.getLogger(RobotServiceImpl.class);

    private final RobotRepository robotRepository;

    private final RobotMapper robotMapper;

    public RobotServiceImpl(RobotRepository robotRepository, RobotMapper robotMapper) {
        this.robotRepository = robotRepository;
        this.robotMapper = robotMapper;
    }

    /**
     * Save a robot.
     *
     * @param robotDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public RobotDTO save(RobotDTO robotDTO) {
        log.debug("Request to save Robot : {}", robotDTO);
        Robot robot = robotMapper.toEntity(robotDTO);
        robot = robotRepository.save(robot);
        return robotMapper.toDto(robot);
    }

    /**
     * Get all the robots.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<RobotDTO> findAll() {
        log.debug("Request to get all Robots");
        return robotRepository.findAll().stream()
            .map(robotMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one robot by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<RobotDTO> findOne(Long id) {
        log.debug("Request to get Robot : {}", id);
        return robotRepository.findById(id)
            .map(robotMapper::toDto);
    }

    /**
     * Delete the robot by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Robot : {}", id);
        robotRepository.deleteById(id);
    }
}
