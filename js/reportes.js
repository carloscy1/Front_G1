function traerReporteStatus(){
    $.ajax({
        url:"http://144.22.132.80:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaStatus(respuesta);
        }

    });
}

function traerReporteFechas(){
    $.ajax({
        url:"http://144.22.132.80:8080/api/Reservation/report-dates/{dateOne}/{dateTwo}",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaFechas (respuesta);
        }

    });
}
function traerReporteClientes(){
    $.ajax({
        url:"http://144.22.132.80:8080/api/Client/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaClientes (respuesta);
        }

    });
}
////////////////////////////////////////
function pintarRespuestaStatus(items){
    console.log(items);
    let myTable="<table>";
 
        myTable+="<tr>";
        myTable+="<td>"+items.completed+"</td>";
        myTable+="<td>"+items.cancelled+"</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);
}


function pintarRespuestaFechas(items){
    console.log(items);
    let myTable="<table>";
 
        myTable+="<tr>";
        myTable+="<td>"+items.completed+"</td>";
        myTable+="<td>"+items.cancelled+"</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);
}

function pintarRespuestaClientes(items){
    console.log(items);
    let myTable="<table>";
 
        myTable+="<tr>";
        myTable+="<td>"+items.completed+"</td>";
        myTable+="<td>"+items.cancelled+"</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);
}
