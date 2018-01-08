teste = new Array();
i = 0;

function validaCadastroTurma() {
    var desc = document.getElementById('descricao');
    var data_ini = document.getElementById('data_ini');
    var data_fim = document.getElementById('data_fim');
    var cat_turma = document.getElementById('cat_turma');

    /* Validação do campo nome */
    caixa_desc = document.querySelector('.msg');
    if (desc.value === "") {
        caixa_desc.innerHTML = "Favor preencher o Nome da Turma!";
        caixa_desc.style.display = 'block';
        desc.style.borderColor = "red";
        return false;
    } else {
        caixa_desc.style.display = 'none';
        desc.style.borderColor = "#E6E6E6";
    }



    caixa_data_ini = document.querySelector('.msg');
    if (data_ini.value === "") {
        caixa_data_ini.innerHTML = "Favor selecionar Data Inicio!";
        caixa_data_ini.style.display = 'block';
        data_ini.style.borderColor = "red";
        return false;
    } else {
        hoje = new Date();
        anoAtual = hoje.getFullYear();
        ardt = data_ini.value.split("-");
        if (ardt.length == 3) {
            ano = ardt[0];
            mes = ardt[1];
            dia = ardt[2];
            resultado = (!isNaN(dia) && (dia > 0) && (dia < 32)) && (!isNaN(mes) &&
                    (mes > 0) && (mes < 13)) && (!isNaN(ano) && (ano.length == 4) && (ano <= anoAtual
                    && ano >= 2016));
            if (!resultado) {
                caixa_data_ini.innerHTML = "Data Invalida!";
                caixa_data_ini.style.display = 'block';
                data_ini.style.borderColor = "red";
                return  false;
            } else {
                caixa_data_ini.style.display = 'none';
                data_ini.borderColor = "#E6E6E6";
            }

        }
    }

    /* Validação do campo data Fim */
    caixa_data_fim = document.querySelector('.msg');
    if (data_fim.value === "") {
        caixa_data_fim.innerHTML = "Favor selecionar Data Fim!";
        caixa_data_fim.style.display = 'block';
        data_fim.style.borderColor = "red";
        return false;
    } else {
        hoje = new Date();
        anoAtual = hoje.getFullYear();
        ardt = data_fim.value.split("-");
        if (ardt.length == 3) {
            ano = ardt[0];
            mes = ardt[1];
            dia = ardt[2];
            resultado = (!isNaN(dia) && (dia > 0) && (dia < 32)) && (!isNaN(mes) &&
                    (mes > 0) && (mes < 13)) && (!isNaN(ano) && (ano.length == 4) && (ano <= anoAtual
                    && ano >= 2017));
            if (!resultado) {
                caixa_data_fim.innerHTML = "Data do Fim Inválida!";
                caixa_data_fim.style.display = 'block';
                data_fim.style.borderColor = "red";
                return  false;
            } else {
                caixa_data_fim.style.display = 'none';
                data_fim.style.borderColor = "#E6E6E6";
            }

        }
    }
    var nova_data1 = parseInt(data_ini.value.split("-")[2].toString() + data_ini.value.split("-")[1].toString() + data_ini.value.split("-")[0].toString());
    var nova_data2 = parseInt(data_fim.value.split("-")[2].toString() + data_fim.value.split("-")[1].toString() + data_fim.value.split("-")[0].toString());
    caixa_data = document.querySelector('.msg');
    if (new Date(nova_data1) >= new Date(nova_data2)) {
        caixa_data.innerHTML = "A Data de inicio é maior ou igual que a Data Final!";
        caixa_data.style.display = 'block';
        data_ini.style.borderColor = "red";
        data_fim.style.borderColor = "red";
        return false;
    } else {
        caixa_data.style.display = 'none';
        data_ini.style.borderColor = "#E6E6E6";
        data_fim.style.borderColor = "#E6E6E6";
    }


    caixa_cat_t = document.querySelector('.msg');
    if (cat_turma.value === "") {
        caixa_cat_t.innerHTML = "Favor Selecionar Categoria Turma!";
        caixa_cat_t.style.display = 'block';
        cat_turma.style.borderColor = "red";
        return false;
    } else {
        caixa_cat_t.style.display = 'none';
        cat_turma.style.borderColor = "#E6E6E6";
    }




}

