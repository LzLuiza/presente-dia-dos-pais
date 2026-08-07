// ============================================
// ESTADO
// ============================================

let pontuacao = 0;


// ============================================
// TELAS
// ============================================

const telas = {

    inicio: document.getElementById("inicio"),

    investigacao: document.getElementById("investigacao"),

    gostos: document.getElementById("gostos"),

    personalidade: document.getElementById("personalidade"),

    memorias: document.getElementById("memorias"),

    pausa: document.getElementById("pausa"),

    declaracao: document.getElementById("declaracao"),

    resultado: document.getElementById("resultado"),

    certificado: document.getElementById("certificado")

};


// ============================================
// TROCA DE TELA
// ============================================

function mostrarTela(nome) {

    for (let tela in telas) {

        telas[tela].style.display = "none";

    }

    telas[nome].style.display = "block";

}


// ============================================
// INÍCIO
// ============================================

document
    .getElementById("btn-iniciar")
    .addEventListener("click", function () {

        mostrarTela("investigacao");

    });


// ============================================
// INVESTIGAÇÃO
// ============================================

document
    .getElementById("btn-investigacao")
    .addEventListener("click", function () {

        mostrarTela("gostos");

    });


// ============================================
// GOSTOS MUSICAIS
// ============================================

const opcoesGosto =
    document.querySelectorAll(".opcao-gosto");


opcoesGosto.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const texto =
            document.getElementById("resultado-gosto");


        if (botao.textContent === "Respeitar") {

            pontuacao += 3;

            texto.textContent =
                "Resposta correta. +3 pontos.";

        }

        else if (
            botao.textContent === "Perguntar o que ela gosta"
        ) {

            pontuacao += 2;

            texto.textContent =
                "Resposta aceitável. +2 pontos.";

        }

        else {

            pontuacao -= 2;

            texto.textContent =
                "Resposta inadequada. -2 pontos.";

        }

    });

});


// ============================================
// PERSONALIDADE
// ============================================

document
    .getElementById("btn-personalidade")
    .addEventListener("click", function () {

        mostrarTela("memorias");

    });


// ============================================
// MEMÓRIAS
// ============================================

document
    .getElementById("btn-memorias")
    .addEventListener("click", function () {

        pontuacao += 2;

        mostrarTela("pausa");

    });


// ============================================
// PAUSA
// ============================================

document
    .getElementById("btn-pausa")
    .addEventListener("click", function () {

        mostrarTela("declaracao");

    });


// ============================================
// DECLARAÇÃO
// ============================================

document
    .getElementById("btn-declaracao")
    .addEventListener("click", function () {

        mostrarTela("resultado");

        document
            .getElementById("pontuacao")
            .textContent =
            `Pontuação: ${pontuacao}`;

        document
            .getElementById("classificacao")
            .textContent =
            "Classificação: APROVADO COM RESSALVAS";

    });


// ============================================
// CERTIFICADO
// ============================================

document
    .getElementById("btn-certificado")
    .addEventListener("click", function () {

        mostrarTela("certificado");

        document
            .getElementById("resultado-final")
            .textContent =
            `Pontuação final: ${pontuacao} pontos.`;

    });


// ============================================
// INICIAR
// ============================================

mostrarTela("inicio");
