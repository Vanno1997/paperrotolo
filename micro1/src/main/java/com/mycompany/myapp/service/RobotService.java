package com.mycompany.myapp.service;

import com.mycompany.myapp.service.dto.RobotDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Robot.
 */
public interface RobotService {

    /**
     * Save a robot.
     *
     * @param robotDTO the entity to save
     * @return the persisted entity
     */
    RobotDTO save(RobotDTO robotDTO);

    /**
     * Get all the robots.
     *
     * @return the list of entities
     */
    List<RobotDTO> findAll();


    /**
     * Get the "id" robot.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<RobotDTO> findOne(Long id);

    /**
     * Delete the "id" robot.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
