<template>
    <!-- View Task -->
    
    <div class="task-popup taskup-view-task-popup">
        <div class="task-popup-inner" :class=[task.task_color.color]>

            <!-- Close Popup -->
            <button class="task-back-popup" @click="closePopup">
                <span><i class="far fa-arrow-left"></i></span>
            </button>

            <div class="taskup-view-task"> 
                <div class="taskup-task-status">
                    <span :class=[task.task_status]>{{ task.task_status }}</span>
                </div>
                
                <div class="taskup-task-content">

                    <h2>{{ task.task_name }}</h2>  

                    <p>{{ task.task_desc }}</p> 

                    <div class="taskup-view-task-date">                        
                        <p> 
                            <i class="far fa-clock"></i> 
                            Date: 
                            <span> {{ getDate(task.task_date) }} </span>
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
    </div>

</template>

<script>
// Moment js
import moment from 'moment';

export default {
    name: 'ViewTask',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        }
    },
    created() {

        window.addEventListener('keyup', this.keyupEvent); 
    },
    methods: {
        // Get Date
        getDate(date){
            return moment(date).format('LL');
        },

        // Close Popup
        closePopup(){
            this.$emit('close-popup');
        },

        // Keyup Event
        keyupEvent(e){ 
            if (e.keyCode === 27) {
                this.closePopup();
            }
        }

    }
}

</script>