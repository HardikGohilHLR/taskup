<template>
    <div class="task-item" :class="[current_color, task_status]" @click="openTask('view')">
        <div class="tasktup-task-title">
            <h3>{{ task.task_name }}</h3>
        </div>
            
        <span class="taskup-task-date">{{ getDate(task.task_date) }}</span>
           
        <button class="taskup-task-edit" @click.stop="openTask('edit')">
            <i class="far fa-pen"></i>
        </button>
        
    </div>

    <!-- View Task -->
    <ViewTask :task="task" @closePopup="closePopup" v-if="view_task"/>

    <!-- Edit Task Popup -->
    <Popup :task="task" :edit_task="edit_task" @closePopup="closePopup" v-if="edit_task"/>

</template>

<script>

// Moment js
import moment from 'moment';

// Components
import ViewTask from '@/components/ViewTask';
import Popup from '@/components/Popup';

export default {
    name: 'TaskItem',
    components: {
        ViewTask, 
        Popup,
    },
    props: {
        task: {
            type: Object
        }
    },
    data(){
        return {
            view_task: false,
            edit_task: false, 
        }
    }, 
    computed: {
        current_color() { 
            return this.task.task_color;
        },
        task_status() { 
            return this.task.task_status;
        }
    },
    methods: {

        // Edit or View Task
        openTask(toggle){
            if(toggle === 'view') {
                this.view_task = true;
            } else {
                this.edit_task = true;
            }
        },

        // Task date
        getDate(date){
            return moment(date).fromNow() 
        },

        // Close popup
        closePopup(){
            this.view_task = false;
            this.edit_task = false; 
        }
    },
}

</script>