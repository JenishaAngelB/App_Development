package com.example.backend.model;


import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Shipment {

    @Id
    private Long id;

    private String selectedService;
    private String customerName;
    private String contactInfo;
    private String details;
    private String selectedPayment;
    private String cardNumber;
    private String cvv;
    private String expiryDate;
    private String upiId;
    private String barcode;
    private String netBankingDetails;
    private Integer containers;

    @ElementCollection
    private List<WarehouseItem> warehouseItems;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSelectedService() {
        return selectedService;
    }

    public void setSelectedService(String selectedService) {
        this.selectedService = selectedService;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getSelectedPayment() {
        return selectedPayment;
    }

    public void setSelectedPayment(String selectedPayment) {
        this.selectedPayment = selectedPayment;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getUpiId() {
        return upiId;
    }

    public void setUpiId(String upiId) {
        this.upiId = upiId;
    }

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }

    public String getNetBankingDetails() {
        return netBankingDetails;
    }

    public void setNetBankingDetails(String netBankingDetails) {
        this.netBankingDetails = netBankingDetails;
    }

    public Integer getContainers() {
        return containers;
    }

    public void setContainers(Integer containers) {
        this.containers = containers;
    }

    public List<WarehouseItem> getWarehouseItems() {
        return warehouseItems;
    }

    public void setWarehouseItems(List<WarehouseItem> warehouseItems) {
        this.warehouseItems = warehouseItems;
    }
}
