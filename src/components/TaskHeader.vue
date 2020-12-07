<template>

    <header>
        <h2>Hey <span>{{ greetingMessage }}</span>!</h2>
        <p v-if="tasks_added">You have some important tasks to do! Please Take a look.</p>
        <p v-else>Please create tasks to proceed.</p>
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
        }
    }
}
</script>