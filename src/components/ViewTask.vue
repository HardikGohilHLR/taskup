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

                    <div class="taskup-view-task-options"> 

                        <button 
                            class="task-btn task-btn-yellow taskup-view-task-progress" 
                            v-if="task.task_status === 'to-do'"
                            @click="markProgress"
                        >
                            Mark in-progess
                        </button>

                        <button 
                            class="task-btn task-btn-green taskup-view-task-completed" 
                            v-if="task.task_status === 'to-do' || task.task_status === 'in-progress'"
                            @click="markCompleted"
                        >
                            Mark completed
                        </button>
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
    data(){
        return{
            current_task: {}
        }
    },
    created() {
        // Keyup Event
        window.addEventListener('keyup', this.keyupEvent); 

        this.current_task = this.task;
    },
    methods: {
        // Get Date
        getDate(date){
            return moment(date).format('LL');
        },

        // // Mark Progress
        markProgress(){
            this.current_task.task_status = 'in-progress';
        },

        // Mark Completed
        markCompleted(){
            this.current_task.task_status = 'completed';
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