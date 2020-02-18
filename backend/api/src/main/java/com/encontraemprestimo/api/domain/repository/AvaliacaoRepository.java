package com.encontraemprestimo.api.domain.repository;


import com.encontraemprestimo.api.domain.model.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Integer> {

    List<Avaliacao> findByPlataformaIdOrderByDataDesc(Integer plataformaId);

}
