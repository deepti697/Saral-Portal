package com.axis.controller;

import com.axis.entity.SCDFiles;
import com.axis.service.SCDFileService;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;

@RestController
@RequestMapping("/api/scd")
@CrossOrigin(origins = "http://localhost:3000/")
public class SCDController {
    private final SCDFileService scdFileService;

    public SCDController(SCDFileService scdFileService) {
        this.scdFileService = scdFileService;
    }

    @PostMapping
    public ResponseEntity<Void> uploadPdf(@RequestParam("file") MultipartFile file) {
    	scdFileService.save(file);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<InputStreamResource> getPdf(@PathVariable Long id) {
        SCDFiles pdf = scdFileService.getFile(id);
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