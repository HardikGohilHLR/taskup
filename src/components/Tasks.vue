<template> 

    <TaskItem v-for="task in getTasks" :key="task.task_id" :task="task"/>
    
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
            tasks: this.getTasks
        }
    },
    computed: {
        // Get Tasks
        getTasks(){
            let taskss = [];    
            this.all_tasks.forEach(task => {
                if(task.task_status === this.active_task_type) { 
                    taskss.push(task);
                }
            });        
            return taskss;  
        }
    },
    mounted(){
        this.getAllTasks();
    },

    methods: {
        // Get All Task
        getAllTasks(){
            let taskup_tasks = JSON.parse(localStorage.getItem('taskup_tasks'));

            this.all_tasks = taskup_tasks;
        },
    }
}
</script>