$(document).ready(function () {
    var selector = '.treeview';

    $(selector).on('click', function () {
        $("li").removeClass("active");
        $(this).addClass('active');
    });

    alertify.set({labels: {
            ok: "Sim",
            cancel: "Não"
        }});
    $("#form_alt_turma").submit(function (e) {
        e.preventDefault();
        alertify.confirm("Tem Certeza que deseja Alterar?", function (choice) {
            if (choice == true) {
                $.ajax({
                    url: '../br.com.educationlm.controller/Altera_TurmaCONT.php',
                    type: 'post',
                    dataType: 'html',
                    data: {
                        'id': $("#id").val(),
                        'descricao': $("#descricao").val(),
                        'data_ini': $("#data_ini").val(),
                        'data_fim': $("#data_fim").val(),
                        'status': $("#status").val(),
                        'cat_turma': $("#cat_turma").val()
                    }
                }).success(function (data) {
                    window.location = '../br.com.educationlm.view/Alterar_Turma_Tabela.php';

                });

            }

        });


    });




    if (document.getElementById('tables')) {
        $('#tables').DataTable({
            language: {
                search: "Pesquisa:",
                searchPlaceholder: "Pesquisa...",
                "lengthMenu": "",
                "zeroRecords": "Não encontramos Registro!!",
                "sInfo": "",
                "sInfoEmpty": "",
                "showNEntries": false,
                "Info": false,
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                        "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ Resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                }

            }
        });
    }



    $(".tablesd tbody tr td.editable").dblclick(function () {
        if ($('td > input').length > 0) {
            return;
        }

        var id_per = $(this).parents('tr').children().first().text();
        var val = $(this).attr('id');
        var title = $(this).attr('title');
        var conteudoOriginal = $(this).text();
        var novoElemento = $("<input/>", {type: "text", value: conteudoOriginal});
        $(this).html(novoElemento.bind('blur keydown', function (e) {
            var key = e.which;
            var conteudoNovo = $(this).val();
            if (key == 13 && conteudoNovo != "") {
                $(this).parent().html(conteudoNovo);

                $.ajax({
                    type: "POST",
                    url: "../br.com.educationlm.controller/PerguntasCONT.php?alt_perg=" + 1,
                    data: {
                        'id_p': id_per,
                        'id_r': val,
                        'title': title,
                        'conteudo': conteudoNovo
                    },
                    success: function (data) {
                        alertify.set({dely: 1000});
                        alertify.success("Alterado com sucesso");
                    }
                });
            }
            if (e.type == "blur") {
                $(this).parent().html(conteudoOriginal);
            }
        }));

        $(this).children().select();

    });

    $(".tablesd tbody tr td.edita").dblclick(function () {
        if ($('td > input').length > 0) {
            return;
        }

        var id_per = $(this).parents('tr').children().first().text();
        var val = $(this).attr('id');
        var title = $(this).attr('title');
        var conteudoOriginal = $(this).text();

        if (this.las) {
            var novoElemento = $("<input/>", {type: "text", value: conteudoOriginal});
        } else {
            var novoElemento = $("<input/>", {type: "date", value: conteudoOriginal});
        }

        $(this).html(novoElemento.bind('blur keydown', function (e) {
            var key = e.which;
            var conteudoNovo = $(this).val();
            if (key == 13 && conteudoNovo != "") {
                $(this).parent().html(conteudoNovo);

                $.ajax({
                    type: "POST",
                    url: "../br.com.educationlm.controller/PerguntasCONT.php?alt_perg=" + 1,
                    data: {
                        'id_p': id_per,
                        'id_r': val,
                        'title': title,
                        'conteudo': conteudoNovo
                    },
                    success: function (data) {
                        alertify.set({dely: 1000});
                        alertify.success("Alterado com sucesso");
                    }
                });
            }
            if (e.type == "blur") {
                $(this).parent().html(conteudoOriginal);
            }
        }));

        $(this).children().select();

    });



    if (document.getElementsByName("qtt")) {
        var qtt = document.getElementsByName("qtt");
        for (i = 0; i < qtt.length; i++) {
            $.ajax({
                url: "../br.com.educationlm.controller/Cad_QuizCONT.php?id_a=" + 6 + "&id=" + qtt[i].value,
                dataType: "json"
            }).success(function (data) {
                a(data);
            });

        }
    }
    if (document.getElementsByName("qtds")) {
        var qtts = document.getElementsByName("qtds");
        for (i = 0; i < qtts.length; i++) {
            $.ajax({
                url: "../br.com.educationlm.controller/PerguntasCONT.php?id_lapis=" + qtts[i].value,
                dataType: "json"
            }).success(function (data) {
                a(data);
            });
        }
    }

    $('#myLapis').on('show.bs.modal', function (e) {
        $('body').addClass('test');
    });

    $('#myQuiz').on('show.bs.modal', function (e) {
        $('body').addClass('test');
    });
});


