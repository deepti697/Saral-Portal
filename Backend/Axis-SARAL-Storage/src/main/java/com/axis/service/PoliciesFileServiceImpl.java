package com.axis.service;

import com.axis.entity.PoliciesFile;
import com.axis.respository.PoliciesFileRepository;
import com.axis.service.PoliciesFileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Service
public class PoliciesFileServiceImpl implements PoliciesFileService {

    private final PoliciesFileRepository policiesFileRepository;

    public PoliciesFileServiceImpl(PoliciesFileRepository policiesFileRepository) {
        this.policiesFileRepository = policiesFileRepository;
    }

    @Override
    public PoliciesFile save(MultipartFile file) {
        try {
            PoliciesFile pdfFile = new PoliciesFile();
            pdfFile.setFileName(file.getOriginalFilename());
            pdfFile.setData(file.getBytes());
            return policiesFileRepository.save(pdfFile);
        } catch (IOException ex) {
            throw new IllegalArgumentException("Could not store the file. Please try again!");
        }
    }

    @Override
    public PoliciesFile getFile(Long id) {
        return policiesFileRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("File not found with id: " + id));
    }
}

