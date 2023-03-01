package com.axis.respository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.axis.entity.SOPFiles;

public interface SOPFileRepository extends JpaRepository<SOPFiles, Long> {
}