function validaCadastroAula() {
    var titulo = document.getElementById('titulo');
    var descricao = document.getElementById('descricao');
    var id_turma = document.getElementById('id_turma');
    var data = document.getElementById('data');

    /* Validação do campo titulo */
    caixa_t = document.querySelector('.msg');
    if (titulo.value === "") {
        caixa_t.innerHTML = "Favor preencher o Titulo da Aula!";
        caixa_t.style.display = 'block';
        titulo.style.borderColor = "red";
        return false;
    } else {
        caixa_t.style.display = 'none';
        titulo.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo descrição */
    caixa_desc = document.querySelector('.msg');
    if (descricao.value === "") {
        caixa_desc.innerHTML = "Favor informe a descrição da aula!";
        caixa_desc.style.display = 'block';
        descricao.style.borderColor = "red";
        return false;
    } else {
        caixa_desc.style.display = 'none';
        descricao.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo turmadata Fim */
    caixa_turma = document.querySelector('.msg');
    if (id_turma.value === "") {
        caixa_turma.innerHTML = "Favor selecionar a Turma!";
        caixa_turma.style.display = 'block';
        id_turma.style.borderColor = "red";
        return false;
    } else {
        caixa_turma.style.display = 'none';
        id_turma.style.borderColor = "#E6E6E6";
    }



    /* Validação do campo data  */
    caixa_data = document.querySelector('.msg');
    if (data.value === "") {
        caixa_data.innerHTML = "Favor Selecionar a Data!";
        caixa_data.style.display = 'block';
        data.style.borderColor = "red";
        return false;
    } else {
        hoje = new Date();
        anoAtual = hoje.getFullYear();
        ardt = data.value.split("-");
        if (ardt.length == 3) {
            ano = ardt[0];
            mes = ardt[1];
            dia = ardt[2];
            resultado = (!isNaN(dia) && (dia > 0) && (dia < 32)) && (!isNaN(mes) &&
                    (mes > 0) && (mes < 13)) && (!isNaN(ano) && (ano.length == 4) && (ano <= anoAtual
                    && ano >= 1900));
            if (!resultado) {
                caixa_data.innerHTML = "Data Invalida!";
                caixa_data.style.display = 'block';
                data.style.borderColor = "red";
                return  false;
            } else {
                caixa_data.style.display = 'none';
                data.style.borderColor = "#E6E6E6";
            }

        }
    }
    if (moment(data.value).isAfter(new Date())) {
        caixa_data.innerHTML = "Data é menor que a Data de Hoje!";
        caixa_data.style.display = 'block';
        data.style.borderColor = "red";
        return  false;
    } else {
        caixa_data.style.display = 'none';
        data.style.borderColor = "#E6E6E6";
    }


}

function limpar_turma() {
    var descricao = document.getElementById('descricao');
    var data_ini = document.getElementById('data_ini');
    var data_fim = document.getElementById('data_fim');
    var cat_turma = document.getElementById('cat_turma');
    caixa = document.querySelector('.msg');

    descricao.style.borderColor = '#E6E6E6';
    data_ini.style.borderColor = "#E6E6E6";
    data_fim.style.borderColor = "#E6E6E6";
    cat_turma.style.borderColor = "#E6E6E6";
    caixa.innerHTML = "";

    return true;
}

function limpar_aula() {
    document.getElementById('titulo').style.borderColor = "#E6E6E6";
    document.getElementById('id_turma').style.borderColor = "#E6E6E6";
    document.getElementById('data').style.borderColor = "#E6E6E6";
    document.querySelector('.msg').innerHTML = "";
}
function gerarData(str) {
    var partes = str.split("/");
    return new Date(partes[2], partes[1] - 1, partes[0]);
}


function confirma(id) {
    alertify.set({buttonFocus: "cancel"});
    alertify.confirm("Tem Certeza que deseja Inativar ?", function (choice) {
        if (choice == true) {
            window.location = '../br.com.educationlm.controller/Inativar_TurmaCONT.php?id_t=' + id;
        }
    });
}

function showTurma(id_turma) {
    if (id_turma === "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "../br.com.educationlm.controller/Altera_AulaCONT.php?id=" + id_turma, true);
        xmlhttp.send();
    }
}

function showTurmaAluno(id_turma) {
    if (id_turma === "") {
        document.getElementById("txtHint").innerHTML = "";
        document.getElementById("relatorio").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        document.getElementById("relatorio").innerHTML = '<a class="glyphicon glyphicon-list-alt link" href="../br.com.educationlm.controller/Relatorio_Aluno_Turma.php"></a>';
        xmlhttp.open("GET", "../br.com.educationlm.controller/Altera_TurmaAlunoCONT.php?id=" + id_turma, true);
        xmlhttp.send();
    }
}

function InativarAula(id_turma) {
    if (id_turma === "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "../br.com.educationlm.controller/Inativar_AulaCONT.php?id=" + id_turma, true);
        xmlhttp.send();
    }
}

function SelecionarAula(id_turma) {
    if (id_turma === "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "../br.com.educationlm.controller/AtividadesCONT.php?id=" + id_turma, true);
        xmlhttp.send();
    }
}


function SelecionarAtividade(id_atividade) {
    tipo = document.getElementById("select").value;
    window.location = "../br.com.educationlm.controller/AtividadesCONT.php?ids=" + id_atividade + "&tipo=" + tipo;
}




function validaCadastroCat() {
    var descricao = document.getElementById('descricao');

    /* Validação do campo titulo */
    caixa_t = document.querySelector('.msg');
    if (descricao.value === "") {
        caixa_t.innerHTML = "Favor preencher a Descrição Tipo Atividade!";
        caixa_t.style.display = 'block';
        descricao.style.borderColor = "red";
        return false;
    } else {
        caixa_t.style.display = 'none';
        descricao.style.borderColor = "#E6E6E6";
    }
}

function limpar_cat() {
    document.getElementById('descricao').style.borderColor = "#E6E6E6";
    document.querySelector('.msg').innerHTML = "";
}

function confirmaCat(id) {
    alertify.set({buttonFocus: "cancel"});
    alertify.confirm("Tem Certeza que deseja Inativar ?", function (choice) {
        if (choice == true) {
            window.location = '../br.com.educationlm.controller/Inativar_CategoriaAtivCONT.php?id=' + id;
        }
    });
}

function validaCadastroAtividades() {
    var desc = document.getElementById('descricao');
    var id_cat = document.getElementById('id_cat');
    var tempo = document.getElementById('tempo');
    var data = document.getElementById('data');
    var perguntas = document.getElementById('pergunta');
    var resposta = document.getElementById('resposta');
    var complemento = document.getElementById('complemento');
    var pontos = document.getElementById('pontos');


    /* Validação do campo descrição */
    if (desc.value === "") {
        desc.style.borderColor = "red";
        $(desc).popover('show');
        ;
        return false;
    } else {
        $(desc).popover('hide');
        desc.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo categoria */
    if (id_cat.value === "") {
        $(id_cat).popover('show');
        ;
        id_cat.style.borderColor = "red";
        return false;
    } else {
        $(id_cat).popover('hide');
        ;
        id_cat.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo data inicio */

    if (data.value === "") {
        $(data).popover('show');
        ;
        data.style.borderColor = "red";
        return false;
    } else {
        hoje = new Date();
        anoAtual = hoje.getFullYear();
        ardt = data.value.split("-");
        if (ardt.length == 3) {
            ano = ardt[0];
            mes = ardt[1];
            dia = ardt[2];
            resultado = (!isNaN(dia) && (dia > 0) && (dia < 32)) && (!isNaN(mes) &&
                    (mes > 0) && (mes < 13)) && (!isNaN(ano) && (ano.length == 4) && (ano <= anoAtual
                    && ano >= 1900));
            if (!resultado) {
                $(data).popover('hide');
                ;
                data.style.borderColor = "red";
                return  false;
            } else {
                $(data).popover('hide');
                ;
                data.borderColor = "#E6E6E6";
            }

        }
    }


    data2 = new Date();
    dia2 = data2.getDate();
    mes2 = data2.getMonth();
    ano2 = data2.getFullYear();

    NomeMes = new Array(12);
    NomeMes[0] = 1;
    NomeMes[1] = 2;
    NomeMes[2] = 3;
    NomeMes[3] = 4;
    NomeMes[4] = 5;
    NomeMes[5] = 6;
    NomeMes[6] = 7;
    NomeMes[7] = 8;
    NomeMes[8] = 9;
    NomeMes[9] = 10;
    NomeMes[10] = 11;
    NomeMes[11] = 12;


    var novadata2 = (dia2 + "-" + NomeMes[mes2] + "-" + ano2);
    var nova_data1 = parseInt(data.value.split("-")[2].toString() + data.value.split("-")[1].toString() + data.value.split("-")[0].toString());
    var nova_data21 = parseInt(novadata2.split("-")[2] + novadata2.split("-")[1] + novadata2.split("-")[0]);

    if (nova_data21 > nova_data1) {
        $(data).popover('show');
        caixa_data.style.display = 'block';
        data.style.borderColor = "red";
        return false;
    } else {
        $(data).popover('hide');
        data.style.borderColor = "#E6E6E6";
    }

    if (document.getElementById('pergunta') != null) {

        if (perguntas.value === "") {
            $(perguntas).popover('show');
            perguntas.style.borderColor = "red";
            return false;
        } else {
            $(perguntas).popover('hide');
            perguntas.style.borderColor = "#E6E6E6";
        }

        /* Validação do campo resposta */
        if (resposta.value === "") {
            $(resposta).popover('show');
            resposta.style.borderColor = "red";
            return false;
        } else {
            $(resposta).popover('hide');
            resposta.style.borderColor = "#E6E6E6";
        }

        /* Validação do campo pontos */
        if (pontos.value === "") {
            $(pontos).popover('show');
            pontos.style.borderColor = "red";
            return false;
        } else {
            $(pontos).popover('hide');
            pontos.style.borderColor = "#E6E6E6";
        }




        /* Validação do campo complemento */
        caixa = document.querySelector('.msg');
        if (complemento.value === "") {
            caixa.innerHTML = "Favor preencher o campo Complemento!";
            caixa.style.display = 'block';
            complemento.style.borderColor = "red";
            return false;
        } else {
            caixa.style.display = 'none';
            complemento.style.borderColor = "#E6E6E6";
        }


        /* Validação do campo temp */
        caixa = document.querySelector('.msg');
        if (tempo.value === "") {
            caixa.innerHTML = "Favor preencher o campo Tempo!";
            caixa.style.display = 'block';
            tempo.style.borderColor = "red";
            return false;
        } else {
            caixa.style.display = 'none';
            tempo.style.borderColor = "#E6E6E6";
        }

        return true;
    } else {
        alertify.alert('<h3>Continue o Processo!</h3>');
        return false;
    }
    return true;
}

function Radio(radio) {

    if (radio == 1) {
        LimparLapis(false);
        document.getElementById("txtHint").innerHTML = "";
        $("a").removeClass("disabled");
    } else if (radio == 2) {
        LimparLapis(true);
        $(".bt_gravar").addClass("disabled");
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "../br.com.educationlm.controller/PerguntasCONT.php?id=" + radio, true);
        xmlhttp.send();

    }
}


function Cadastrar_Atividade(botao) {

    if ($("#descricao").val() != "" && $("#id_cat").val() != "" && $("#data").val() != "" && $("#tipo").val() != "" && $("#tempo").val() != "") {
        $.ajax({
            url: '../br.com.educationlm.controller/Cad_QuizCONT.php?cad=' + 1,
            type: 'post',
            dataType: 'html',
            data: {
                'id_aula': $("#id_aula").val(),
                'descricao': $("#descricao").val(),
                'id_cat': $("#id_cat").val(),
                'data': $("#data").val(),
                'tipo': $("#tipo").val(),
                'tempo': $("#tempo").val()
            }
        }).success(function (data) {
            alertify.success('<h3>Atividade Cadastrada com Sucesso!!</h3>');
            console.log(data);
            LimparAtividade();
        }).error(function () {
            alertify.error('<h3>Atividade Não Cadastrada!!</h3>');
        });

    } else {
        if ($("#descricao").val() == "") {
            $("#descricao").popover('show');
            document.getElementById("descricao").style.borderColor = "red";
            return false;
        } else {
            $("#descricao").popover('hide');
            document.getElementById("descricao").style.borderColor = "#E6E6E6";
        }
        if ($("#id_cat").val() == "") {
            $("#id_cat").popover('show');
            document.getElementById("id_cat").style.borderColor = "red";
            return false;
        } else {
            $("#id_cat").popover('hide');
            document.getElementById("id_cat").style.borderColor = "#E6E6E6";
        }

        if ($("#data").val() == "") {
            $("#data").popover('show');
            document.getElementById("data").style.borderColor = "red";
            return false;
        } else {
            $("#data").popover('hide');
            document.getElementById("data").style.borderColor = "#E6E6E6";
        }
        if ($("#tipo").val() == "") {
            $("#tipo").popover('show');
            document.getElementById("tipo").style.borderColor = "red";
            return false;
        } else {
            $("#tipo").popover('hide');
            document.getElementById("tipo").style.borderColor = "#E6E6E6";
        }
        if ($("#tempo").val() == "") {
            $("#tempo").popover('show');
            document.getElementById("tempo").style.borderColor = "red";
            return false;
        } else {
            $("#tempo").popover('hide');
            document.getElementById("tempo").style.borderColor = "#E6E6E6";
        }
    }

}

function Tipo_perg(radio) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "../br.com.educationlm.controller/Cad_QuizCONT.php?id_tipo=" + radio.value, true);
    xmlhttp.send();

}

function Cadastrar_Alternativas() {
    var elemento = document.getElementsByName('alternativas');
    var alternativa = "";

    if (document.getElementById("pergunta").value != "" && retorno() == true && document.getElementById("correta").value != ""
            && document.getElementById("pontos") != "" && document.getElementById("dicas").value != "") {
        for (i = 0; i < elemento.length; i++) {
            var e = elemento[i];
            alternativa = alternativa + e.value + "#";
        }
        $.ajax({
            url: '../br.com.educationlm.controller/Cad_QuizCONT.php?cad_alt=' + 1,
            type: 'post',
            dataType: 'html',
            data: {
                'perg': document.getElementById("perg").value,
                'perg_id': document.getElementById("perg_id").value,
                'id_atividade': document.getElementById("id_atividade").value,
                'pergunta': document.getElementById("pergunta").value,
                'alternativa': alternativa,
                'correta': document.getElementById("correta").value,
                'pontos': document.getElementById("pontos").value,
                'dicas': document.getElementById("dicas").value
            }
        }).success(function (data) {
            console.log(data);
            alertify.success("Pergunta cadastrada com Sucesso");
            LimparAlternativa(true);
            $("input:radio").attr("checked", false);
        }).error(function (data) {
            console.log(data);
        });
    } else {
        if (document.getElementById("pergunta").value == "") {
            $("#pergunta").popover('show');
            document.getElementById("pergunta").style.borderColor = "red";
            return  false;
        } else {
            $("#pergunta").popover('hide');
            document.getElementById("pergunta").style.borderColor = "#E6E6E6";

            for (i = 0; i < elemento.length; i++) {
                var e = elemento[i];

                if (elemento[i].value == "") {
                    elemento[i].style.borderColor = "red";
                    return  false;
                } else {
                    elemento[i].style.borderColor = "#E6E6E6";
                }
            }
        }
        if (document.getElementById("pontos").value == "") {
            $("#pontos").popover('show');
            document.getElementById("pontos").style.borderColor = "red";
            return  false;
        } else {
            $("#pontos").popover('hide');
            document.getElementById("pontos").style.borderColor = "#E6E6E6";
        }
        if (document.getElementById("correta").value == "") {
            $("#correta").popover('show');
            document.getElementById("correta").style.borderColor = "red";
            return  false;
        } else {
            $("#correta").popover('hide');
            document.getElementById("correta").style.borderColor = "#E6E6E6";
        }
        if (document.getElementById("dicas").value == "") {
            $("#dicas").popover('show');
            document.getElementById("dicas").style.borderColor = "red";
            return  false;
        } else {
            $("#dicas").popover('hide');
            document.getElementById("dicas").style.borderColor = "#E6E6E6";
        }

    }
}

function Cadastrar_Lapis() {
    if (document.getElementById("pergunta").value != "" && retorno() == true && document.getElementById("resposta").value != ""
            && document.getElementById("complemento") != "" && document.getElementById("dicas").value != "" && document.getElementById("pontos").value != "") {

        $.ajax({
            url: '../br.com.educationlm.controller/PerguntasCONT.php?cad_lap=' + 1,
            type: 'post',
            dataType: 'html',
            data: {
                'id_atividade': document.getElementById("id_atividade").value,
                'pergunta': document.getElementById("pergunta").value,
                'resposta': document.getElementById("resposta").value,
                'perg': document.getElementById("perg").value,
                'perg_id': document.getElementById("perg_id").value,
                'complemento': document.getElementById("complemento").value,
                'pontos': document.getElementById("pontos").value,
                'dica': document.getElementById("dicas").value
            }
        }).success(function (data) {
            console.log(data);
            alertify.success("Pergunta cadastrada com Sucesso");
            LimparLapis(true);
            document.getElementById("txtHint").innerHTML = "";
            $("input:radio").attr("checked", false);
        });
    } else {
        if (document.getElementById("pergunta").value == "") {
            $("#pergunta").popover('show');
            document.getElementById("pergunta").style.borderColor = "red";
            return  false;
        } else {
            $("#pergunta").popover('hide');
            document.getElementById("pergunta").style.borderColor = "#E6E6E6";
        }
        if (document.getElementById("resp").value == "") {
            $("#resp").popover('show');
            document.getElementById("resp").style.borderColor = "red";
            return  false;
        } else {
            $("#resposta").popover('hide');
            document.getElementById("resposta").style.borderColor = "#E6E6E6";
        }
        if (document.getElementById("complemento").value == "") {
            $("#complemento").popover('show');
            document.getElementById("complemento").style.borderColor = "red";
            return  false;
        } else {
            $("#complemento").popover('hide');
            document.getElementById("complemento").style.borderColor = "#E6E6E6";
        }
        if (document.getElementById("dicas").value == "") {
            $("#dicas").popover('show');
            document.getElementById("dicas").style.borderColor = "red";
            return  false;
        } else {
            $("#dicas").popover('hide');
            document.getElementById("dicas").style.borderColor = "#E6E6E6";
        }

        if (document.getElementById("pontos").value == "") {
            $("#pontos").popover('show');
            document.getElementById("pontos").style.borderColor = "red";
            return  false;
        } else {
            $("#pontos").popover('hide');
            document.getElementById("pontos").style.borderColor = "#E6E6E6";
        }

    }
}



function SelPerg(id) {
    if (id == "") {
        LimparLapis(true);
    } else {
        $.ajax({
            url: "../br.com.educationlm.controller/PerguntasCONT.php?sel_perg=" + id,
            dataType: "json"
        }).success(function (data) {
            //LimparLapis(false);
            $("a").removeClass("disabled");
            document.getElementById("perg_id").value = data.ID_perg;
            document.getElementById("perg").value = data.perguntas;
            document.getElementById("pergunta").value = data.perguntas;
            document.getElementById("resposta").value = data.complemento;
            document.getElementById("complemento").value = data.resposta;
            document.getElementById("dicas").value = data.dica;
            document.getElementById("pontos").value = data.pontos;
        }).error(function (data) {
            alert("Error ao Selecionar");
        });
    }
}

function Aula_At(id) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "../br.com.educationlm.controller/Cad_QuizCONT.php?id_t=" + 4 + "&id=" + id, true);
    xmlhttp.send();
}


