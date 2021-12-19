$(document).ready(function () {
    $('#boton-guardar').click(function () {
        var nom = document.getElementById("inpnom").value;
        var ema = document.getElementById("inpema").value;
        var num = document.getElementById("inpnum").value;
        var foodname = document.getElementById("inpfona").value;
        var address = document.getElementById("inpadr").value;

        if (nom.length == 0 || ema.length == 0 || num.length == 0 || foodname.length == 0 || address.length == 0) {
          alertify
          .alert("Pedido guardado en el LocalStorage.", function () {
              alertify.message('Ok');
          });
        } else {
            let orden = {
                "Nombres": nom,
                "Correo": ema,
                "Númbero": num,
                "Platillo": foodname,
                "Dirección": address
            };
            localStorage.setItem('orden', JSON.stringify(orden));
            alertify
                .alert("Pedido guardado en el LocalStorage.", function () {
                    alertify.message('Ok');
                });
            document.getElementById("inpnom").value = "";
            document.getElementById("inpema").value = "";
            document.getElementById("inpnum").value = "";
            document.getElementById("inpfona").value = "";
            document.getElementById("inpadr").value = "";
        }
    });
});