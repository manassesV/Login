
function Pega_ID(id) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("tab_1-1").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "../br.com.educationlm.controller/RelatorioCONT.php?id=" + id, true);
    xmlhttp.send();
}

function Pega_ID_at(id) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("tab_1-1").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "../br.com.educationlm.controller/RelatorioCONT.php?id_at=" + id, true);
    xmlhttp.send();
}

function Relatorio(id) {
    $.ajax({
        url: "../br.com.educationlm.controller/RelatorioCONT.php?id_pt=" + id,
        dataType: 'json'
    }).done(function (data) {
        document.getElementById("grafico").innerHTML= '<canvas id="myCanvas" class="col-sm-12"></canvas>';
        if(data.length != 0){
        var alunos = [];
        var pontos = [];
        var tempo = [];
        var atividades;
        atividades = data[0].descricao;
        for (var i in data) {
            alunos.push(data[i].nome.toUpperCase() + "-" + data[i].pront);
            pontos.push(data[i].pontos);
            tempo.push(data[i].tempo);
        }
        var chardata = {
            labels: alunos,
            scaleBeginAtZero: true,
            datasets: [{
                    label: "Pontos",
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: pontos

                }]
             
        };
        var ctx = $("#myCanvas");


        var barGraph = new Chart(ctx, {
            type: 'bar',
            data: chardata,
            options: {
                title: {
                    display: true,
                    text: atividades,
                    fontSize: 20
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    xAxes: [{
                            categoryPercentage: 0.4,
                            barPercentage: 0.4,
                        }]
                },
            }
        });
        }else{
            document.getElementById("grafico").innerHTML= "<tr><td colspan='5'><div ></div><div class='alert-danger center-block btn-lg'>Não existem aulas cadastradas!</div></td></tr>";
        }
    }).error(function (data) {
        console.log(data);
    });


}

function isFechar() {
   $("#relatorio").hide();
   $("div").removeClass("modal-backdrop fade in");
}