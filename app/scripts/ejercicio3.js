   'use strict';
   $(document).ready(function() {
       $('#miTabla').DataTable({
           "processing": true,
           "serverSide": true,
           "ajax": "php/cargar_clinicas_ej3.php",
           "columns": [
            { "data": "id_clinica" },
            { "data": "nombre" },
            { "data": "razonsocial" },
            { "data": "cif" },
            { "data": "localidad" },
            { "data": "provincia" },
            { "data": "direccion" },
            { "data": "numclinica" },
            { "data": "id_tarifa" }
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
   });
