package com.example.backend.controller;

import com.example.backend.model.Contact;
import com.example.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact submitMessage(@RequestBody Contact contact) {
        return contactService.saveMessage(contact);
    }

    @GetMapping
    public List<Contact> getAllMessages() {
        return contactService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Contact getMessageById(@PathVariable Long id) {
        return contactService.getMessageById(id);
    }

    @PutMapping("/{id}")
    public Contact updateMessage(@PathVariable Long id, @RequestBody Contact contact) {
        return contactService.updateMessage(id, contact);
    }
    @DeleteMapping
    public void deleteAllMessages() {
        contactService.deleteAllMessages();
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactService.deleteMessage(id);
    }
}