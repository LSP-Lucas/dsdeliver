package com.devsupeior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsupeior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
