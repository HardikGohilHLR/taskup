<template>
    <div class="task-item" :class="[current_color]">
        <div class="tasktup-task-title">
            <h3>{{ task.task_name }}</h3>
        </div>
            
        <span class="taskup-task-date">{{ getDate(task.task_date) }}</span>
        
    </div>
</template>

<script>

// Moment js
import moment from 'moment';

export default {
    name: 'TaskItem',
    props: {
        task: {
            type: Object
        }
    },
    data(){
        return {
            current_color: this.task.task_color.color
        }
    },
    methods: {
        getDate(date){
            return  moment(date).fromNow() 
        }
    }
}

</script>