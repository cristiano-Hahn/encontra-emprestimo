package com.encontraemprestimo.api.domain.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "plataforma_reclame_aqui")
@Data
public class PlataformaReclameAqui {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "quantidade_reclamacoes", nullable = false)
    private Integer quantidadeReclamacoes;

    @NotNull
    @Column(name = "reclamacoesRespondidas", nullable = false)
    private Float reclamacoesRespondidas;

    @NotNull
    @Column(name = "indiceSolucao", nullable = false)
    private Float indiceSolucao;

    @NotNull
    @Column(name = "voltariaFazerNegocio", nullable = false)
    private Float voltariaFazerNegocio;

    @NotNull
    @Column(name = "notaConsumidor", nullable = false)
    private Float notaConsumidor;

    @NotNull
    @Column(name = "notaGeral", nullable = false)
    private Float notaGeral;


}
