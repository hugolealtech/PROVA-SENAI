class Cartao {
    constructor(srcImg, titulo, subtitulo, descricao, srcImg2, nomePost) {
        this.srcImg = srcImg;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.descricao = descricao;
        this.srcImg2 = srcImg2;
        this.nomePost = nomePost;
    }
}

var todosCartoes = [];

todosCartoes.push(new Cartao(
    "/img/original/fotos/boxed-water-is-better-LxaorEDmI3c-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/alice.jpg", 
    "Alice"
));

todosCartoes.push(new Cartao(
    "/img/original/fotos/ben-guerin-NWrye3NRrKw-unsplash.jpg",
    "CACHOEIRA DO TÉRMINO DE RELACIONAMENTO", 
    "Dizem que banhar-se aqui, te traz o amor!", 
    "Exuberante, tanto pela cultura, quanto pela beleza ímpar. É um privilégio da natureza este lugar!",
    "/img/original/time/elizabeth.jpg", 
    "Elisabeth"
));

todosCartoes.push(new Cartao(
    "/img/original/fotos/blake-verdoorn-cssvEZacHvQ-unsplash.jpg",
    "CACHOEIRA DA RENOVAÇÃO", 
    "Banhar-me aqui garantiu longevidade para minha vida amorosa!", 
    "Exuberante, seja para visitar, seja para meditar ou banhar-se. Essas águas brotam do trono do próprio Deus!",
    "/img/original/time/sergio.jpg", 
    "Sérgio"
));


todosCartoes.forEach((cadaCartao) => {
    document.querySelector("#tituloSite3").innerHTML += `

        <div id="tituloSite3">
            <div id="cardsNamePlace">
                <img class="img-thumbnail" class="w-50" class="card-img" src="${cadaCartao.srcImg}" alt="">
                <div class="cardDescription">
                    <h3>${cadaCartao.titulo}</h3>
                    <h4>${cadaCartao.subtitulo}</h4> 
                    <h5>${cadaCartao.descricao}</h5>
                    <div id="imageDescription">
                        <img src="${cadaCartao.srcImg2}" alt="">
                        <p>Post por ${cadaCartao.nomePost}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
});
