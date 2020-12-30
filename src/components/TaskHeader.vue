<template>

    <header>
        <h2>Hey <span>{{ greetingMessage }}</span>!</h2>
        
        <p v-if="is_all_completed">Please create tasks to proceed.</p>
        <p v-else>You have some important tasks to do! Please Take a look.</p>
    </header>

</template>

<script>
export default {
    name: 'TaskHeader',
    props: {
        tasks_added: {
            type: Boolean,
            required: true
        }
    }, 
    computed: {

        // Greeting Message
        greetingMessage(){
            let hrs = new Date().getHours();
            let greeting_message;

            if (hrs < 12){
                greeting_message = 'Good Morning';
            }
            else if (hrs >= 12 && hrs <= 17){
                greeting_message = 'Good Afternoon';
            }
            else if (hrs >= 17 && hrs <= 24){
                greeting_message = 'Good Evening';
            }
             
            return greeting_message;
        },

        // List all tasks
        all_tasks () {
            return this.$store.getters.allTasks;
        },

        // Is all tasks completed
        is_all_completed(){
            
            let is_all_complete = this.all_tasks.every(task => {
                return task.task_status === 'completed';
            });
 
            return is_all_complete;
        }

    }, 
}
</script>