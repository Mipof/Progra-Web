 function validar_login(){
   var usuario, password, expresion,busqueda;
   usuario= document.getElementById("usuario");
   password=document.getElementById('password');
   var div=usuario.nextElementSibling;
   var div2=password.nextElementSibling;
   expresion=/\w+@\w+\.+[a-z]/;

   if(usuario.value===""){
     //alert("El campo de usuario esta vacio");
     usuario.setAttribute('class','error');
     div.innerText='Debe rellenar el campo usuario';
     return false;
   }
   if(password.value===""){
        password.setAttribute('class','error');
      div.innerText='Debe rellenar el campo password';
        return false;
   }
   else{
     div.innerText="";
     usuario.setAttribute('class','');
     password.setAttribute('class','');
   }


 }
 function validar_contacto(){
   var contacto;
   contacto=document.getElementById("contacto").value;
   if(contacto===""){
     alert("Debe rellenar el cuadro de contacto");
     return false;
   }
 }
 function validar_registro(){
   var nombre,apellidos,correo,empresa,telefono,direccion,usuario,contraseña,numeros,exp_correo;
    nombre=document.getElementById("nombre");
    apellidos=document.getElementById("apellidos");
    correo=document.getElementById("correo");
    empresa=document.getElementById("empresa");
    telefono=document.getElementById("telefono");
    direccion=document.getElementById("direccion");
    usuario=document.getElementById("usuario");
    contraseña=document.getElementById("contraseña");
    numeros=/[0-9]/;
    exp_correo=/\w+@\w+\.+[a-z]/;
    var div=nombre.nextElementSibling;
    var div2=apellidos.nextElementSibling;
    var div3=correo.nextElementSibling;
    var div4=empresa.nextElementSibling;
    var div5=telefono.nextElementSibling;
    var div6=direccion.nextElementSibling;
    var div7=usuario.nextElementSibling;
    var div8=contraseña.nextElementSibling;
    if(nombre.value===""){
      nombre.setAttribute('class','error');
      div.innerText='Debe rellenar el campo nombre';
    }else{
      nombre.setAttribute('class','');
      div.innerText="";
    }
    if(apellidos.value===""){
      apellidos.setAttribute('class','error');
      div2.innerText='Debe rellenar el campo apellidos';
    }else{
      apellidos.setAttribute('class','');
      div2.innerText="";
    }
    if(correo.value===""){
      correo.setAttribute('class','error');
      div3.innerText='Debe rellenar el campo correo';
    }else{
      correo.setAttribute('class','');
      div3.innerText="";
    }
    if(empresa.value===""){
      empresa.setAttribute('class','error');
      div4.innerText='Debe rellenar el campo empresa';
    }else{
      empresa.setAttribute('class','');
      div4.innerText="";
    }
    if(telefono.value===""){
      telefono.setAttribute('class','error');
      div5.innerText='Debe rellenar el campo telefono';
    }else{
      telefono.setAttribute('class','');
      div5.innerText="";
    }
    if(direccion.value===""){
      direccion.setAttribute('class','error');
      div6.innerText='Debe rellenar el campo direccion';
    }else{
      direccion.setAttribute('class','');
      div6.innerText="";
    }
    if(usuario.value===""){
      usuario.setAttribute('class','error');
      div7.innerText='Debe rellenar el campo usuario';
    }else{
      usuario.setAttribute('class','');
      div7.innerText="";
    }
    if(contraseña.value===""){
      contraseña.setAttribute('class','error');
      div8.innerText='Debe poner la contraseña deseada';
    }else{
      contraseña.setAttribute('class','');
      div8.innerText="";
    }
    if(!numeros.test(telefono.value)){
      telefono.setAttribute('class','error');
      div5.innerText='Escriba un numero de telefono valido';
    }else{
      telefono.setAttribute('class','');
      div5.innerText="";
    }
    if(!exp_correo.test(correo.value)){
      correo.setAttribute('class','error');
      div3.innerText='Escriba un correo con un formato valido';
    }else{
    correo.setAttribute('class','');
      div3.innerText="";
    }

 }



 function validar_alta(){
   var nombre, precio,expresionprecio;
   expresionprecio=/[0-9]+\.+[0-9]/;
   expresionprecio1=/[0-9]+[0-9]/;
   nombre=document.getElementById("nombre");
   precio=document.getElementById("precio");
   var div=nombre.nextElementSibling;
   if(nombre.value===""){
     //alert("El campo de usuario esta vacio");
     nombre.setAttribute('class','error');
     div.innerText='Debe rellenar el campo nombre';
     return false;
   }
   if(precio.value===""){
      precio.setAttribute('class','error');
      div.innerText='Debe rellenar el campo precio';
        return false;
   }
   if(!expresionprecio.test(precio.value)&&!expresionprecio1.test(precio.value)){
     precio.setAttribute('class','error');
     div.innerText='Ingrese un precio valido';
     return false;
   }
   else{
     div.innerText="";
     nombre.setAttribute('class','');
     precio.setAttribute('class','');

   }
 }

 function validar_cambios(){
  var nombre,apellidos,correo,empresa,telefono,direccion,contraseña,numeros,exp_correo;
    nombre=document.getElementById("nombres");
    apellidos=document.getElementById("apellidos");
    correo=document.getElementById("correo");
    empresa=document.getElementById("nombre_empresa");
    telefono=document.getElementById("telefono");
    direccion=document.getElementById("direccion");
    contraseña=document.getElementById("contraseña");
    numeros=/[0-9]/;
    exp_correo=/\w+@\w+\.+[a-z]/;
    var div=nombre.nextElementSibling;
    var div2=apellidos.nextElementSibling;
    var div3=correo.nextElementSibling;
    var div4=empresa.nextElementSibling;
    var div5=telefono.nextElementSibling;
    var div6=direccion.nextElementSibling;
    var div7=contraseña.nextElementSibling;
    if(nombre.value===""){
      nombre.setAttribute('class','error');
      div.innerText='Debe rellenar el campo nombre';
    }else{
      nombre.setAttribute('class','');
      div.innerText="";
    }
    if(apellidos.value===""){
      apellidos.setAttribute('class','error');
      div2.innerText='Debe rellenar el campo apellidos';
    }else{
      apellidos.setAttribute('class','');
      div2.innerText="";
    }
    if(correo.value===""){
      correo.setAttribute('class','error');
      div3.innerText='Debe rellenar el campo correo';
    }else{
      correo.setAttribute('class','');
      div3.innerText="";
    }
    if(empresa.value===""){
      empresa.setAttribute('class','error');
      div4.innerText='Debe rellenar el campo empresa';
    }else{
      empresa.setAttribute('class','');
      div4.innerText="";
    }
    if(telefono.value===""){
      telefono.setAttribute('class','error');
      div5.innerText='Debe rellenar el campo telefono';
    }else{
      telefono.setAttribute('class','');
      div5.innerText="";
    }
    if(direccion.value===""){
      direccion.setAttribute('class','error');
      div6.innerText='Debe rellenar el campo direccion';
    }else{
      direccion.setAttribute('class','');
      div6.innerText="";
    }
    if(contraseña.value===""){
      contraseña.setAttribute('class','error');
      div7.innerText='Debe poner la contraseña deseada';
    }else{
      contraseña.setAttribute('class','');
      div7.innerText="";
    }
    if(!numeros.test(telefono.value)){
      telefono.setAttribute('class','error');
      div5.innerText='Escriba un numero de telefono valido';
    }else{
      telefono.setAttribute('class','');
      div5.innerText="";
    }
    if(!exp_correo.test(correo.value)){
      correo.setAttribute('class','error');
      div3.innerText='Escriba un correo con un formato valido';
    }else{
    correo.setAttribute('class','');
      div3.innerText="";
    }

 }

