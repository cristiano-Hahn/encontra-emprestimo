package com.encontraemprestimo.api.domain.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "plataforma")
@Data
public class Plataforma {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer id;

    @NotEmpty
    @Column(name = "nome", nullable = false)
    private String nome;

    @NotEmpty
    @Column(name = "razao_social", nullable = false)
    private String razaoSocial;

    @NotEmpty
    @Column(name = "cnpj", nullable = false, length = 14)
    private String cnpj;

    @Column(name = "cnpj_verificado", nullable = false)
    private boolean cnpjVerificado;

    @Column(name = "telefone_comercial")
    private String telefoneComercial;

    @Column(name = "telefone_comercial_verificado", nullable = false)
    private boolean telefoneComercialVerificado;

    @NotEmpty
    @Column(name = "endereco_online", nullable = false)
    private String enderecoOnline;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_cadastro")
    private Date dataCadastro;

    @Size(min = 0, max = 5)
    @Column(name = "nota_geral")
    private Float notaGeral;

    @Column(name = "numero_avaliacoes", nullable = false)
    private Integer numeroAvaliacoes;
    
    @Column(name = "imagem", nullable = false, length = 100000)
    private String imagem;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "reclame_aqui_id", referencedColumnName = "id")
    private PlataformaReclameAqui reclameAqui;

}
