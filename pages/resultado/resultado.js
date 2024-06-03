import { verificarTema,trocarTema } from "../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente = document.querySelector("main button")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

botaoJogarNovamente.addEventListener("click", jogarNovamente)

verificarTema(body, botaoTema)

function alterarAssunto(){
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `icone de ${assunto}`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()

function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontuacao");
    const divAssunto = document.querySelector(".assunto");
    const pontos = localStorage.getItem("pontos");

    let textoNotaPorEscrito; 

    if (pontos > 8) {
        textoNotaPorEscrito = "Parabens, você foi bem!";
    } else if (pontos < 8 && pontos > 6) {
        textoNotaPorEscrito = "Bom, você foi na média.";
    } else if (pontos < 6 && pontos > 4) {
        textoNotaPorEscrito = "Precisa se esforçar mais.";
    } else {
        textoNotaPorEscrito = "Você foi mal.";
    }

    sectionPontuacao.innerHTML = `
        ${divAssunto.outerHTML}

        <strong>${pontos}</strong>

        <p>${textoNotaPorEscrito} de 10 acertou ${pontos}</p>
    `;
}



function jogarNovamente(){
    localStorage.removeItem("pontos")
    localStorage.removeItem("assuntos")

    window.location.href = "../../index.html"
}

inserirResultado()