<template>

    <header>
        <h2><span>Hey</span> Good <span>{{ greetingMessage }}</span></h2>
        <p>You have some important tasks to do! Please Take a look.</p>
    </header>

</template>

<script>
export default {
    name: 'TaskHeader',
    computed: {
        greetingMessage(){
            let hrs = new Date().getHours();
            let greeting_message;

            if (hrs < 12){
                greeting_message = 'Morning';
            }
            else if (hrs >= 12 && hrs <= 17){
                greeting_message = 'Afternoon';
            }
            else if (hrs >= 17 && hrs <= 24){
                greeting_message = 'Evening';
            }
             
            return greeting_message;
        }
    }
}
</script>