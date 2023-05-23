function show(){
  document.getElementById("side-menu").classList.toggle("show");
}

function changeBgImage1(){
  document.getElementById('change1').style.backgroundImage="url('../images/face.jpg')";
  document.getElementById('change1').style.backgroundSize="cover";
  document.getElementById('change1').style.backgroundRepeat="no-repeat";
  document.getElementById('change1').style.transform='scale(1.1)';
  document.getElementById('change1').style.transition='0.5s';
}

function resetBgImage1(){
  document.getElementById('change1').style.backgroundImage='';
  document.getElementById('change1').style.transform='';
}

function changeBgImage2(){
  document.getElementById('change2').style.backgroundImage="url('../images/body.jpg')";
  document.getElementById('change2').style.backgroundSize="cover";
  document.getElementById('change2').style.backgroundRepeat="no-repeat";
  document.getElementById('change2').style.transform='scale(1.1)';
  document.getElementById('change2').style.transition='0.5s';
}

function resetBgImage2(){
  document.getElementById('change2').style.backgroundImage='';
  document.getElementById('change2').style.transform='';
}

function changeBgImage3(){
  document.getElementById('change3').style.backgroundImage="url('../images/hands&feet.jpg')";
  document.getElementById('change3').style.backgroundSize="cover";
  document.getElementById('change3').style.backgroundRepeat="no-repeat";
  document.getElementById('change3').style.transform='scale(1.1)';
  document.getElementById('change3').style.transition='0.5s';
}

function resetBgImage3(){
  document.getElementById('change3').style.backgroundImage='';
  document.getElementById('change3').style.transform='';
}

function changeBgImage4(){
  document.getElementById('change4').style.backgroundImage="url('../images/makeup.jpg')";
  document.getElementById('change4').style.backgroundSize="cover";
  document.getElementById('change4').style.backgroundRepeat="no-repeat";
  document.getElementById('change4').style.transform='scale(1.1)';
  document.getElementById('change4').style.transition='0.5s';
}

function resetBgImage4(){
  document.getElementById('change4').style.backgroundImage='';
  document.getElementById('change4').style.transform='';
}

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message=document.getElementById('textarea').value

  if (name === "") {
    alert("Numele este obligatoriu!");
    return false;
  }

  var nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
  alert("Numele nu poate conține cifre sau simboluri speciale!");
  return false;
  }


  if (email === "") {
    alert("Emailul este obligatoriu!");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Emailul introdus nu este valid!");
    return false;
  }

  if (message === "") {
    alert("Campul mesaj este obligatoriu!");
    return false;
  }
  
  alert('Formularul a fost validat cu succes! Doriți să trimiteți datele?');
  return true;
}