$(document).ready(function(){    
    $('#boton-guardar').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("inpnom").value;
        var ema = document.getElementById("inpema").value;
        var num = document.getElementById("inpnum").value;
        var foodname = document.getElementById("inpfona").value;
        var address = document.getElementById("inpadr").value;
        let orden = {
            "Nombres": nom,
            "Correo": ema,
            "Númbero": num,
            "Platillo": foodname,
            "Dirección": address
        };
        
        /*Guardando los datos en el LocalStorage*/
        console.log(orden);
        localStorage.setItem('orden', JSON.stringify(orden));
        /* localStorage.setItem("Nombres", nom);
        localStorage.setItem("Correo", ema);
        localStorage.setItem("Numero", num);
        localStorage.setItem("Pedido", foodname);
        localStorage.setItem("Dirección", address); */
        /*Limpiando los campos o inputs*/
        document.getElementById("inpnom").value = "";
        document.getElementById("inpema").value = "";
        document.getElementById("inpnum").value = "";
        document.getElementById("inpfona").value = "";
        document.getElementById("inpadr").value = "";
    });   
});