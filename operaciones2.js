document.getElementById("Validarformulario").addEventListener('submit',function(evt){

    evt.preventDefault();
    let name=document.getElementById("nombre").value;
    let n1= parseInt(document.getElementById("_n1").value);
    let n2=parseInt(document.getElementById("_n2").value);
    let suma=n1+n2;
    document.getElementById("resultado").value="el nombre es:"+name +"\n" + "Suma=" +suma + "\n";

},false);