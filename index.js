import {
    pratosSegunda, pratosTerca, pratosQuarta,
    pratosQuinta, pratosSexta, pratosSabado, pratosDomingo
} from "./utils/database.js";

const menuAtual = pratosSegunda;

//retorna o html do card
const criaCard = (nomePrato, descricaoPrato, imgUrl) => {
    const card = document.createElement("div");
    card.style.width = "40%";
    card.style.height = "70%";
    card.style.padding = "1rem";
    card.style.backgroundColor = "var(--cor-terciaria)";
    card.style.borderRadius = "1rem";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.gap = ".5rem";

    const imagem = document.createElement("img");
    imagem.src = imgUrl;
    imagem.style.width = "100%";
    imagem.style.height = "100%";
    imagem.style.border = ".1rem solid var(--cor-primaria)"
    imagem.style.borderRadius = ".5rem";

    const figureTag = document.createElement("figure");
    figureTag.style.width = "60%";
    figureTag.style.height = "95%";

    const figCaption = document.createElement("figcaption");
    figCaption.style.width = "40%";
    figCaption.style.height = "90%";
    figCaption.style.textAlign = "center";

    const nome = document.createElement("h3");
    nome.textContent = nomePrato;
    nome.style.color = "var(--cor-quaternaria)";

    const descricao = document.createElement("p");
    descricao.textContent = descricaoPrato;

    figCaption.append(nome);
    figCaption.append(descricao);
    figureTag.append(imagem);
    card.append(figureTag);
    card.append(figCaption);
    return card
}

//seleciona e lista os pratos na tag section
const listaPratosNaSection = (listaPratos) => {
    const menuContainer = document.getElementById("menu");
    limpaPratosNaSection();
    listaPratos.forEach(prato => {
        const card = criaCard(prato.nome, prato.descricao, prato.img);
        menuContainer.append(card);
    });
}

const limpaPratosNaSection = () => {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = "";
}

// atualiza array menu atual
const atualizaMenuAtual = (novaLista) => {
    menuAtual.forEach(e => menuAtual.pop());
    novaLista.forEach(e => menuAtual.push(e));
    listaPratosNaSection(novaLista);
}

const selecionaListaPratos = (identificacao) => {
    switch (identificacao) {
        case "segunda":
            atualizaMenuAtual(pratosSegunda);
            break;
        case "terca":
            atualizaMenuAtual(pratosTerca);
            break;
        case "quarta":
            atualizaMenuAtual(pratosQuarta);
            break;
        case "quinta":
            atualizaMenuAtual(pratosQuinta);
            break;
        case "sexta":
            atualizaMenuAtual(pratosSexta);
            break;
        case "sabado":
            atualizaMenuAtual(pratosSabado);
            break;
        case "domingo":
            atualizaMenuAtual(pratosDomingo);
            break;
    }
}

const atualizaPratosEmExibicao = (evento) => {
    selecionaListaPratos(evento.target.id);
    evento.target.parentNode.parentNode.scrollTop = 0;
    evento.target.parentNode.parentNode.scrollLeft = 0;
}

const sectionMenu = document.getElementById("menu");
const ulDiasSemana = document.getElementById("lista__dias__semana");

ulDiasSemana.addEventListener("click", atualizaPratosEmExibicao);
sectionMenu.addEventListener("change", listaPratosNaSection(menuAtual));


