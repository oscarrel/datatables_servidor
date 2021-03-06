   'use strict';
   $(document).ready(function() {
       var miTabla = $('#miTabla').DataTable({
           "processing": true,
           "serverSide": true,
           "ajax": "php/cargar_vclinicas_ej6.php",
           "columns": [
            { "data": "idClinica" },
            { "data": "nombre" },
            { "data": "razonSocial" },
            { "data": "cif" },
            { "data": "localidad" },
            { "data": "provincia" },
            { "data": "direccion" },
            { "data": "numClinica" },
            { "data": "idTarifa" },
            { "data": "nombreTarifa" }, 
            { "data": "idClinica",
              "width": "200px",
              "render": function(data, type, full, meta){
                return '<a class="edit btn btn-info" role="button" href="php/modificar_clinica.php?id_clinica=' + data +'">Editar</a>'+
                '<a class="del btn btn-warning" role="button" href="php/borrar_clinica.php?id_clinica=' + data +'">Borrar</a>';
              }

              
              //<a class="btn btn-warning" href="php/borrar_clinica.php" role="button">Borrar</a>


          }
            ],
           'language': {
               "sProcessing": "Procesando...",
               "sLengthMenu": "Mostrar _MENU_ registros",
               "sZeroRecords": "No se encontraron resultados",
               "sEmptyTable": "Ningún dato disponible en esta tabla",
               "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
               "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
               "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
               "sInfoPostFix": "",
               "sSearch": "Buscar:",
               "sUrl": "",
               "sInfoThousands": ",",
               "sLoadingRecords": "Cargando...",
               "oPaginate": {
                   "sFirst": "Primero",
                   "sLast": "Último",
                   "sNext": "Siguiente",
                   "sPrevious": "Anterior"
               },
               "oAria": {
                   "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                   "sSortDescending": ": Activar para ordenar la columna de manera descendente"
               }
           }
       });




      //var table = $('#miTabla').DataTable();
      $('#miTabla').on( 'click', '.edit', function (e) {
        e.preventDefault();
        $('#tabla').fadeOut(100);
        $('#formulario').show(100);

        var nRow = $( this ).parents('tr')[0];
        var aData=miTabla.row(nRow).data();
        $("#idClinica").val(aData.idClinica);
        $("#nombre").val(aData.nombre);
        $("#numClinica").val(aData.numClinica);
        $("#razonSocial").val(aData.razonSocial);
        $("#cif").val(aData.cif);
        $("#localidad").val(aData.localidad);
        //$("#provincia").val(aData.provincia);
        $('#provincia option').filter(function() {
          return this.text.toLowerCase() === aData.provincia.toLowerCase();
        }).attr('selected', true);
        $("#cp").val(aData.cp);
      });
 });
 
      




      //console.log( 'The table has '+data.length+' records' );

   /*
   $(document).ready(function() {
    $("btn1").animate(
      {width:'400px'}
      , 10000)
    
  });
*/
/*
row().cache( type )
*/