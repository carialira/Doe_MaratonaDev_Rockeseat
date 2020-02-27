//document.querySelector(.'logo).style.display = "none" /* querySelector pesquisar por seletores CSS*/
//objeto
document.querySelector('header button')//metodo
        .addEventListener("click", function(){ // adicionou um evento ao clicar no botão irá realizar seguinte função
            document.querySelector('.form')
            //.style.display = "none"  = sumir
            .classList.toggle('hide') //.classList adicionar classe -- toggle irá verificar se há classe 'hide' dentro de form, se n ele coloca
            
        })