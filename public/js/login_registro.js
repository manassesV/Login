function validaRecSenha() {
    var email = document.getElementById('email2');
    var senha = document.getElementById('psw');
    var senha2 = document.getElementById('psw2');
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    caixa = document.querySelector('.msg');
    if (email.value === "") {
        email.style.borderColor = "red";
        $(email).popover('show');
        return false;
    } else if (filtro.test(email.value)) {
        email.style.borderColor = "#E6E6E6";
        $(email).popover('hide');
    } else {
        email.style.borderColor = "red";
        return false;
    }

    if (senha.value === "") {
        senha.style.borderColor = "red";
        $(senha).popover('show');
        return  false;
    } else {
        email.style.borderColor = "#E6E6E6";
        $(email).popover('hide');
    }

    if (senha2.value === "") {
        senha2.style.borderColor = "red";
        $(senha2).popover('show');
        return  false;
    } else {
        caixa.style.display = 'none';
        senha2.style.borderColor = "#E6E6E6";
    }
    return  true;

}

function validaLogin() {
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    caixa_email = document.querySelector('.msg-email');
    if (email.value === "") {
        caixa_email.innerHTML = "Favor preencher o E-mail!";
        caixa_email.style.display = 'block';
        email.style.borderColor = "red";
        return false;
    } else if (filtro.test(email.value)) {
        caixa_email.style.display = 'none';
        email.style.borderColor = "#E6E6E6";
    } else {
        caixa_email.innerHTML = "Formato do E-mail inválido!";
        caixa_email.style.display = 'block';
        email.style.borderColor = "red";
        return false;
    }

    /* Validação do campo pront */
    caixa_senha = document.querySelector('.msg-senha');
    if (senha.value === "") {
        caixa_senha.innerHTML = "Favor preencher o campo Senha!";
        caixa_senha.style.display = 'block';
        senha.style.borderColor = "red";
        return false;
    } else {
        caixa_senha.style.display = 'none';
        senha.style.borderColor = "#E6E6E6";
    }

    return  true;

}

