# Dudas



1. Página 9 del SOW

En la ficha del proveedor se podrá indicar el departamento que tiene que aprobar la factura. Si un 
proveedor sirve a varios departamentos, será el área financiera quien decida a que departamento 
se asigna la factura.

  **Cambios Realizados:**

Muevo los valores de la captura hacia ocultos -> Cmabiando la terminación, para poder usar ese mismo nombre en la pestaña "datos principales".

Dentro de "Datos Principales", agrego:
** Revisar con JJ **
ID Departamento  = ID Departamento 
Departamento Asignado = Nombre Departamento

2. Se ha realizado un cambio en la validación del CIF Proveedor, y dependiendo del caso que se presente, se pueden presentar 3 textos en el cmapo -> Comprobación CIF
   


![image](https://github.com/user-attachments/assets/966f628a-a46f-434e-b21e-bef686fc0d62)



# Realizado

-------------------

MessageID

   El MessageID se va a encargar de conectar en cascada el email que llega con los documentos

   Ej:
   1 LLega una factura por correo, guardamos el correo y el messageId sirve de enlace, para que si queremos ver desde que correo ha llegado esta factura, poder verlo con la categoría Facturas Compras

   Ya configurado

-------------------


# Pendiente

-------------------

1. ** Confirmación de la MIGO**

   **Pendiente:**

   - Cofarca enviará un **"In_Estado_del_Pedido"**, valor el cual nosotros introduciremos en **"Estado_Pedido"**.
   - Cuando llegue ese valor, se continuará el WF del lado derecho.

   **Posibilidades:**

   - Crear un WF que se activará si el valor cambia, para registrar la fecha y la hora de dicho cambio.

-------------------
