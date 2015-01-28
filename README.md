# datatables_servidor
1. Crea un esquema de base de datos llamado datatables en base al diseño que proporciono en MySQL Workbench. Rellena la bbdd con los datos que se adjuntan en la hoja de cálculo. Utilizaremos estos datos para los ejercicios sucesivos.
Se proporciona también una exportación de la bbdd para poder hacer la importación de datos directamente.

2. Usa el plugin datatables para crear una tabla html que muestre los campos Nombre, Cif, Localidad,  Provincia y id_clinica de la tabla de bbdd del ejercicio anterior. 
Para obtener los datos del servidor puedes ayudarte del script que proporciona datatables en el ejemplo “DataTables server-side processing example”.

3. Añade en cada registro de la tabla anterior un botón de editar y otro de borrar. Los botones deben enlazar a una url donde se pase un parámetro identificador del registro en cuestión. Puedes y debes utilizar la propiedad fnRender. Consulta la documentación del plugin de datatables para obtener más información.

4. Añade a la tabla anterior el tipo de tarifa de la clínica. Puedes echar un ojo al fichero de ayuda, si no se te ocurre como empezar.

5. Al pulsar el botón de editar debe desaparecer la tabla y aparecer mediante algún tipo de efecto jquery un formulario con los datos del registro de la clínica que se ha pulsado.

6. Utiliza ajax para borrar o modificar registros de datatables. Ya sea desde el mismo datatables (botón de borrar) o desde el formulario (botón de editar). Puedes ayudarte de los scripts que proporciono.

7. Implementa los avisos de ajax en el código anterior mediante algún plugin de jQuery de tipo growl. 
