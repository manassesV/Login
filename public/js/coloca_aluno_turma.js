
$(document).ready(function () {
    alertify.set({labels: {
            ok: "Sim",
            cancel: "Não"
        }});
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
                    "sLast": "Último"                }


            }
        });
      
    }


});
function ValidaIDAluno() {
    id_aluno = document.getElementsByName("id_aluno");
    var vet = "";
    for (i = 0; i < id_aluno.length; i++) {
        if (id_aluno[i].checked) {
            vet = vet + id_aluno[i].value + "-";
            if (vet) {
                window.location = '../br.com.educationlm.controller/Cadastrar_Aluno_TurmaCONT.php?id=' + vet;
            }
        }
    }
}
function ValidaCheck() {
    opt = document.getElementsByName("opt");
    var vet = "";
    for (i = 0; i < opt.length; i++) {
        if (opt[i].checked) {
            vet = vet + opt[i].value + "-";
        }
    }
    if (vet) {
        window.location = '../br.com.educationlm.controller/Colocar_Alu_Turma.php?id=' + vet;
    }

}

function ValidaAluno() {
    optr = document.getElementsByName("optr");
    var vet = "";
    for (i = 0; i < optr.length; i++) {
        if (optr[i]) {
            vet = vet + optr[i].value + "-";
        }
    }
    if (vet) {
        window.location = '../br.com.educationlm.controller/Cadastrar_Aluno_TurmaCONT.php?id=' + vet;
    }
}

function DeletarAluno(id_turma, id_usuario) {
    alertify.confirm("Tem Certeza que deseja Deletar ?", function (choice) {
        if (choice == true) {
            window.location = '../br.com.educationlm.controller/Altera_TurmaAlunoCONT.php?idi=' + 3 + "&id_turma=" + id_turma + "&id_usuario=" + id_usuario;
        }
    });
}


function EditarAluno(id_turma, id_usuario) {
    alertify.confirm("Tem Certeza que deseja Ativar ?", function (choice) {
        if (choice == true) {
            window.location = '../br.com.educationlm.controller/Altera_TurmaAlunoCONT.php?idat=' + 4 + "&id_turma=" + id_turma + "&id_usuario=" + id_usuario;
        }
    });


}