function AtividadeQuiz(id) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("txtHint2").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "../br.com.educationlm.controller/Cad_QuizCONT.php?id_p=" + 5 + "&id=" + id, true);
    xmlhttp.send();
}

function AtividadeAlternativa(id) {
    console.log(id);
    $.ajax({
        url: "../br.com.educationlm.controller/Cad_QuizCONT.php?id_a=" + 6 + "&id=" + id,
        dataType: "json"
    }).success(function (data) {
        console.log(data);
        input = document.getElementsByName("alternativas");
        document.getElementById("atv").innerHTML = data.descricao;
        document.getElementById("id_atividade").value = data.id_atividade;
        document.getElementById("qtd").innerHTML = data.qtd;
    });
}

function AtividadeLapis(id) {
    $.ajax({
        url: "../br.com.educationlm.controller/PerguntasCONT.php?id_lapis=" + id,
        dataType: "json"
    }).success(function (data) {
        console.log(data);
        document.getElementById("atv").innerHTML = data.descricao;
        document.getElementById("id_atividade").value = id;
        if (data.qtd == 0)
            document.getElementById("qtd").innerHTML = 0;
        else
            document.getElementById("qtd").innerHTML = data.qtd;
    }).error(function (data) {
       console.log(data);
    });
}


function InativarAular(id) {
    alertify.set({buttonFocus: "cancel"});
    alertify.confirm("Tem Certeza que deseja Inativar ?", function (choice) {
        if (choice == true) {
            window.location = '../br.com.educationlm.controller/Inativar_AulaCONT.php?id_ina=' + id;
        }
    });
}

