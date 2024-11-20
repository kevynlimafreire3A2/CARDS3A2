document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");

    cartoes.forEach(cartao => {
        const article = document.createElement("article");
        article.classList.add("cartao");

        article.innerHTML = `
            <div class="cartao__conteudo">
                <h3>${cartao.categoria}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${cartao.pergunta}</p>
                </div>
                <div class="cartao__conteudo__resposta">
                    <p>${cartao.resposta}</p>
                </div>
            </div>
        `;

        container.appendChild(article);
    });
});
