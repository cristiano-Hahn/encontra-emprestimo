package com.encontraemprestimo.api.domain.model;

import com.encontraemprestimo.api.domain.model.enums.AvaliacaoRecomenda;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "avaliacao")
@Data
public class Avaliacao {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "nome_usuario")
    private String nomeUsuario;

    @NotNull
    @Column(name = "nota", nullable = false)
    private Float nota;

    @Column(name = "comentario", length = 1000)
    private String comentario;

    @Enumerated(EnumType.STRING)
    @Column(name = "recomenda", nullable = false)
    private AvaliacaoRecomenda recomenda;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "plataforma_id", referencedColumnName = "id", nullable = false)
    private Plataforma plataforma;

}
