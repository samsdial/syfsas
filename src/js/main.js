new Vue ({
    el: '#app',
    data: {
        nuevaTarea: null,
        editandoTarea: null,
        tareas: [
            {titulo: 'salir a comer', completado: false},
            {titulo: 'Correr', completado: false},
            {titulo: 'Comprar', completado: false},
            {titulo: 'Estudiar', completado: false},
        ]
    },
    methods: {
        agregarTarea: function (tarea) {
            this.tareas.unshift({
                    titulo: tarea, completado: false
            });
            this.nuevaTarea = '';
        },
        editarTarea: function(tarea) {
            console.info(tarea);
        },
        eliminarTarea: function(indice) {
            this.tareas.splice(indice, 1)
        }
    }
});
