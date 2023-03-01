package com.axis.controller;


import com.axis.entity.SOPFiles;
import com.axis.service.SCDFileService;
import com.axis.service.SOPFileService;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;

@RestController
@RequestMapping("/api/sop")
@CrossOrigin(origins = "http://localhost:3000/")
public class SOPController {
    private final SOPFileService sopFileService;

    public SOPController(SOPFileService sopFileService) {
        this.sopFileService = sopFileService;
    }

    @PostMapping
    public ResponseEntity<Void> uploadPdf(@RequestParam("file") MultipartFile file) {
    	sopFileService.save(file);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<InputStreamResource> getPdf(@PathVariable Long id) {
        SOPFiles pdf = sopFileService.getFile(id);
        if (pdf == null) {
            return ResponseEntity.notFound().build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDisposition(ContentDisposition.inline().filename(pdf.getFileName()).build());

        return ResponseEntity.ok()
                .headers(headers)
                .body(new InputStreamResource(new ByteArrayInputStream(pdf.getData())));
    }
}