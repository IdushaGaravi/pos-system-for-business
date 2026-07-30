package com.service.mapper;

import com.modal.Category;
import com.modal.Product;
import com.modal.Store;
import com.payload.dto.ProductDto;

public class ProductMapper {

    public static ProductDto toDTO(Product product) {
        return ProductDto.builder()
                .id(product.getId())
                .name(product.getName())
                .sku(product.getSku())
                .description(product.getDescription())
                .mrp(product.getMrp())
                .category(CategoryMapper.toDTO(product.getCategory()))
                .sellingPrice(product.getSellingPrice())
                .brand(product.getBrand())
                .storeId(product.getStore() != null?product.getStore().getId():null)
                .image(product.getImage())
                .createdAt(product.getCreatedAt())
                .updatedAt(product.getUpdatedAt())
                .build();
                //.categoryId(product.getId())
    }

    public static Product tOEntity(ProductDto productDto,
                                   Store store,
                                   Category category) {

        return Product.builder()
                .name(productDto.getName())
                .store(store)
                .category(category)
                .sku(productDto.getSku())
                .description(productDto.getDescription())
                .mrp(productDto.getMrp())
                .sellingPrice(productDto.getSellingPrice())
                .brand(productDto.getBrand())
                .build();

    }
}
