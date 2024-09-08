function pesquisar() {
    let section = document.getElementById('resultados-pesquisa')

    let campoPesquisa = document.getElementById('campo-pesquisa').value

    if (!campoPesquisa) {
        section.innerHTML = '<p>Nada foi encontrado. Você precisa digitar uma palavra de busca.</p>'
        return
    }
    //se o código chegar no return ele não realiza os comandos das linhas seguintes

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        //agora não é preciso mais usar dados.titulo.includes pois "titulo" já foi declarado como dado.titulo e o mesmo para "descricao"

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Assista aqui</a>
        </div>`;
        }


    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    section.innerHTML = resultados
}


