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
        return userRepository.save(user);
    }

    public User update(Long id, User user) {
    findById(id);
    return userRepository.save(user);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}