function validaCadastroAluno() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var pront = document.getElementById('pront');
    var senha = document.getElementById('senha');
    var confirme_senha = document.getElementById('confirme_senha');
    var sexo = document.getElementById('sexo');
    var data_nasc = document.getElementById("data_nasc");
    var regExp = /^\d{2}\/\d{2}\/\d{4}$/;
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    /* Validação do campo nome */
    caixa_nome = document.querySelector('.msg');
    if (nome.value === "") {
        caixa_nome.innerHTML = "Favor preencher o Nome!";
        caixa_nome.style.display = 'block';
        nome.style.borderColor = "red";
        return false;
    } else {
        caixa_nome.style.display = 'none';
        nome.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo email */
    caixa_email = document.querySelector('.msg');
    if (email.value === "") {
        caixa_email.innerHTML = "Preencha o campo E-mail!";
        caixa_email.style.display = 'block';
        email.style.borderColor = "red";
        return false;
    } else if (filtro.test(email.value)) {
        caixa_email.style.display = 'none';
        email.style.borderColor = "#E6E6E6";
    } else {
        caixa_email.innerHTML = "Formato do E-mail inválido!";
        caixa_email.style.display = 'block';
        email.style.borderColor = "red";
        return false;
    }

    caixa_sexo = document.querySelector('.msg');
    if (sexo.value === "") {
        caixa_sexo.innerHTML = "Favor selecione o Sexo!";
        caixa_sexo.style.display = 'block';
        sexo.style.borderColor = "red";
        return false;
    } else {
        caixa_sexo.style.display = 'none';
        sexo.style.borderColor = "#E6E6E6";
    }

    caixa_data_nasc = document.querySelector('.msg');
    if (data_nasc.value === "") {
        caixa_data_nasc.innerHTML = "Favor informe a Data de Nascimento";
        caixa_data_nasc.style.display = 'block';
        data_nasc.style.borderColor = "red";
        return  false;
    } else {
        hoje = new Date();
        anoAtual = hoje.getFullYear();
        ardt = data_nasc.value.split("-");
        if (ardt.length == 3) {
            ano = ardt[0];
            mes = ardt[1];
            dia = ardt[2];
            resultado = (!isNaN(dia) && (dia > 0) && (dia < 32)) && (!isNaN(mes) &&
                    (mes > 0) && (mes < 13)) && (!isNaN(ano) && (ano.length == 4) && (ano <= anoAtual
                    && ano >= 1900));
            if (!resultado) {
                caixa_data_nasc.innerHTML = "Data de Nascimento Invalida!";
                caixa_data_nasc.style.display = 'block';
                data_nasc.style.borderColor = "red";
                return  false;
            } else {
                caixa_data_nasc.style.display = 'none';
                data_nasc.style.borderColor = "#E6E6E6";
            }

        }

    }


    /* Validação do campo pront */
    caixa_pront = document.querySelector('.msg');
    if (pront.value === "") {
        caixa_pront.innerHTML = "Favor preencher o Protuário!";
        caixa_pront.style.display = 'block';
        pront.style.borderColor = "red";
        return false;
    } else {
        caixa_pront.style.display = 'none';
        pront.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo senha */
    caixa_senha = document.querySelector('.msg');
    if (senha.value === "") {
        caixa_pront.innerHTML = "Favor preencher a Senha!";
        caixa_pront.style.display = 'block';
        senha.style.borderColor = "red";
        return false;
    } else {
        caixa_pront.style.display = 'none';
        senha.style.borderColor = "#E6E6E6";
    }


    /* Validação do campo confirme senha */
    caixa_senha = document.querySelector('.msg');
    if (confirme_senha.value === "") {
        caixa_pront.innerHTML = "Favor preencher o campo Confirme Senha!";
        caixa_pront.style.display = 'block';
        confirme_senha.style.borderColor = "red";
        return false;
    } else {
        caixa_pront.style.display = 'none';
        confirme_senha.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo prof e informe_prof */
    caixa_igual = document.querySelector('.msg');
    if (senha.value !== confirme_senha.value) {
        caixa_igual.innerHTML = "Senha e Confirme Senha Diferentes!";
        senha.style.borderColor = "red";
        confirme_senha.style.borderColor = "red";
        caixa_igual.style.display = 'block';
        return false;
    } else {
        if (senha.length < 8) {
            caixa_igual.innerHTML = "Senha menor que 8 caracteres!";
            caixa_igual.style.display = 'block';
            senha.style.borderColor = "red";
            return false;
        } else {
            caixa_igual.style.display = 'none';
            senha.style.borderColor = "#E6E6E6";
            confirme_senha.style.borderColor = "#E6E6E6";
        }

    }
    return true;
}


function validaCadastroProfessor() {
    var nome = document.getElementById('nome');
    var email3 = document.getElementById('email');
    var pront = document.getElementById('prof');
    var senha2 = document.getElementById('senha');
    var confirme_senha2 = document.getElementById('confirme_senha2');
    var sexo = document.getElementById('sexo');
    var data_nasc = document.getElementById("data_nasc");
    var regExp = /^\d{2}\/\d{2}\/\d{4}$/;
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    /* Validação do campo nome */;
    if (nome.value === "") {
        nome.style.borderColor = "red";
        return false;
    } else {
        nome.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo email */
    if (email3.value === "") {
        email3.style.borderColor = "red";
        return false;
    } else if (filtro.test(email3.value)) {
        email3.style.borderColor = "#E6E6E6";
    } else {
        caixa_email.innerHTML = "Formato do E-mail inválido!";
        caixa_email.style.display = 'block';
        email3.style.borderColor = "red";
        return false;
    }

    caixa_sexo = document.querySelector('.msg2');
    if (sexo.value === "") {
        sexo.style.borderColor = "red";
        return false;
    } else {
        sexo.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo pront */
    if (pront.value === "") {
        pront.style.borderColor = "red";
        return false;
    } else {
        pront.style.borderColor = "#E6E6E6";
    }
    /* Validação do campo senha */
    if (senha2.value === "") {
        senha2.style.borderColor = "red";
        return false;
    } else {
        senha2.style.borderColor = "#E6E6E6";
    }


    /* Validação do campo confirme senha */
    if (confirme_senha2.value === "") {
        confirme_senha2.style.borderColor = "red";
        return false;
    } else {
        confirme_senha2.style.borderColor = "#E6E6E6";
    }

    /* Validação do campo prof e informe_prof */
    if (senha2.value !== confirme_senha2.value) {
        $(senha2).popover({title: "Header", content: "Blabla", trigger: "show"});

        senha2.style.borderColor = "red";
        confirme_senha2.style.borderColor = "red";
        return false;
    } else {
        if (senha2.length < 8) {
            senha2.style.borderColor = "red";
            return false;
        } else {
            senha2.style.borderColor = "#E6E6E6";
            confirme_senha2.style.borderColor = "#E6E6E6";
        }

    }
    return true;
}
function confirma(id) {
    alertify.confirm("Tem Certeza que deseja Inativar?", function (choice) {
        if (choice == true) {
            window.location = '../br.com.educationlm.controller/Inativar_AlunoCONT.php?id_usu=' + id;
        }
    });
}



function limpar() {
    document.getElementById('nome').style.borderColor = "#E6E6E6";
    document.getElementById('email').style.borderColor = "#E6E6E6";
    document.getElementById('pront').style.borderColor = "#E6E6E6";
    document.getElementById('senha').style.borderColor = "#E6E6E6";
    document.getElementById('confirme_senha').style.borderColor = "#E6E6E6";
    document.getElementById('sexo').style.borderColor = "#E6E6E6";
    document.getElementById("data_nasc").style.borderColor = "#E6E6E6";
    document.querySelector('.msg').innerHTML = "";
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
    $.ajax({
        url: 'http://localhost/EducationLM/br.com.educationlm.controller/Altera_AlunoCONT.php',
        type: 'post',
        data: {tag: 'getData'},
        dataType: 'json',
        success: function (data) {
            if (data.success) {
                $.each(data, function (index, record) {
                    if ($.isNumeric(index)) {
                        var row = $("<tr />");
                        $("<td />").text(record.nome).appendTo(row);
                        $("<td />").text(record.email).appendTo(row);
                        $("<td />").text(record.status).appendTo(row);
                        $("<td />").text(record.sexo).appendTo(row);
                        $("<td />").text(record.data_nasc).appendTo(row);
                        $("<td />").text(record.pront).appendTo(row);
                        row.appendTo("table");
                    }
                });
            }

            $('table').dataTable({
                "bJQueryUI": true,
                "sPaginationType": "full_numbers"
            });
        }
    });

    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

    $("#bt_sair").click(function () {
        $("#myProf").modal();
    });


    if (document.getElementById('tables')) {
        $('#tables').DataTable({
            language: {
                search: "Pesquisa:",
                searchPlaceholder: "Pesquisa...",
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
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                }

            }
        });
    }

});

function validaContato() {
    var email = document.getElementById('email');
    var nome = document.getElementById('nome');
    var assunto = document.getElementById('assunto');
    var descricao = document.getElementById('descricao');
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    caixa = document.querySelector('.msg');
    if (nome.value === "") {
        caixa.innerHTML = "Favor preecher o Nome!";
        caixa.style.display = 'block';
        nome.style.borderColor = "red";
        return  false;
    } else {
        caixa.style.display = 'none';
        nome.style.borderColor = "#E6E6E6";
    }

    if (email.value === "") {
        caixa.innerHTML = "Favor preencher o E-mail!";
        caixa.style.display = 'block';
        email.style.borderColor = "red";
        return false;
    } else if (filtro.test(email.value)) {
        caixa.style.display = 'none';
        email.style.borderColor = "#E6E6E6";
    } else {
        caixa.innerHTML = "Formato do E-mail inválido!";
        caixa.style.display = 'block';
        email.style.borderColor = "red";
        return false;
    }

    if (assunto.value === "") {
        caixa.innerHTML = "Favor preecher o Assunto!";
        caixa.style.display = 'block';
        assunto.style.borderColor = "red";
        return  false;
    } else {
        caixa.style.display = 'none';
        assunto.style.borderColor = "#E6E6E6";
    }

    if (descricao.value === "") {
        caixa.innerHTML = "Favor preecher a Descrição!";
        caixa.style.display = 'block';
        descricao.style.borderColor = "red";
        return  false;
    } else {
        caixa.style.display = 'none';
        descricao.style.borderColor = "#E6E6E6";
    }
    return  true;

}

function limparCont() {
    document.getElementById('nome').style.borderColor = "#E6E6E6";
    document.getElementById('email').style.borderColor = "#E6E6E6";
    document.getElementById('assunto').style.borderColor = "#E6E6E6";
    document.getElementById('descricao').style.borderColor = "#E6E6E6";
    document.querySelector('.msg').innerHTML = "";
}


function  LimparCadastroProfessor() {
    document.getElementById('nome').style.borderColor = "#E6E6E6";
    document.getElementById('email3').style.borderColor = "#E6E6E6";
    document.getElementById('sexo').style.borderColor = "#E6E6E6";
    document.getElementById('data_nasc').style.borderColor = "#E6E6E6";
    document.getElementById('prof').style.borderColor = "#E6E6E6";
    document.getElementById('senha2').style.borderColor = "#E6E6E6";
    document.getElementById('confirme_senha2').style.borderColor = "#E6E6E6";
    document.getElementById("nome").value = "";
    document.getElementById("email3").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("data_nasc").value = "";
    document.getElementById("prof").value = "";
    document.getElementById("senha2").value = "";
    document.getElementById("confirme_senha2").value = "";
    $("#nome").popover('hide');
    $("#email3").popover('hide');
    $("#sexo").popover('hide');
    $("#data_nasc").popover('hide');
    $("#prof").popover('hide');
    $("#senha2").popover('hide');
    $("#confirme_senha2").popover('hide');

}

function  LimparEsqueceuSenha() {
    document.getElementById('email2').style.borderColor = "#E6E6E6";
    document.getElementById('psw').style.borderColor = "#E6E6E6";
    document.getElementById('psw2').style.borderColor = "#E6E6E6";
    document.getElementById("email2").value = "";
    document.getElementById("psw").value = "";
    document.getElementById("psw2").value = "";
    $("#email2").popover('hide');
    $("#psw").popover('hide');
    $("#psw2").popover('hide');
}


function CadastrarProfessor() {
    if (validaCadastroProfessor()) {
        $.ajax({
            url: 'br.com.educationlm.controller/Cad_ProfCONT.php',
            type: 'post',
            dataType: 'html',
            data: {
                'nome': document.getElementById("nome").value,
                'email3': document.getElementById("email3").value,
                'sexo': document.getElementById("sexo").value,
                'data_nasc': document.getElementById("data_nasc").value,
                'prof': document.getElementById("prof").value,
                'senha2': document.getElementById("senha2").value
            }
        }).success(function (data) {
            LimparCadastroProfessor();
            $("#myProf").modal('hide');
            alertify.success('<h3>Professor Cadastrado com Sucesso!!<b>Acesse o Sistema</b></h3>');
        }).error(function () {
            alertify.error('<h3>Professor Não Cadastrado!!</h3>');
        });

    }
}

function  Login() {
    $.ajax({
        url: 'br.com.educationlm.controller/LoginUsuarioCONT.php?acao=logar&tipo=site',
        type: 'post',
        dataType: 'html',
        data: {
            'email': document.getElementById("email").value,
            'senha': document.getElementById("senha").value
        }
    }).success(function (data) {
        var dados = [];
        dados = data.split(",");     
        if (dados[2] == 1) {
            window.location.href = "./br.com.educationlm.view/prof.php";
        } else if (dados[2] == 2) {
            window.location.href = "./br.com.educationlm.view/aluno.php";
        }else{
            document.getElementById("log").innerHTML="Usuário não encontrado!"
        }
    }).error(function (data) {
        console.log(data);
        alertify.error('<h3>Professor Não Cadastrado!!</h3>');
    });

}
