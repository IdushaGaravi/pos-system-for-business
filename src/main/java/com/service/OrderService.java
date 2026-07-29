package com.service;

import com.domain.OrderStatus;
import com.domain.PaymentType;
import com.payload.dto.OrderDto;

import java.util.List;

public interface OrderService {

    OrderDto createOrder(OrderDto orderDto) throws Exception;
    OrderDto getOrderById(Long id) throws Exception;

    List<OrderDto> getOrdersByBranch(Long branchId,
                                     Long customerId,
                                     Long cashierId,
                                     PaymentType paymentType,
                                     OrderStatus status) throws Exception;
    List<OrderDto> getOrderByCashierId(Long cashierId);
    void deleteOrder(Long id) throws Exception;
    List<OrderDto> getTodayOrderByBranch(Long branchId) throws Exception;
    List<OrderDto> getOrdersByCustomerId(Long customerId) throws Exception;
    List<OrderDto> getTop5RecentOrdersByBranchId(Long branchId) throws Exception;
}
