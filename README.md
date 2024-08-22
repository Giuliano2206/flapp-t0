# flapp-t0
En este documento se hablará de como levantar localmente la aplicación solicitada y algunos detalles a considerar.

La aplicacion fue desarrollada en:
- Windows 11
- Python 3.11.0
- Node 20.16.0
- npm 10.8.1

## Quickstart

### Frontend
1. Estando en la carpeta raiz del proyecto, hay que entrar a la carpeta `frontend`
    ```
    cd frontend
    ```
1. Estando en `frontend` hay que ejecutar los siguientes comandos:
    ```
    npm install
    npm start
    ```
    El primero instala las dependencias para el proyecto y el segundo inicializa la aplicacion en [localhost:3000](http://localhost:3000/).

1. En este punto tienes que ir a tu navegador y ver la pagina de inicio (hay que tener el backend levantado para la aplicación funcione a su 100%).

### Backend
En una terminal distinta a la anterior hay que realizar lo siguiente.
1. Primero hay que crear un entorno virtual de python.
    ```
    python -m venv venv
    ```

1. Activar el entorno con:
    ```
    venv/Scripts/activate
    ```

1. Instalar las dependencias con:
    ```
    pip install -r requirements.txt
    ```

1. Activar la aplicacion de Django con:
    ```
    python manage.py runserver
    ```
    (esto estando en la carpeta backend `cd backend`)

Luego de seguir todos estos pasos es muy seguro que la aplicación esté totalmente funcional en [localhost:3000](http://localhost:3000/).

Cualquier duda a consulta me pueden hablar por telegram @Giulinano2206 o por correo [giuliano.celedon@ug.uchile.cl](mailto:giuliano.celedon@ug.uchile.cl).

## Consideraciones
El estilo aplicado es css puro, como no se mencionaba limitaciones o requirimientos con el estilo, se decidió aplicar uno propio.

La imagen del logo fue realizada con IA.

La aplicación es responsiva, por lo que se adapta a distintos tamaños de pantalla, ordenando los componentes dependiendo del dispositivo.

La lógica del endpoint solicitado se encuentra en `backend/cart/view.py`.

En relación con el front, los componentes principales son `MainView.js` y `CheckOut.js` ambos archivos se encuentran en `frontend/src/components`. Se intentó ser lo más eficiente posible con los cambios de estado. 

En el repositorio se podrá ver el trabajo desarrollado, con commits, isuues y pull requests realizados.

## Extras

Video de una demo que muestra todas las funcionalidades solicitadas- [Link](https://youtu.be/CJLkqtgaQIk).