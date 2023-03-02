function toggleMode(){
    let html = document.documentElement
    if(html.classList.contains("light")){
        html.classList.remove("light")
    }else{
        html.classList.add("light")
    }
    




    //Pegar a tag img
    let img = document.querySelector(".profile img")

        //Substituir a imagem
        if(html.classList.contains("light")){
            
            //Se tiver o light mode, adicionar a imagem light
        img.setAttribute("src", "../assets/Avatar-light.png")
    }else{

        //Se tiver sem o light mode, manter a imagem normal
        img.setAttribute("src", "../assets/avatar.png")
    }
}
   
