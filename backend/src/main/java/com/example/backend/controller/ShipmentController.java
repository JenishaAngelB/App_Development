package com.example.backend.controller;

import com.example.backend.model.Shipment;
import com.example.backend.service.ShipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/shipments")
public class ShipmentController {

    @Autowired
    private ShipmentService shipmentService;

    @PostMapping
    public ResponseEntity<Shipment> createShipment(@RequestBody Shipment shipment) {
        return new ResponseEntity<>(shipmentService.createShipment(shipment), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Shipment>> getAllShipments() {
        return new ResponseEntity<>(shipmentService.getAllShipments(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shipment> getShipmentById(@PathVariable Long id) {
        Optional<Shipment> shipment = shipmentService.getShipmentById(id);
        return shipment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shipment> updateShipment(@PathVariable Long id, @RequestBody Shipment updatedShipment) {
        Shipment shipment = shipmentService.updateShipment(id, updatedShipment);
        return shipment != null ? ResponseEntity.ok(shipment) : ResponseEntity.notFound().build();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllShipments() {
        shipmentService.deleteAllShipments();
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShipmentById(@PathVariable Long id) {
        shipmentService.deleteShipmentById(id);
        return ResponseEntity.noContent().build();
    }
}
