let RegistrosHTML = document.getElementById('RegistrosHTML');

let arrayRegistros = [];

//Comunicación con el servidor
async function leeRegistros() {

    const respuesta = await fetch("http://bdd-elga-01.signsle4u.xyz/index.php");
    const registros = await respuesta.json();

    return registros;
}

async function muestraRegistros() {
    try {
        arrayRegistros = await leeRegistros();
    }
    catch (e) {
        console.log("Error generado" + e);
    }

    console.log(arrayRegistros);
    RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + "Dirección IP -> " + arrayRegistros.ip + " " + "<br>" + "Pais -> " + arrayRegistros.pais + "<br>";
   
}

muestraRegistros();


