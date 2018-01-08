var tempo = new Number();
var correta;
var dados;
var html1 = "";
var html2 = "";
var pontos;
var id_atividade;
var pontosb = 0;
var tempob = 0, id_ativi = 0, id_aula;
aula = 0;
var aux = 0;
var c = 1;
var m = 0;
var n = 4;
var qtd = 1;
var horaImprimivel;
var tamanho = new Number();
$(document).ready(function () {
    var selector = '.treeview';
    $(selector).on('click', function () {
        $("li").removeClass("active");
        $(this).addClass('active');
    });
    $("#sair").click(function () {
        alertify.set({buttonFocus: "cancel"});
        alertify.set({labels: {
                ok: "Sim",
                cancel: "Não"
            }});
        alertify.confirm("Tem Certeza que deseja Sair ?", function (choice) {
            if (choice == true) {
                window.location = '../br.com.educationlm.controller/LogoutCONT.php';
            }
        });
    });
    $('.btnv').click(function () {
        alertify.confirm("Tem Certeza que deseja Sair? Você irá perder todos seus Dados!!", function (choice) {
            if (choice == true) {
                $("div").removeClass("modal-backdrop fade in");
                $("#quiz").modal("hide");
                m = 0;
                n = 4;
                qtd = 1;
                dados = 0;
                document.getElementById("spt").value = 0;
            }
        });
    });
});
function Aula(id) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("aula").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "../br.com.educationlm.controller/IndexCONT.php?id=" + 1 + "&id_a=" + id, true);
    xmlhttp.send();
}

function Atividade(id) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("aula").innerHTML = xmlhttp.responseText;

        }
    };
    xmlhttp.open("GET", "../br.com.educationlm.controller/IndexCONT.php?id=" + 2 + "&id_a=" + id, true);
    xmlhttp.send();
}

function Jogo(id, id_a) {
    id_aula = id_a;
    $.ajax({
        url: "../br.com.educationlm.controller/Jovo.php?id=" + id,
        dataType: "json"
    }).done(function (data) {
        ValidarQuiz(data);
    });
}

function  ValidarQuiz(data) {
    dados = data;
    m =0;
    tamanho = dados.length;
    document.getElementById("pergunta").innerHTML = dados[0].perguntas;
    document.getElementById("pt").innerHTML = dados[0].pontos;
    document.getElementById("dica").value = dados[0].dica;
    id_atividade = dados[0].ID_atividade;
    inp = document.getElementsByClassName("labelp");
    var j = 0;
    document.getElementById("qtd").innerHTML = qtd;
    for (i = m; i < n; i++) {
        inp[j].innerHTML = dados[i].resposta;
        j++;
    }
    tempo = dados[0].tempo;
    correta = dados[1].correta;
    pontos = dados[1].pontos;
    this.Conometro();
}

function Proxima() {
    m += 4;
    n += 4;
    var j = 0, p = 1;
    qtd += 1;
    if (n > tamanho) {
        pontosb = document.getElementById("spt").value;
        tempob = document.getElementById("sessao").value;
        id_ativi = document.getElementById("id_atividade").value;
        Tela();
    } else {
        aux = document.getElementsByName("respost");
        for (i = 0; i < aux.length; i++)
            aux[i].checked = false;
        document.getElementById("pergunta").innerHTML = dados[m].perguntas;
        document.getElementById("pt").innerHTML = dados[m].pontos;
        document.getElementById("dica").value = dados[m].dica;
        inp = document.getElementsByClassName("labelp");
        document.getElementById("qtd").innerHTML = qtd;
        for (i = m; i < n; i++) {
            inp[j].innerHTML = dados[i].resposta;
            j++;
        }
        correta = dados[m].correta;
        pontos = dados[m].pontos;
    }
}

function Checar(ck) {
    if (ck != correta) {
        alertify.error('<h3><b>Cuidado!!</b> Você errou!!</h3>' + pontos)
        var auxs = Number(document.getElementById("spt").value);
        var aux = parseInt(Number(auxs) - Number(pontos));
        if (isNaN(aux))
            aux = 0;
        else {
            document.getElementById("spt").value = "";
            document.getElementById("spt").value = aux;
            Proxima();
        }
    } else {
        alertify.success('<h3><b>Parabéns!!</b> Você acertou!!</h3>' + pontos)
        var auxsd = Number(document.getElementById("spt").value);
        var aux = parseInt(Number(auxsd) + Number(pontos));
        if (isNaN(aux))
            aux = 0;
        else {
            document.getElementById("spt").value = "";
            document.getElementById("spt").value = aux;
            Proxima();
        }
    }
}


function Correta() {
    aux = document.getElementsByName("respost");
    for (i = 0; i < aux.length; i++) {
        if (aux[i].checked) {
            Checar(aux[i].value);
        }
    }
}


function JogoLapis(id, id_aula) {
    document.getElementById("lapis").value = id;
}

function Conometro() {
    if ((tempo - 1) >= 0) {
        var min = parseInt(tempo / 60);
        var seg = tempo % 60;
        if (min < 10) {
            min = "0" + min;
            min = min.substr(0, 2);
        }
        if (seg <= 9) {
            seg = "0" + seg;
        }
        horaImprimivel = '00:' + min + ':' + seg;
        document.getElementById("sessao").value = horaImprimivel;
        setTimeout('Conometro()', 1200);
        tempo--;
    } else {
        Tela();
    }
}

function Nodes(nodes) {
    aux = document.getElementsByName("respost");
    if (nodes.id == "re1")
        aux[0].checked = true;
    if (nodes.id == "re2")
        aux[1].checked = true;
    if (nodes.id == "re3")
        aux[2].checked = true;
    if (nodes.id == "re4")
        aux[3].checked = true;
}


function Terminou() {
    $.ajax({
        url: '../br.com.educationlm.controller/Jovo.php?idpa=' + 1,
        type: 'post',
        dataType: 'html',
        data: {
            'id_atividade': id_atividade,
            'tempo': document.getElementById("tempos").value,
            'pontos': document.getElementById("pontos").value
        }
    }).done(function (data) {
        $('#myModal').modal('hide');
        $("div").removeClass("modal-backdrop fade in");
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                document.getElementById("aula").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "../br.com.educationlm.controller/IndexCONT.php?id=" + 2 + "&id_a=" + id_aula, true);
        xmlhttp.send();
    });
}

function Tela() {
    clearTimeout('Conometro()');
    $('#quiz').modal('hide');
    $('#myModal').modal('show');
    document.getElementById("pontos").value = pontosb;
    document.getElementById("tempos").value = tempob;
}