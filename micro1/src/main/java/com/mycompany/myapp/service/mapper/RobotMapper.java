package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.*;
import com.mycompany.myapp.service.dto.RobotDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Robot and its DTO RobotDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface RobotMapper extends EntityMapper<RobotDTO, Robot> {



    default Robot fromId(Long id) {
        if (id == null) {
            return null;
        }
        Robot robot = new Robot();
        robot.setId(id);
        return robot;
    }
}
