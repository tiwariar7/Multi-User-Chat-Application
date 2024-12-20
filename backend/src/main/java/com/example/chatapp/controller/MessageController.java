package com.example.chatapp.controller;

import com.example.chatapp.model.Message;
import com.example.chatapp.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    @Autowired
    private MessageRepository messageRepository;

    @PostMapping
    public String sendMessage(@RequestBody Message message) {
        messageRepository.save(message);
        return "Message sent!";
    }

    @GetMapping("/{recipientId}")
    public List<Message> getMessages(@PathVariable Long recipientId) {
        return messageRepository.findByRecipientId(recipientId);
    }
}
