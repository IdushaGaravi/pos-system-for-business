package com.service;

import com.exceptions.UserException;
import com.payload.dto.CategoryDto;

import java.util.List;

public interface CategoryService {

    CategoryDto createCategory(CategoryDto dto) throws Exception;
    List<CategoryDto> getCatagoriesByStore(Long storeId);
    CategoryDto updateCategory(Long id, CategoryDto dto) throws Exception;
    void deleteCategory(Long id) throws Exception;
}
