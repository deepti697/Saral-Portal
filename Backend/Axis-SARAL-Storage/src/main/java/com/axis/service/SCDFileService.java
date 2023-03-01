package com.axis.service;

import org.springframework.web.multipart.MultipartFile;

import com.axis.entity.SCDFiles;

public interface SCDFileService {

    SCDFiles save(MultipartFile file);
    SCDFiles getFile(Long id);
}

