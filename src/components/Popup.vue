<template>
    <div class="task-popup">
        <div class="task-popup-inner">

            <!-- Close Popup -->
            <button class="task-close-popup" @click="closePopup">
                <span>&#10060;</span>
            </button>

            <!-- Content -->
            <div class="task-content">
                <h2>{{ !edit_task ? 'Add Task' : 'Edit Task'}}</h2>

                <!-- Edit Task -->                 
                <EditTask :task="task" @closePopup="closePopup" v-if="edit_task"/>
                
                <!-- Add Task -->
                <AddTask @closePopup="closePopup" v-else/>
            </div>
        </div>
    </div>
</template>

<script>
import AddTask from '@/components/AddTask';
import EditTask from './EditTask.vue';

export default {
    name: 'Popup',
    components: {
        AddTask,
        EditTask
    },
    props: {
        edit_task: {
            type: Boolean,
            required: true
        },
        task: {
            type: Object,
            required: true
        },
    },
    mounted(){
        // Keyup Event
        window.addEventListener('keyup', this.keyupEvent); 
        // Body click Event
        window.addEventListener('click', this.bodyClick);
    },   

    methods: {

        // Close Popup
        closePopup(){
            this.$emit('close-popup');
        },

        // Body click
        bodyClick(e){            
            e.target.classList.contains('task-popup') ? this.closePopup() : '';
        },

        // Keyup Event
        keyupEvent(e){ 
            e.keyCode === 27 ? this.closePopup() : '';
        }        
        
    }
}

</script>