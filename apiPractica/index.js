"use strict"

        //Elementos
        const formData = document.getElementById("formData");       
        //const titlePoetry=document.getElementById("inPoema");
        const inAutor = document.getElementById("inAutor");
        //Elementos mostrados
        const list = document.getElementById("list");
        //var itemLi = document.createElement("li");
        const listAuthors = document.getElementById("listAuthor")


        //Endpoints
        const urlPoema="https://poetrydb.org/title/Ozymandias/lines.json"
        const urlAutores="https://poetrydb.org/author"
        const urlAuthorTitles="https://poetrydb.org/author/" //Obras del artista
        const urlAuthorPoetry="https://poetrydb.org/title/Charmides/lines.json" //Titulo en especifico

        //Formulario que captura el evento Buscar
        formData.addEventListener("submit",(e)=>{
          e.preventDefault();
          //console.log("Poema : "+titlePoetry.value)
          console.log("Autor : "+inAutor.value)

          list.innerHTML="";//Limpiar elementos de la lista

          //Fetch 
          fetch(urlAuthorTitles+inAutor.value)//Concateno el autor capturado por el formulario
                        .then((resp) => resp.json())
                        .then(function (data) {                               
                            //const obras = data[0].title //Regresa solo el titulo de la primera obra del arreglo de obras
                            data.forEach(item=>{
                              var li = document.createElement("li");
                              li.appendChild(document.createTextNode(item.title))
                              list.appendChild(li)
                              console.log(item.title);
                            })                            
                        })

                        .catch(function (error) {
                            if(error){
                              console.log("Ingresa un nombre correcto")
                              alert("Ingresa un nombre correcto")
                            }
                            console.log("Error : "+error);
                        });
        })

        //Mostrar todos los autores disponibles
        fetch(urlAutores)//Concateno el autor capturado por el formulario
                        .then((resp) => resp.json())
                        .then(function (data) {   
                            const autores = data.authors //Regresa solo el titulo de la primera obra del arreglo de obras
                            autores.forEach(item=>{
                              var li = document.createElement("li");
                              li.appendChild(document.createTextNode(item))
                              listAuthors.appendChild(li)
                              //Recorriendo Autores
                              console.log(item);
                            })
                            
                            //Autores Array 
                            console.log(autores)
                            
                        })

                        .catch(function (error) {
                            console.log(error);
                        });

        


        


        //Elementos con las obras

                