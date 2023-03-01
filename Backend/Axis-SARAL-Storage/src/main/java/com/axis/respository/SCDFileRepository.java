package com.axis.respository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.entity.SCDFiles;

public interface SCDFileRepository extends JpaRepository<SCDFiles, Long> {
}
