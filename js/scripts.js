// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Completa Esercizio ToDoList',
                    done: false
                },
                {
                    text: 'Crea lista dei Linguaggi di Programmazione da studiare.',
                    done: true
                },
                {
                    text: 'Inviare mail con i progetti allegati',
                    done: true
                }
            ]
        }
    },
    methods:{
        
    }
  
}).mount('#app');