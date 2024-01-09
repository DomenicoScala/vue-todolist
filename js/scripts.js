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
                },
            ],
            
           newTask :''
          
                
            };
        },
        methods:{
            removeTask(i){
                this.tasks.splice(i,1);
                console.log(this.removeTask);
            },
            addTask(){
                if(this.newTask.trim() !== ''){
                    this.tasks.push({text: this.newTask, done: false});
                    this.newTask = '';
                }
                

                  
            console.log(this.tasks)    
            console.log(this.addTask)
        }
    }
  
}).mount('#app');

