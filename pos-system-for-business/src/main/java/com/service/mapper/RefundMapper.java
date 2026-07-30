package com.service.mapper;

import com.modal.Refund;
import com.payload.dto.RefundDto;

public class RefundMapper {

    public static RefundDto toDTO (Refund refund){
        return RefundDto.builder()
                .id(refund.getId())
                .orderId(refund.getOrder().getId())
                .reason(refund.getReason())
                .amount(refund.getAmount())
                .cashierName(refund.getCashier().getFullName())
                .branchId(refund.getBranch().getId())
                .shiftReportId(refund.getShiftReport() != null ? refund.getShiftReport().getId() : null)
                .createdAt(refund.getCreatedAt())
                .build();
    }
}
