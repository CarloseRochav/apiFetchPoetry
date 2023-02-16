"use strict"

        //Elementos
        const formData = document.getElementById("formData");       
        //const titlePoetry=document.getElementById("inPoema");
        const inAutor = document.getElementById("inAutor");
        //Elementos mostrados
        const list = document.getElementById("list");
        var item = document.createElement("il");


        //Endpoints
        const urlPoema="https://poetrydb.org/title/Ozymandias/lines.json"
        const urlAutores="https://poetrydb.org/author"
        const urlAuthorTitles="https://poetrydb.org/author/" //Obras del artista
        const urlAuthorPoetry="https://poetrydb.org/title/Charmides/lines.json" //Titulo en especifico


        formData.addEventListener("submit",(e)=>{
          e.preventDefault();
          //console.log("Poema : "+titlePoetry.value)
          console.log("Autor : "+inAutor.value)

          //Fetch
          fetch(urlAuthorTitles+inAutor.value)//Concateno el autor capturado por el formulario
                        .then((resp) => resp.json())
                        .then(function (data) {   
                            //const obras = data[0].title //Regresa solo el titulo de la primera obra del arreglo de obras
                            data.forEach(item=>{
                              console.log(item.title);
                            })
                            console.log(obras)//Muestra solo las lineas del poema
                        })

                        .catch(function (error) {
                            console.log(error);
                        });

        })

        


        //Elementos con las obras

                