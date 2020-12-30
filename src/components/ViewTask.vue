<template>
    <!-- View Task -->
    
    <div class="task-popup taskup-view-task-popup">
        <div class="task-popup-inner" :class=[task.task_color]>

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
                            @click="markTaskStatus('progress')"
                        >
                            Mark in-progess
                        </button>

                        <button 
                            class="task-btn task-btn-green taskup-view-task-completed" 
                            v-if="task.task_status === 'to-do' || task.task_status === 'in-progress'"
                            @click="markTaskStatus('completed')"
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
        
        this.current_task = this.task;
    },
    mounted(){
        // Keyup Event
        window.addEventListener('keyup', this.keyupEvent); 
        // Body click Event
        window.addEventListener('click', this.bodyClick);
    },    
    methods: {
        // Get Date
        getDate(date){
            return moment(date).format('LL');
        },

        // Mark Task Status
        markTaskStatus(status){
            if(status === 'progress') { 
                this.current_task.task_status = 'in-progress';
            } else {
                this.current_task.task_status = 'completed';
            }
            
            let taskup_tasks = JSON.parse(localStorage.getItem("taskup_tasks"));

            let task_index = taskup_tasks.findIndex(task => task.task_id === this.current_task.task_id);

            taskup_tasks[task_index] = this.current_task;

            console.log(JSON.stringify(taskup_tasks));
            localStorage.setItem("taskup_tasks", JSON.stringify(taskup_tasks));
        },

        // Close Popup
        closePopup(){
            this.$emit('close-popup');
        },

        // Body click
        bodyClick(e){            
            if(e.target.classList.contains('task-popup')) { 
                this.closePopup();
            }
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