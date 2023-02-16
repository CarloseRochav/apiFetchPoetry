
const newUrl="https://poetrydb.org/title/Ozymandias/lines.json"


  fetch(newUrl)
.then((resp) => resp.json())
.then(function(data) {
  let poema = data.results;
    console.log(poema)    
  })

.catch(function(error) {
  console.log(error);
});