function Pergunta(id) {
    if (id == 1) {
        LimparAlternativa(false);
    } else if (id == 2) {
        LimparAlternativa(true);
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "../br.com.educationlm.controller/Cad_QuizCONT.php?id_e=" + 2, true);
        xmlhttp.send();
    }
}



function RespostaPergunta(id) {
    if (id == 0) {
        LimparAlternativa(true);
    } else {
        $.ajax({
            url: "../br.com.educationlm.controller/Cad_QuizCONT.php?id_r=" + 3 + "&id=" + id,
            dataType: "json"
        }).success(function (data) {
            console.log(data);

            document.getElementById("perg").value = data[1].perguntas;
            document.getElementById("perg_id").value = data[1].id_perg;
            document.getElementById("pergunta").value = data[1].perguntas;
            document.getElementById("dicas").value = data[1].dica;
            document.getElementById("pontos").value = data[1].pontos;
            document.getElementById("pergunta").disabled = false;
            document.getElementById("correta").disabled = false;
            document.getElementById("pontos").disabled = false;
            document.getElementById("dicas").disabled = false;

            $(".bt_gravar").removeClass("disabled");
            input = document.getElementsByName("alternativas");
            for (var i = 0; i < input.length; i++) {
                input[i].disabled = false;
                input[i].value = data[i].resposta;
            }
            var c = document.getElementById("correta"), i = 0;
            for (i = 0; i < c.options.length; i++)
            {
                if (c.options[i].value == data[1].correta)
                {
                    c.options[i].selected = true;
                    break;
                }
            }
        });

    }
}


