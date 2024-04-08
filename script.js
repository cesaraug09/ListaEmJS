const caixadeTexto = document.querySelector("input");
const botaoAdicionar = document.querySelector("button");
const listadeTarefas = document.querySelector("#lista");
var botaoConcluir;
var array = [];

botaoAdicionar.addEventListener("click", () => {
    const strDigitado = caixadeTexto.value.trim();
    
    if (strDigitado !== ""){
        const novaTarefa = document.createElement("li");
        const spanTarefa = document.createElement("span");
        spanTarefa.textContent = strDigitado;

        // CheckBox para marcar atividade como concluída 
        const checkboxMarcada = document.createElement("input");
        checkboxMarcada.type = "checkbox";
        checkboxMarcada.addEventListener("change", () => {

            // Condição para consertar o bug de aparecer vários concluídos
            if (checkboxMarcada.checked) {
                if (botaoConcluir) {
                    botaoConcluir.remove();
                }

        // Botao para marcar como concluido
        botaoConcluir = document.createElement("button");
        botaoConcluir.textContent = "Concluído";
        botaoConcluir.addEventListener("click", () => {
            // Armazena tarefas concluidas na array
            array.push(spanTarefa.textContent);
            console.log(array);
            spanTarefa.style.color = "rgb(89, 247, 89)";
                if (botaoConcluir) {
                    botaoConcluir.remove();
                }
            });
        spanTarefa.style.textDecoration = "line-through";
        novaTarefa.appendChild(botaoConcluir);
        } else {
            spanTarefa.style.textDecoration = "none";
            if (botaoConcluir) {
                botaoConcluir.remove();
            }
        }
    });

// Para editar tarefas com duplo click
spanTarefa.addEventListener("dblclick", () => {
    const novoTexto = prompt("Editar tarefa:", spanTarefa.textContent);
        if (novoTexto !== null) {
            spanTarefa.textContent = novoTexto;
        }
    });

// Botao para remover atividade
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", () => {
        novaTarefa.remove();
    });

    novaTarefa.appendChild(checkboxMarcada);
    novaTarefa.appendChild(spanTarefa);
    novaTarefa.appendChild(botaoRemover);

    caixadeTexto.value = '';
    listadeTarefas.appendChild(novaTarefa);
    }
});
