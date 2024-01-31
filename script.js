const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Andare in Palestra',
                    done: true,
                },
                {
                    text: 'Studiare',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Annaffiare le piante',
                    done: true,
                },
                {
                    text: 'Pulire la casa',
                    done: false,
                },
            ]
        }
        
    },

    methods: {
        deleteTask(n) {
            this.tasks.splice(n, 1);           
        },
    },
}).mount('#app')
