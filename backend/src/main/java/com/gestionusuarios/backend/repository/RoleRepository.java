package com.gestionusuarios.backend.repository;

import com.gestionusuarios.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
