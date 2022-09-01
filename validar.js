var user=document.getElementById("username").focus();
var user=document.getElementById("username");
var pass=document.getElementById("password");
var erro=document.getElementById("error");


function Validar(){

    let errores=[];
    if(user.value===null || user.value=== ''){
        errores.push("Ingrese usuario");

    }
    if(pass.value=== null ||pass.value===''){
        errores.push("Ingrese password");
    }

    erro.innerHTML= errores.join(',');
    return false;
}
