# Dudas
1. En la confirmación de la migo, yo valido con Estado Pedido, campo el cual apunta a la categoría CABECERA PEDIDO SAP. Dentro , escogemos el campo "Estado Pedido".  Pero también tenemos un campo con nombre "In_Estado_Del_Pedido". Hacia cual de estos campos, realmente se tiene queapuntar y porque

Respuesta punto 1 -> Cofarca enviara un "In_Estado_del_Pedido" -> valor el cual nosotros introduciremos en "Estado_Pedido". 
Cuando llegue ese valor, se continuará el WF del lado derecho.

"Posibilidades" -> Crear un WF, que se activará si el valor cambia, para registar la fecha y la hora de dicho cambio.

2. Después de la tarea manual "Responsable de Área", tenemos 3 caminos, y para que el cliente pueda avanzar, mediante una condición sql, solicito que escoja "[Estado Factura COFARCANo] = 3" | Puedo dejarlo así, o cuando avance, que se ponga solo el valor

Respuesta punto 2 -> Hazle la vida más fácil al usuario, cargate la condición SQL y actualiza el valor desde actualziar índice.


3. Página 9 del SOW

En la ficha del proveedor se podrá indicar el departamento que tiene que aprobar la factura. Si un 
proveedor sirve a varios departamentos, será el área financiera quien decida a que departamento 
se asigna la factura.


  En el caso de cambiar el "Departamento Asignado", se cambian otros valores que están asociados, por como está configurado ahora. Lo dejo de está forma o el valor será indeendiente. 

4. Explicación de como funciona el messageID 
