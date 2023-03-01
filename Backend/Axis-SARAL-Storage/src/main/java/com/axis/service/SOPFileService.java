package com.axis.service;

import org.springframework.web.multipart.MultipartFile;
import com.axis.entity.SOPFiles;

public interface SOPFileService {

    SOPFiles save(MultipartFile file);
    SOPFiles getFile(Long id);
}

