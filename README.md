# Angular-learn
Proyecto para aprender las bases de angular

# Instalar Angular CLI

  - Para instalar la CLI de Angular, abre una ventana de terminal y ejecuta el siguiente comando:
  ```
 npm install -g @angular/cli
  ```
  
# Crear un workspace y iniciar la aplicación
  - Ejecute el comando CLI ng new y proporcione el nombre my-app, como se muestra aquí:
  ```
 ng new mi-app
  ```
 - El comando ng new le pedirá información sobre las características que debe incluir la aplicación inicial. Acepte los valores predeterminados pulsando la tecla Enter o Return.

# Correr la aplicación
  - Navega a la carpeta del espacio de trabajo, como mi-app.
  - Corre el comando: 
  ```
 cd my-app
 ng serve --open
  ```
  El comando ng serve lanza el servidor, observa tus archivos y reconstruye la aplicación a medida que realizas cambios en esos archivos.
  
  Tambien podemos ejecutarlas con el comando:
   ```
  npm start
  ```
  
  Hemos cambiado la variable dentro del package.js para que al ejecutar este comando se ejecute el ng serve -o

La opción --open (o simplemente -o) abre automáticamente tu navegador en http://localhost:4200/.

![Imagen inicial de angular](https://angular.io/generated/images/guide/setup-local/app-works.png)
