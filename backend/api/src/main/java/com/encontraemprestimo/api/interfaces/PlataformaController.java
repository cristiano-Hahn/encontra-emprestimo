package com.encontraemprestimo.api.interfaces;

import com.encontraemprestimo.api.domain.model.Avaliacao;
import com.encontraemprestimo.api.domain.model.Plataforma;
import com.encontraemprestimo.api.domain.repository.AvaliacaoRepository;
import com.encontraemprestimo.api.domain.repository.PlataformaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PlataformaController {

    @Autowired
    private PlataformaRepository plataformaRepository;

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @GetMapping("/plataformas")
    public List<Plataforma> buscarPlataformas() {
        return plataformaRepository.findAll();
    }

    @GetMapping("/plataformas/{id}")
    public Plataforma buscarPlataforma(@PathVariable("id") Integer id) {
        return plataformaRepository.getOne(id);
    }

    @GetMapping("/plataformas/{id}/avaliacoes")
    public List<Avaliacao> buscarAvaliacoes(@PathVariable("id") Integer plataformaId) {
        return avaliacaoRepository.findByPlataformaId(plataformaId);
    }

    @PostMapping("/plataformas/{id}/avaliacoes")
    public Avaliacao criarAvaliacao(@PathVariable("id") Integer plataformaId,
                                    @Valid @RequestBody Avaliacao avaliacao) {
        avaliacao.setPlataforma(plataformaRepository.getOne(plataformaId));
        return avaliacaoRepository.save(avaliacao);
    }
}
