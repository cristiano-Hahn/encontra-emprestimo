package com.encontraemprestimo.api.interfaces;

import com.encontraemprestimo.api.domain.model.Plataforma;
import com.encontraemprestimo.api.domain.repository.PlataformaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Pageable;
import java.util.List;

@RestController
public class PlataformaController {

    @Autowired
    private PlataformaRepository plataformaRepository;

    @GetMapping("/plataformas")
    public List<Plataforma> buscarPlataformas() {
         return plataformaRepository.findAll();
    }
}
