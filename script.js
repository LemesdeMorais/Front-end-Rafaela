function toggleMode(){
    const html = document.documentElement

    //if(html.classList.contains('light')){
     //  html.classList.remove('light')
    //}else{
    //    html.classList.add('light')
    //}
    html.classList.toggle('light') 
    //a funcao acima substitui todo o cod criado manualmente
    //ou seja, é uma funcao ja existente na biblioteca js

    //vamos mudar a img junto com mode
    // pegar a tag img, substituis a imagem
    //se tiver light mode, adicionar a imagem que ira substituir
    // se não, manter a imagem atual
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', './img/avatar 2.png')
    }else{
        img.setAttribute('src', './img/Rafaela.png')
    }  


}



