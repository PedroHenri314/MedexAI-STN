function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  if(campoPesquisa == ""){
    section.innerHTML = "<p>Ops... Parece que nada foi buscado</p>"
    return 
  }
  campoPesquisa = campoPesquisa.toLowerCase()
  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo ="";
  let descricao ="";
  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
            //Se titulo includes campoPesquisa, faça tal coisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                   <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
`;
}
      
  }
  if(!resultados){
    resultados ="<p>Ops... Parece que esse resultado não existe</p>"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}