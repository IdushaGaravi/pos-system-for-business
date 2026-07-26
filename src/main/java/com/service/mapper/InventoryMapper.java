package com.service.mapper;

import com.modal.Branch;
import com.modal.Inventory;
import com.modal.Product;
import com.payload.dto.InventoryDto;

public class InventoryMapper {

    public static InventoryDto toDTO(Inventory inventory) {
        return InventoryDto.builder()
                .id(inventory.getId())
                .branchId(inventory.getId())
                .productId(inventory.getProduct().getId())
                .product(ProductMapper.toDTO(inventory.getProduct()))
                .quantity(inventory.getQuantity())
                .build();
    }

    public static Inventory toEntity(InventoryDto inventoryDto,
                                        Branch branch,
                                        Product product) {
        return Inventory.builder()
                .branch(branch)
                .product(product)
                .quantity(inventoryDto.getQuantity())
                .build();

    }
}
