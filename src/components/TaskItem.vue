<template>
    <div class="task-item" :class="[current_color]" @click="viewTask(task)">
        <div class="tasktup-task-title">
            <h3>{{ task.task_name }}</h3>
        </div>
            
        <span class="taskup-task-date">{{ getDate(task.task_date) }}</span>
           
        <button class="taskup-task-edit" @click.stop="editTask(task)">
            <i class="far fa-pen"></i>
        </button>
        
    </div>

    <!-- View Task -->
    <ViewTask :task="task" @closePopup="closePopup" v-if="view_task"/>

</template>

<script>

// Moment js
import moment from 'moment';

// Components
import ViewTask from '@/components/ViewTask';

export default {
    name: 'TaskItem',
    components: {
        ViewTask, 
    },
    props: {
        task: {
            type: Object
        }
    },
    data(){
        return {
            view_task: false,
            current_color: this.task.task_color
        }
    },
    methods: {
        // Edit Task
        editTask(){
            console.log('task edit');
        },

        // View Task
        viewTask(){
            this.view_task = true;
        },

        // Task date
        getDate(date){
            return  moment(date).fromNow() 
        },

        // Close popup
        closePopup(){
            this.view_task = false;
        }
    }
}

</script>