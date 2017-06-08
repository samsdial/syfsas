# docker-pug-starter

This is a starter project for a node + pug that uses docker for dev enironment.
Docker and docker-compose is all you need to develop and build.

## Vue js
###Example
Eventos y Métodos
data (información)
methods (instancia)
Saludar
```sh
    new Vue({
        el: '#idname',
        data: {
            nombre: 'Juan',
        },
        methods: {
            saludar: funtions(nombre, _evt){
                alert('Buenas tardes' + nombre);
                // trae info del evento
                console.log(_evt);
            }
        },
    });
```
html
```sh
    <input type="text" v-model="nombre"></input>
    <button v-on:click"Saludar('Juan', $event)">Click aquí</button>
```
Eventos
El evento del click de un boton
    v-on:click / @click
El Envento de enviar un formulario
v-on:submit / @submit


Renderizado de listas
Recorrer cada propiedad del objeto
v-for /
metodos de convenienza
1. $key (refecia a cada nombre de cada objeto data)
Ojeto
Matriz Simple

Data binding en estilos y clases
v-bind:class{}

## get started
```
$ docker-compose up
```

## gulp
```
$ docker exec -it lqvue_web_1 gulp watch
```
