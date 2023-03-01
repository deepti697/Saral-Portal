package com.axis.service;

import com.axis.entity.SOPFiles;
import com.axis.respository.SOPFileRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Service
public class SOPFileServiceImpl implements SOPFileService {

    private final SOPFileRepository sopFileRepository;

    public SOPFileServiceImpl(SOPFileRepository sopFileRepository) {
        this.sopFileRepository = sopFileRepository;
    }

    @Override
    public SOPFiles save(MultipartFile file) {
        try {
            SOPFiles sopFile = new SOPFiles();
            sopFile.setFileName(file.getOriginalFilename());
            sopFile.setData(file.getBytes());
            return sopFileRepository.save(sopFile);
        } catch (IOException ex) {
            throw new IllegalArgumentException("Could not store the file. Please try again!");
        }
    }

    @Override
    public SOPFiles getFile(Long id) {
        return sopFileRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("File not found with id: " + id));
    }
}

