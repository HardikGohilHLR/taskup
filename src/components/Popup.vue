<template>
    <div class="task-popup">
        <div class="task-popup-inner">

            <!-- Close Popup -->
            <button class="task-close-popup" @click="closePopup">
                <span>&#10060;</span>
            </button>

            <!-- Content -->
            <div class="task-content">
                <h2>Add Task</h2>

                <AddTask @closePopup="closePopup"/>
            </div>
        </div>
    </div>
</template>

<script>
import AddTask from '@/components/AddTask';

export default {
    name: 'Popup',
    components: {
        AddTask
    },
    methods: {

        // Close Popup
        closePopup(data){
            this.$emit('close-popup', data);
        }
    }
}

</script>