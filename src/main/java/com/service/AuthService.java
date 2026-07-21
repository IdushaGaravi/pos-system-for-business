package com.service;

import com.exceptions.UserException;
import com.payload.dto.UserDto;
import com.payload.response.AuthResponse;

public interface AuthService {

    AuthResponse signup(UserDto userDto) throws UserException;
    AuthResponse login(UserDto userDto) throws UserException;

}
