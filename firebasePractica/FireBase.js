const firebaseConfig = {
    apiKey: "AIzaSyBB0LTgqZWl-XLEd1xtqoo_PC5Rdn8IhnM",
    authDomain: "jsfirebase-259e0.firebaseapp.com",
    databaseURL: "https://jsfirebase-259e0-default-rtdb.firebaseio.com",
    projectId: "jsfirebase-259e0",
    storageBucket: "jsfirebase-259e0.appspot.com",
    messagingSenderId: "191181941604",
    appId: "1:191181941604:web:8f36c7fe9b72cf01166871",
    measurementId: "G-2REJ3VLDT4"
  };
  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("Email");
    var address = getElementVal("address")
    var coffe = getElementVal("coffe");
    var size = getElementVal("size")
    var milk = getElementVal("milk")    
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, email,address, coffe,size,milk, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email, coffe, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      coffe:coffe,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  

  //Get elements

  