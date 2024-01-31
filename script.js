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
            ],
            newTask: {
                text: '',
                done: false,
            },
        }

    },

    methods: {
        deleteTask(i) {
            this.tasks.splice(i, 1);
            console.log(i);
        },
    },
}).mount('#app')
