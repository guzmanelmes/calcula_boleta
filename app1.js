function myFunction() {
    var x, y, suma, text;
    valor_pactado = document.getElementById("valor_pactado").value;

    valor_boleta_liquido = valor_pactado;
    valor_boleta_bruto = valor

    valor_retencion_liquido
    valor_retencion_bruto

    valor_efectivo_liquido
    valor_efectivo_bruto

    if (isNaN(x) || isNaN(y)) {
        text = "Es necesarios introducir dos números válidos";
    } else {
        //si no ponemos parseFloat concatenaría x con y  
        suma = parseFloat(x) + parseFloat(y);
        text = suma;

    }
    document.getElementById("valor_boleta_liquido").innerHTML = valor_boleta_liquido;
    document.getElementById("valor_boleta_bruto").innerHTML = valor_boleta_bruto;
    document.getElementById("valor_retencion_liquido").innerHTML = valor_retencion_liquido;
    document.getElementById("valor_rentencion_bruto").innerHTML = valor_efectivo_bruto;
    document.getElementById("valor_efectivo_liquido").innerHTML = valor_efectivo_liquido;
    document.getElementById("valor_efectivo_bruto").innerHTML = valor_efectivo_bruto;
}