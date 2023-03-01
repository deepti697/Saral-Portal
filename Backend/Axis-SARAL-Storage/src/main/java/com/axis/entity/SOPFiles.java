package com.axis.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Table(name = "sop_files")
public class SOPFiles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fileName;

    @Lob
    @Column(nullable = false)
    private byte[] data;

    public SOPFiles() {
    }

    public SOPFiles(String fileName, byte[] data) {
        this.fileName = fileName;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "PdfFile{" +
                "id=" + id +
                ", fileName='" + fileName + '\'' +
                ", data=" + Arrays.toString(data) +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SOPFiles)) return false;
        SOPFiles pdfFile = (SOPFiles) o;
        return getId().equals(pdfFile.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}
