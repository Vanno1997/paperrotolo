package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Robot;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Robot entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RobotRepository extends JpaRepository<Robot, Long> {

}
