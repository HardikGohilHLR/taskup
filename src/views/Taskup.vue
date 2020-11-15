<template>
	<div class="task-main">

	    <div class="task-main-container">
            <div class="task-container">

                <!-- Logo -->
                <div class="task-logo">
                    <h1>Taskup</h1>
                </div>

                <!-- Header -->
                <TaskHeader />

                <!-- Content -->

                <!-- Add Task Button -->
                <div class="task-add-btn">
                    <button class="task-btn task-btn-blue" @click="addTask">
                        <i class="far fa-plus"></i>
                        Add Task
                    </button>
                </div>

                <!-- Tabs -->
                <div class="task-types">
                    <ul>
                        <li 
                            v-for="task in task_types" 
                            :key="task.title" 
                            :class="{active: task.is_active}"
                            @click="taskType(task)"
                        >
                            <button>{{ task.title }}</button>     
                        </li> 
                    </ul>
                </div>    

                <div class="task-wpr">
                    <TaskItem v-for="task in tasks" :key="task.task_id" :task="task"/>
                </div>    

            </div>

            <Popup v-if="popup_active" @closePopup="closePopup"/>
            
        </div>
    </div>
</template>

<script>
import TaskHeader from "@/components/TaskHeader";
import TaskItem from "@/components/TaskItem";
import Popup from "@/components/Popup";

export default {
    name: 'Taskup',
    components: {
        TaskHeader,
        TaskItem,
        Popup
    }, 
    data(){
        return { 
            task_types: [ 
                { title: 'todo', is_active: false },
                { title: 'in-progress', is_active: true },
                { title: 'completed', is_active: false },                          
            ],
            popup_active: false,
            popup: '',
            tasks: []   
        }
    },

    mounted(){
        this.getAllTasks();
    },

    methods: {
        // Get All Task
        getAllTasks(){
            let taskup_tasks = JSON.parse(localStorage.getItem('taskup_tasks'));

            this.tasks = taskup_tasks;
        },

        // Add Task
        addTask() {
            this.popup_active = true;
            this.popup = 'add_task';
        },
    
        // Close Popup
        closePopup(){
            this.popup_active = false;
            this.popup = '';
        },

        // Task type
        taskType(task_data){
            
            this.task_types.forEach((task) => {
                task.is_active = task_data.title === task.title ? true: false;
            });
        }
    }
}
</script>