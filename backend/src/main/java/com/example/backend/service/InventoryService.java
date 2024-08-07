package com.example.backend.service;

import com.example.backend.model.Inventory;
import com.example.backend.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public Inventory saveInventory(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    public List<Inventory> getAllInventories() {
        return inventoryRepository.findAll();
    }

    public Inventory getInventoryById(Long id) {
        return inventoryRepository.findById(id).orElse(null);
    }

    public Inventory updateInventory(Long id, Inventory inventory) {
        Optional<Inventory> existingInventoryOpt = inventoryRepository.findById(id);
        if (existingInventoryOpt.isPresent()) {
            Inventory existingInventory = existingInventoryOpt.get();
            existingInventory.setItem(inventory.getItem());
            existingInventory.setQuantity(inventory.getQuantity());
            existingInventory.setLocation(inventory.getLocation());
            existingInventory.setStatus(inventory.getStatus());
            return inventoryRepository.save(existingInventory);
        } else {
            return null;
        }
    }

    public void deleteInventory(Long id) {
        inventoryRepository.deleteById(id);
    }

    public void deleteAllInventories() {
        inventoryRepository.deleteAll();
    }
}
