package com.service;

import com.payload.dto.RefundDto;

import java.time.LocalDateTime;
import java.util.List;

public interface RefundService {

    RefundDto createRefund(RefundDto refund) throws Exception;
    List<RefundDto> getAllRefunds() throws Exception;
    List<RefundDto> getRefundByCashier(Long cashierId) throws Exception;
    List<RefundDto> getRefundByShiftReport(Long shiftReportId) throws Exception;
    List<RefundDto> getRefundByCashierAndDateRange(Long cashierId,
                                             LocalDateTime startDate,
                                             LocalDateTime endTime) throws Exception;
    List<RefundDto> getyRefundByBranch(Long branchId) throws Exception;
    RefundDto getRefundById(Long refndId) throws Exception;
    void deleteRefund(Long refundId) throws Exception;
}
