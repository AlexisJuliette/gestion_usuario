package com.gestionusuarios.backend.service;

import com.gestionusuarios.backend.model.User;
import com.gestionusuarios.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public User save(User user) {
        validateUser(user);
            return userRepository.save(user);
    }

    public User update(Long id, User user) {
        findById(id);
        validateUser(user);
           return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    private void validateUser(User user) {
        if (user.getName() == null || user.getName().isBlank()) {
            throw new RuntimeException("El nombre es obligatorio");
        }
        if (user.getLastname() == null || user.getLastname().isBlank()) {
           throw new RuntimeException("El apellido es obligatorio");
        }

        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            throw new RuntimeException("El email es obligatorio");
        }
        if (!user.getEmail().contains("@")) {
           throw new RuntimeException("El email no es válido");
        }

        if (user.getRole() == null || user.getRole().getId() == null) {
           throw new RuntimeException("El rol es obligatorio");
        }
    }
}