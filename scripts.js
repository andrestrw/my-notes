// Código para otros casos

//1 Prrubea solo con texto, para evr si picamos el valor ordenado

//Departamento financiero | Asignar Dep

//Prueba lo siguiente: force timestamp on index update 


var date2 = new Date();

function formatDateToString2(date2 ){
    // 01, 02, 03, ... 29, 30, 31
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();  

    // 01, 02, 03, ... 10, 11, 12
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);

    // 1970, 1971, ... 2015, 2016, ...
    var yyyy = date.getFullYear();
    
  
    // Crear el formato deseado
    return MM + '/' + dd + '/' + yyyy;
}  

var dateUltimate = formatDateToString2(date2 );

aprendido

// AJUSTAR VALOR EN LA ÚLTIMA POSICIÓN
  
var lastValueDateTop = dateTop[dateTop.length - 1]
tc.push(lastValueDateTop)  


var tipoDato

if (Array.isArray(lactcol4)) {
    tipoDato = "array";
    
    tc.push(tipoDato)
    
} else if (typeof lactcol4 === "object" && lactcol4 !== null) {
    tipoDato = "object";
    tc.push(tipoDato)
    
} else {
    // Si no es un array ni un objeto, obtenemos su tipo con typeof
    tipoDato = typeof lactcol4;
    tc.push(tipoDato)
}

// Conseguir minutos y segundos

var date = new Date();

function formatDateToString(date) {
    // Horas en formato 24 horas
    var hours24 = date.getHours();

    // Minutos
    var minutes = date.getMinutes();

    // Determinar AM o PM
    var ampm = hours24 >= 12 ? 'PM' : 'AM';

    // Convertir a formato de 12 horas
    var hours12 = hours24 % 12 || 12; // Si es 0, asignar 12

    // Añadir cero inicial a horas y minutos si es necesario
    var hoursStr = hours12 < 10 ? '0' + hours12 : '' + hours12;
    var minutesStr = minutes < 10 ? '0' + minutes : '' + minutes;

    // Crear el formato deseado
    return hoursStr + ':' + minutesStr + ' ' + ampm;
}

var minutesSeconds

minutesSeconds = formatDateToString(date)




