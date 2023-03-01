package com.axis.service;


import com.axis.entity.SCDFiles;
import com.axis.respository.SCDFileRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Service
public class SCDFileServiceImpl implements SCDFileService {

    private final SCDFileRepository scdFileRepository;

    public SCDFileServiceImpl(SCDFileRepository scdFileRepository) {
        this.scdFileRepository = scdFileRepository;
    }

    @Override
    public SCDFiles save(MultipartFile file) {
        try {
            SCDFiles scdFile = new SCDFiles();
            scdFile.setFileName(file.getOriginalFilename());
            scdFile.setData(file.getBytes());
            return scdFileRepository.save(scdFile);
        } catch (IOException ex) {
            throw new IllegalArgumentException("Could not store the file. Please try again!");
        }
    }

    @Override
    public SCDFiles getFile(Long id) {
        return scdFileRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("File not found with id: " + id));
    }
}

