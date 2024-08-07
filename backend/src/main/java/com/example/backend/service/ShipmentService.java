package com.example.backend.service;

import com.example.backend.model.Shipment;
import com.example.backend.repository.ShipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShipmentService {

    @Autowired
    private ShipmentRepository shipmentRepository;

    public Shipment createShipment(Shipment shipment) {
        return shipmentRepository.save(shipment);
    }

    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }

    public Optional<Shipment> getShipmentById(Long id) {
        return shipmentRepository.findById(id);
    }

    public Shipment updateShipment(Long id, Shipment updatedShipment) {
        return shipmentRepository.findById(id).map(shipment -> {
            shipment.setSelectedService(updatedShipment.getSelectedService());
            shipment.setCustomerName(updatedShipment.getCustomerName());
            shipment.setContactInfo(updatedShipment.getContactInfo());
            shipment.setDetails(updatedShipment.getDetails());
            shipment.setSelectedPayment(updatedShipment.getSelectedPayment());
            shipment.setCardNumber(updatedShipment.getCardNumber());
            shipment.setCvv(updatedShipment.getCvv());
            shipment.setExpiryDate(updatedShipment.getExpiryDate());
            shipment.setUpiId(updatedShipment.getUpiId());
            shipment.setBarcode(updatedShipment.getBarcode());
            shipment.setNetBankingDetails(updatedShipment.getNetBankingDetails());
            shipment.setContainers(updatedShipment.getContainers());
            shipment.setWarehouseItems(updatedShipment.getWarehouseItems());
            return shipmentRepository.save(shipment);
        }).orElse(null);
    }

    public void deleteAllShipments() {
        shipmentRepository.deleteAll();
    }

    public void deleteShipmentById(Long id) {
        shipmentRepository.deleteById(id);
    }
}
