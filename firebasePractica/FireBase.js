const firebaseConfig = {
  apiKey: "AIzaSyCoQtyAKENYfPNpfiznJUvwdJ0Si5LfjGY",
  authDomain: "coffe-bar-c2f9d.firebaseapp.com",
  databaseURL: "https://coffe-bar-c2f9d-default-rtdb.firebaseio.com",
  projectId: "coffe-bar-c2f9d",
  storageBucket: "coffe-bar-c2f9d.appspot.com",
  messagingSenderId: "212093368410",
  appId: "1:212093368410:web:e590e5dfa2c151f0bd4063"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // getDataForm.js
const db = firebase.firestore();

//Widgets
const formOrder = document.getElementById("contactForm")
const list =document.getElementById("list");
const p = document.createElement("p");
  

  formOrder.addEventListener("submit",(e)=>{

    e.preventDefault();    

    //Inputs Values
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var address = document.getElementById("address").value
    var coffe = document.getElementById("coffe").value
    var size = document.getElementById("size").value
    var milk = document.getElementById("milk").value
    var msgContent = document.getElementById("msgContent").value
  
    createOrder(name, email,address, coffe,size,milk, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();

  });
  

  const registros =(cb)=> db.collection("orders").onSnapshot(cb)

  window.addEventListener('DOMContentLoaded', async (e) => {
    getTasks((querySnapshot) => {
        //taskToDo.innerHTML = '';        



        querySnapshot.forEach(doc => {
            console.log(doc.data());
            const if_url = `<a href="${doc.data().url}">URL de tarea</a>` 
            taskToDo.innerHTML += `
                <div>
                    <h4>${doc.data().name}</h4>
                    <p>${doc.data().description}</p>
                    ${doc.data().url ? 
                        if_url
                        : ''
                    }
                </div>           `
        });
    });
});

  
  

  

  
  


  //Funtion to create order
  const createOrder = (name, email,address, coffe,size,milk, msgContent) => {
    db.collection('orders').doc().set({
      name, 
      email,
      address, 
      coffe,
      size,
      milk, 
      msgContent
    })
}

  
  // const getElementVal = (id) => {
  //   return document.getElementById(id).value;
  // };
  


  //Get elements

  