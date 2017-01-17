var funcion=document.getElementsByTagName("button")[0];
funcion.setAttribute("onclick","validateForm()");

var formulario=document.getElementsByClassName("form-signup");
var nombre=document.getElementById("name").value;
var apellido=document.getElementById("lastname").value;
var correo=document.getElementById("input-email").value;
var contrasenia=document.getElementById("input-password").value;
var array=nombre.split();

/* -------------------------- transformar en  mayuscula con jquery
$(document).ready(function(){
    var nombre=$("#name").val();
    $("#name").keyup(function(){
        $("#name").css("text-transform", "uppercase");
    });
});
---------------------------- transformar en  mayuscula con event
    var nombre = document.getElementById("name");
    nombre.setAttribute("onkeyup","porfi()");
    function porfi(){
        nombre.value = nombre.value.toUpperCase();
    }
*/

function validateForm(){
    
/* ----------------------------------------- campo obligatorio -- */
    if (nombre.length == 0 && apellido.length == 0 && correo.length == 0 && contrasenia.length == 0) {
		alert ("Falta llenar datos.");   
	} 
    else {
/* ---------------------------------------- validar solo texto -- */
/* -------------------------------- primera letra en mayuscula -- */
/* ---------------------------------------------------- nombre -- */
		if(nombre == null || nombre.length == 0 || nombre == "") {
			alert("Escriba su nombre, por favor.");
		}
        else if ( /^[a-z]/.test(nombre.charAt(0))) {
			alert ("Su nombre debe comenzar con una mayúscula.");
		} 
        else if ( /[0-9]/.test(nombre)) {
			alert("No se permiten números.");
        }
        
/* -------------------------------------------------- apellido -- */
        if(apellido == null || apellido.length == 0 || apellido == "") {
			alert("Escriba su nombre, por favor.");
		} 
        else if ( /[0-9]/.test(nombre)) {
			alert("No se permiten números.");
		}
        else if ( /^[a-z]/.test(nombre.charAt(0))) {
			alert ("Su nombre debe comenzar con una mayúscula.");
		}
    
/* ------------------------------------------ formato de email -- */
    
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if ( !expr.test(correo) ){
            alert("Error: La dirección de correo " + email + " es incorrecta.");
        }
/* ---------------------------------------- formato contraseña -- */
        if (contrasenia.length < 6){
			alert("La contraseña debe tener 6 caracteres como mínimo.");
		}
		else if (contrasenia == "123456" || contrasenia == "098754" || contrasenia == "password") {
			alert ("No se permiten '123456', '098754' y 'password' como contraseñas.");
		};
    }
}

