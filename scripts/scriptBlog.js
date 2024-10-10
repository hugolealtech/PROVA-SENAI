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

const todosCartoes = [];

// Adiciona cards ao array
todosCartoes.push(new Cartao(
    "/img/original/fotos/ben-guerin-NWrye3NRrKw-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/alice.jpg", 
    "Alice"
));

todosCartoes.push(new Cartao(
    "/img/original/fotos/blake-verdoorn-cssvEZacHvQ-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/sergio.jpg", 
    "Sérgio"
));


todosCartoes.push(new Cartao(
    "/img/original/fotos/marten-bjork-wGu1pzDSm3g-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/sergio.jpg", 
    "Sérgio"
));
todosCartoes.push(new Cartao(
    "/img/original/fotos/ben-guerin-NWrye3NRrKw-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/alice.jpg", 
    "Alice"
));

todosCartoes.push(new Cartao(
    "/img/original/fotos/blake-verdoorn-cssvEZacHvQ-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/sergio.jpg", 
    "Sérgio"
));


todosCartoes.push(new Cartao(
    "/img/original/fotos/marten-bjork-wGu1pzDSm3g-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/sergio.jpg", 
    "Sérgio"
));
todosCartoes.push(new Cartao(
    "/img/original/fotos/ben-guerin-NWrye3NRrKw-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/alice.jpg", 
    "Alice"
));

todosCartoes.push(new Cartao(
    "/img/original/fotos/blake-verdoorn-cssvEZacHvQ-unsplash.jpg",
    "RIO DA FELICIDADE", 
    "Um lugar de paz e tranquilidade", 
    "Aqui, o criador sussura palavras de sabedoria por meio do som das águas",
    "/img/original/time/sergio.jpg", 
    "Sérgio"
));




// Função para renderizar os cards dinamicamente
function renderizarCartoes() {
    const container = document.querySelector(".nomeLugarCard");
    container.innerHTML = ''; // Limpa o conteúdo antes de renderizar os novos cards

    todosCartoes.forEach(cadaCartao => {
        container.innerHTML += `
            <div class="cartao">
                <img src="${cadaCartao.srcImg}" alt="Imagem do local" class="img-fluid">
                <div class="descricaoCards">
                    <h4>${cadaCartao.titulo}</h4>
                    <h5>${cadaCartao.subtitulo}</h5> 
                    <p>${cadaCartao.descricao}</p>
                    <div id="imageDescription">
                        <img src="${cadaCartao.srcImg2}" alt="Imagem do autor" class="autor-img">
                        <p>Post por ${cadaCartao.nomePost}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// Chama a função para renderizar os cards
renderizarCartoes();
