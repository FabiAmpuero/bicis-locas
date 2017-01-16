var funcion=document.getElementsByTagName("button")[0];
funcion.setAttribute("onclick","validateForm");

$('name').keydown(function(){
    alert("porfi");
});
$(document).ready(function(){
    $("input").keydown(function(){
        $("input").css("background-color", "yellow");
    });
    $("input").keyup(function(){
        $("input").css("background-color", "pink");
    });
});
function validateForm(){
    
    var formulario=document.getElementsByClassName("form-signup");
    var nombre, apellido, correo, contraseña, tipo, twitter, check, boton;
    nombre=document.getElementById("name").value;
    apellido=document.getElementById("lastname").value;
    correo=document.getElementById("input-email").value;
    contrasenia=document.getElementById("input-password").value;
    
    /*var nombreArray=nombre.split();
    var mayuscula=nombreArray.toUpperCase();*/
    
    /*campo obligatorio*/
    if (nombre.length == 0 || apellido.length == 0 || correo.length == 0 || contrasenia.length == 0) {
		alert ("Debe completar todos los campos obligatorios.");
        
	} 
    else {
		if(nombre == null || nombre.length == 0 || nombre == "") {
			alert("Escriba un nombre.");
		}
    }
}



/*function validateForm(){
    //NOMBRE
	if (nombre.length == 0 && apellido == 0 && correoElectronico == 0 && contrasenia == 0) {
		alert ("Debe completar todos los campos obligatorios.");
        
	} else {
       
		if(nombre == null || nombre.length == 0 || nombre == "") {
			alert("Escriba un nombre.");
		} else if ( /[0-9]/.test(nombre)) {
			alert("No ingrese números por favor.");
		} else if ( /^[a-z]/.test(nombre.charAt(0))) {
			alert ("Su Nombre debe comenzar con una mayúscula.");
		}
        
        //APELLIDO
		if(apellido == null || apellido.length == 0 || apellido == "") {
			alert("Escribe tu apellido.");
		} else if (/[0-9]/.test(apellido)) {
			alert("No ingrese números por favor.");
		} else if (/^[a-z]/.test(apellido.charAt(0))) {
			alert ("Su Apellido debe comenzar con una mayúscula.");
		}
     
        
        //CONTRASEÑA
		if (contra == null || contra.length == 0 || contra == "") {
			alert("Ingresa una contraseña.");
		} else if (contra.length < 6){
			alert("Contraseña no válida, debe tener como 6 caracteres como minimo.");
		}

		if (contra == "123456" || contra == "098754" || contra == "password") {
			alert ("'123456', '098754' y 'password' no son contraseñas válidas.");
		};
        
      
	};
}*/