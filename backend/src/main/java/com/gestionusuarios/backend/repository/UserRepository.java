package com.gestionusuarios.backend.repository;

import com.gestionusuarios.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}