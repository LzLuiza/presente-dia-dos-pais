// ========================================
// PERGUNTAS
// ========================================

const perguntas = [

    {
        pergunta:
            "Quando sua filha diz que está estudando, qual deve ser sua primeira reação?",

        opcoes: [
            "A) Confiar nela",
            "B) Perguntar como está indo",
            "C) Duvidar imediatamente",
            "D) Solicitar provas documentais"
        ],

        correta: 0
    },


    {
        pergunta:
            "O que fazer quando sua filha gosta de anime ou The Flash?",

        opcoes: [
            "A) Respeitar o hobby",
            "B) Assistir junto",
            "C) Chamar de infantil",
            "D) Questionar a validade do hobby"
        ],

        correta: 0
    },


    {
        pergunta:
            "Quando sua filha gosta de uma música que você não gosta:",

        opcoes: [
            "A) Respeitar",
            "B) Perguntar por que ela gosta",
            "C) Julgar a playlist",
            "D) Declarar que a música é ruim"
        ],

        correta: 0
    },


    {
        pergunta:
            "Quando sua filha discorda de você e apresenta argumentos:",

        opcoes: [
            "A) Ela está tentando brigar",
            "B) Ela está sendo desrespeitosa",
            "C) Ela tem uma opinião diferente",
            "D) Ela precisa concordar"
        ],

        correta: 2
    },


    {
        pergunta:
            "Quando o pai age como uma 'bomba-relógio':",

        opcoes: [
            "A) Nada acontece",
            "B) A filha continua normalmente",
            "C) A filha pensa duas vezes antes de se aproximar",
            "D) O Ministério da Saúde é acionado"
        ],

        correta: 2
    },


    {
        pergunta:
            "Sua filha achar uma mulher bonita significa que ela está copiando você?",

        opcoes: [
            "A) Sim",
            "B) Não — sua filha tem olhos",
            "C) Não faz sentido nenhum",
            "D) Pai, pelo amor de Deus"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual atitude merece reconhecimento?",

        opcoes: [
            "A) Ignorar o que a filha gosta",
            "B) Fazer uma surpresa",
            "C) Esquecer pequenas memórias",
            "D) Comprar goiabada depois de vê-la olhando"
        ],

        correta: 3
    }

];


// ========================================
// ESTADO
// ========================================

let perguntaAtual = 0;

let acertos = 0;


// ========================================
// TELAS
// ========================================

const inicio =
    document.getElementById("inicio");

const perguntasTela =
    document.getElementById("perguntas");

const acdc =
    document.getElementById("acdc");

const certificado =
    document.getElementById("certificado");


// ========================================
// ELEMENTOS
// ========================================

const botaoIniciar =
    document.getElementById("iniciar");

const numeroPergunta =
    document.getElementById("numero-pergunta");

const textoPergunta =
    document.getElementById("pergunta");

const opcoes =
    document.getElementById("opcoes");

const feedback =
    document.getElementById("feedback");

const botaoProxima =
    document.getElementById("proxima");

const botaoCertificado =
    document.getElementById("ir-certificado");


// ========================================
// TROCAR TELA
// ========================================

function mostrarTela(tela) {

    document
        .querySelectorAll(".tela")
        .forEach(function (elemento) {

            elemento.classList.remove("ativa");

        });


    tela.classList.add("ativa");

}


// ========================================
// INICIAR
// ========================================

botaoIniciar.addEventListener(
    "click",
    function () {

        perguntaAtual = 0;

        acertos = 0;

        mostrarPergunta();

        mostrarTela(perguntasTela);

    }
);


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function mostrarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    textoPergunta.textContent =
        pergunta.pergunta;


    opcoes.innerHTML = "";


    feedback.textContent = "";


    botaoProxima.classList.add("escondido");


    pergunta.opcoes.forEach(
        function (opcao, indice) {

            const botao =
                document.createElement("button");


            botao.textContent =
                opcao;


            botao.addEventListener(
                "click",
                function () {

                    verificarResposta(indice);

                }
            );


            opcoes.appendChild(botao);

        }
    );

}


// ========================================
// VERIFICAR RESPOSTA
// ========================================

function verificarResposta(indiceEscolhido) {

    const pergunta =
        perguntas[perguntaAtual];


    const botoes =
        opcoes.querySelectorAll("button");


    // Impede clicar várias vezes
    botoes.forEach(
        function (botao) {

            botao.disabled = true;

        }
    );


    if (indiceEscolhido === pergunta.correta) {

        feedback.textContent =
            "✓ RESPOSTA CORRETA.";

        acertos++;

    }

    else {

        feedback.textContent =
            "✗ RESPOSTA ERRADA.";

    }


    botaoProxima.classList.remove("escondido");

}


// ========================================
// PRÓXIMA PERGUNTA
// ========================================

botaoProxima.addEventListener(
    "click",
    function () {

        perguntaAtual++;


        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

        }

        else {

            mostrarTela(acdc);

        }

    }
);


// ========================================
// AC/DC → CERTIFICADO
// ========================================

botaoCertificado.addEventListener(
    "click",
    function () {

        mostrarTela(certificado);

    }
);
