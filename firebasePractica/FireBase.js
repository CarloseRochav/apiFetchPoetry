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
    registros((querySnapshot) => {
        

        querySnapshot.forEach(doc => {
            console.log(doc.data());           
            

            const table1 =document.getElementById("Table1");

            var row = table1.insertRow(-1);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);

            //Agregamos la informacion a cada colummna
            cell1.innerHTML=doc.data().name
            cell2.innerHTML=doc.data().address
            cell3.innerHTML=doc.data().email
            cell4.innerHTML=doc.data().coffe
            cell5.innerHTML=doc.data().size
            cell6.innerHTML=doc.data().milk
            //cell7.innerHTML=`<button type="button" onClick="deleteR(${doc.data().})">Eliminar</button>`;
            cell7.innerHTML=doc.data().doc
        });
    });
});


function deleteR(id){
  db.ref('orders/' + id).set(null).then(() => {
    read();
  }).then(()=>{
     swal("Listo!", "Eliminado correctamente", "success");
  });
}


  
  

  

  
  


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

  