function retorno() {
    var elemento = document.getElementsByName('alternativas');
    for (i = 0; i < elemento.length; i++) {
        var e = elemento[i];
        if (elemento[i].value == "") {
            return  false;
        }
    }
    return true;
}

function LimparAtividade() {
    document.getElementById("descricao").value = "";
    document.getElementById("id_cat").value = "";
    document.getElementById("data").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("tempo").value = "";
    document.getElementById("descricao").style.borderColor = "#E6E6E6";
    document.getElementById("id_cat").style.borderColor = "#E6E6E6";
    document.getElementById("data").style.borderColor = "#E6E6E6";
    document.getElementById("tipo").style.borderColor = "#E6E6E6";
    document.getElementById("tempo").style.borderColor = "#E6E6E6";
    $("#descricao").popover('hide');
    $("#id_cat").popover('hide');
    $("#data").popover('hide');
    $("#tipo").popover('hide');
    $("#tempo").popover('hide');
}


function LimparAlternativa(variavel) {
    document.getElementById("pergunta").disabled = variavel;
    document.getElementById("correta").disabled = variavel;
    document.getElementById("pontos").disabled = variavel;
    document.getElementById("dicas").disabled = variavel;
    document.getElementById("pergunta").value = "";
    document.getElementById("correta").value = "";
    document.getElementById("pontos").value = "";
    document.getElementById("dicas").value = "";
    document.getElementById("pergunta").style.borderColor = "#E6E6E6";
    document.getElementById("correta").style.borderColor = "#E6E6E6";
    document.getElementById("pontos").style.borderColor = "#E6E6E6";
    document.getElementById("dicas").style.borderColor = "#E6E6E6";

    for (var i = 0; i < input.length; i++) {
        input[i].disabled = variavel;
        input[i].style.borderColor = "#E6E6E6";
        input[i].value = "";
    }
    if (variavel == true)
        $(".bt_gravar").addClass("disabled");
    else
        $(".bt_gravar").removeClass("disabled");
    document.getElementById("txtHint").innerHTML = "";
}


