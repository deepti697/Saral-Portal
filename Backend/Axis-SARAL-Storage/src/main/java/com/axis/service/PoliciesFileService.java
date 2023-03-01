package com.axis.service;

import com.axis.entity.PoliciesFile;
import org.springframework.web.multipart.MultipartFile;

public interface PoliciesFileService {

    PoliciesFile save(MultipartFile file);
    PoliciesFile getFile(Long id);
}

