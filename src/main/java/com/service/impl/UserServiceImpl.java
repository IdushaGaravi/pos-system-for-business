package com.service.impl;

import com.configuration.JwtProvider;
import com.exceptions.UserException;
import com.modal.User;
import com.service.UserService;
import com.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    @Override
    public User getUserFromJwtToken(String token) throws UserException {

        String email = jwtProvider.getEmailFromToken(token);
        User user = userRepository.findByEmail(email);
        if(user == null) {
            throw new UserException("Invalid Token");
        }
        return user;
    }

    @Override
    public User getCurrentUser() throws UserException {
        String email = Objects.requireNonNull(SecurityContextHolder.getContext().getAuthentication()).getName();
        User user = userRepository.findByEmail(email);
        if(user == null) {
            throw new UserException("User not found");
        }
        return user;
    }

    @Override
    public User getUserByEmail(String email) throws UserException {
        User user = userRepository.findByEmail(email);
        if(user == null) {
            throw new UserException("User not found");
        }
        return user;
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