function LimparLapis(variavel) {
    document.getElementById("pergunta").disabled = variavel;
    document.getElementById("resposta").disabled = variavel;
    document.getElementById("complemento").disabled = variavel;
    document.getElementById("pontos").disabled = variavel;
    document.getElementById("dicas").disabled = variavel;
    document.getElementById("pergunta").value = "";
    document.getElementById("resposta").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("pontos").value = "";
    document.getElementById("dicas").value = "";
    document.getElementById("pergunta").style.borderColor = "#E6E6E6";
    document.getElementById("resposta").style.borderColor = "#E6E6E6";
    document.getElementById("complemento").style.borderColor = "#E6E6E6";
    document.getElementById("pontos").style.borderColor = "#E6E6E6";
    document.getElementById("dicas").style.borderColor = "#E6E6E6";
    $("#pergunta").popover('hide');
    $("#resposta").popover('hide');
    $("#complemento").popover('hide');
    $("#pontos").popover('hide');
    $("#dicas").popover('hide');
}

function LimpaR() {
    var ir = document.getElementsByName("qtds");
    document.getElementById("txtHint").innerHTML = "";
    $(ir).css({'outline': 'none'});
    for (i = 0; i < ir.length; i++) {
        if (ir[i].checked)
            ir[i].checked = false;
    }
    var radio = document.getElementsByName("optradio");
    for (i = 0; i < radio.length; i++)
        if (radio[i].checked)
            radio[i].checked = false;
    this.LimparLapis(true)
}

