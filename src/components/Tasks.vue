<template> 

    <div class="taskup-wpr">
        <TaskItem v-for="task in getTasks" :key="task.task_id" :task="task"/>
    </div>    
    
</template>

<script>
import TaskItem from '@/components/TaskItem';

export default {
    name: 'Tasks',
    props: {
        active_task_type: {
            type: String
        },
        all_tasks: {
            type: Array,
            required: true
        }
    },
    components: {
        TaskItem
    },
    data(){
        return {            
            taskup_tasks: [],
            tasks: []
        }
    },
    computed: {
        // Get Tasks
        getTasks(){
            let tasks = [];    
            this.all_tasks.forEach(task => {                 
                if(task.task_status === this.active_task_type) { 
                    tasks.push(task);
                }
            });        

            return tasks;
        }
    },

    mounted(){
        this.getAllTasks();
    },

    methods: {

        // Get All Tasks
        getAllTasks(){
            this.taskup_tasks = this.all_tasks;
        },
    }
}
</script>