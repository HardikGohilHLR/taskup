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
        }
    },
    components: {
        TaskItem
    },
    data(){
        return {            
            all_tasks: [],
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
            let taskup_tasks = JSON.parse(localStorage.getItem('taskup_tasks'));

            this.all_tasks = taskup_tasks;
        },
    }
}
</script>