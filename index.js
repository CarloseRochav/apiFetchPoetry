"use strict"

        //Elementos
        const formData = document.getElementById("formData");       
        const titlePoetry=document.getElementById("inPoema");


        formData.addEventListener("submit",(e)=>{
          e.preventDefault();
          console.log("Poema : "+titlePoetry.value)

        })

        //Endpoints
        const urlPoema="https://poetrydb.org/title/Ozymandias/lines.json"
        const urlAutores="https://poetrydb.org/author"
        const urlAuthorTitles="https://poetrydb.org/author/Wilde" //Obras del artista
        const urlAuthorPoetry="https://poetrydb.org/title/Charmides/lines.json" //Titulo en especifico

                fetch(urlAuthorPoetry)
                        .then((resp) => resp.json())
                        .then(function (data) {   
                            const poetry = data[0].lines                        
                            //console.log("Poema : "+titlePoetry.value)
                            console.log(poetry)//Muestra solo las lineas del poema
                        })

                        .catch(function (error) {
                            console.log(error);
                        });