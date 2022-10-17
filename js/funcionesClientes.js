//GET, POST , PUT Y DELETE

function getClientes(){
    $.ajax({
        url:"http://144.22.132.80:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            //console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function postClientes(){
    if ($("#name").val().length==0 || $("#email").val().length==0 || $("#password").val().length==0 || $("#age").val().length==0){
        alert("Todos los campos son obligatorios para actualizar los datos");
    }else{

    let cajas = {
        name:$("#name").val(),
        email:$("#email").val(),
        password:$("#password").val(),        
        age:$("#age").val()
    };
    
    $.ajax({
        url:"http://144.22.132.80:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("Se creo correctamente el cliente");
            window.location.reload();
        }
    });

}
}

function putClientes(idBotonActualizar){
    if ($("#name").val().length==0 || $("#email").val().length==0 || $("#password").val().length==0 || $("#age").val().length==0){
        alert("Todos los campos son obligatorios para actualizar los datos");
    }else{

    let cajas = {
        idClient:idBotonActualizar,
        name:$("#name").val(),
        email:$("#email").val(),
        password:$("#password").val(),        
        age:$("#age").val()
    };
    $.ajax({
        url:"http://144.22.132.80:8080/api/Client/update",
        type:"PUT",
        datatype:"JSON",
        contentType: "application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("Se actualizo correctamente el cliente");
            window.location.reload();
        }
    });
}
}

function deleteClientes(idBoton){
    let myData={
        id:idBoton
    };
    $.ajax({
        url:"http://144.22.132.80:8080/api/Client/"+idBoton,
        type:"DELETE",
        datatype:"JSON",
        data:JSON.stringify(myData),
        contentType: "application/json",
        success:function(respuesta){
            alert("Se ha borrado correctamente el cliente")
            window.location.reload();
        }

    });
    
}


////////////////////////////////////////
function pintarRespuesta(items){
    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap">';
  
    myTable+="<tr>";
    myTable+="<td>Nombre</td>";
    myTable+="<td>Email</td>";
    myTable+="<td>Contraseña</td>";
    myTable+="<td>Edad</td>";
"</tr>";

    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].password+"</td>";       
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='putClientes("+items[i].idClient+")'class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'> Actualizar </button> " ;
        myTable+="<td> <button onclick='deleteClientes("+items[i].idClient+")'class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'> Borrar </button> " ;
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}