function LimpaB() {
    var ir = document.getElementsByName("qtt");
    document.getElementById("txtHint").innerHTML = "";
    $(ir).css({'outline': 'none'});
    for (i = 0; i < ir.length; i++) {
        if (ir[i].checked)
            ir[i].checked = false;
    }
    var radio = document.getElementsByName("optradio");
    for (i = 0; i < radio.length; i++)
        if (radio[i].checked)
            radio[i].checked = false;
    this.LimparAlternativa(true);
    var qtt = document.getElementsByName("qtt");
    var qtd = document.getElementsByName("qtdx");

    for (i = 0; i < qtt.length; i++) {
        $.ajax({
            url: "../br.com.educationlm.controller/Cad_QuizCONT.php?id_a=" + 6 + "&id=" + qtt[i].value,
            dataType: "json"
        }).success(function (data) {
            a(data);
        });
        if (qtt.length) {
            u = 0;
        }

    }
}

u = 0;
function a(dados) {
    arr = new Array();
    arr["qtd"] = dados.qtd;
    console.log(arr.qtd)
    document.getElementsByClassName("qtd")[u].innerHTML = arr.qtd;
    u++;
}

function  Alterar_AtividadesQ(id) {
    window.location = "../br.com.educationlm.controller/AtividadesCONT.php?alt_ativ=" + id;
}

function  Alterar_AtividadesL(id) {
    window.location = "../br.com.educationlm.controller/AtividadesCONT.php?alt_ativl=" + id;
}


function Altera_Correta(dados) {
    var val = $(dados).attr('id');
    var title = $(dados).attr('title');
    $.ajax({
        type: "POST",
        url: "../br.com.educationlm.controller/PerguntasCONT.php?alt_perg=" + 1,
        data: {
            'id_p': val,
            'title': title,
            'conteudo': dados.value
        },
        success: function (data) {
            alertify.success("Alterado com sucesso");
        }
    });
}