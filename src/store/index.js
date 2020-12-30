import { createStore } from "vuex";

export default createStore({
	state: {
		taskup_tasks: []
	},
	mutations: { 

		// Set All Tasks
		taskupTaskList(state, taskup_tasks){
            localStorage.setItem("taskup_tasks", JSON.stringify(taskup_tasks));
			state.taskup_tasks = taskup_tasks;
		}

	},
	actions: {

		// Get All Tasks
		getAllTasks({ commit }){
			let taskup_tasks = JSON.parse(localStorage.getItem("taskup_tasks"));
	 		commit('taskupTaskList', taskup_tasks);
		},

		// Add Task
		addTask({ commit }, task){
			
			let taskup_tasks = JSON.parse(localStorage.getItem("taskup_tasks"));
            
            taskup_tasks = !taskup_tasks ? [] : taskup_tasks;
			
			task.task_id = taskup_tasks.length; 			
			taskup_tasks.push(task);			
			
			commit('taskupTaskList', taskup_tasks);
		},

		// Edit Task
		editTask({ commit }, task){ 

            let taskup_tasks = JSON.parse(localStorage.getItem("taskup_tasks")); 
            taskup_tasks[task.task_id] = task;

			commit('taskupTaskList', taskup_tasks);
		},

		// Mark Task Status
		markTaskStatus({ commit }, current_task){
			let taskup_tasks = JSON.parse(localStorage.getItem("taskup_tasks"));

            let task_index = taskup_tasks.findIndex(task => task.task_id === current_task.task_id);

            taskup_tasks[task_index] = current_task;
			
			commit('taskupTaskList', taskup_tasks);
		},
 
	},
    getters: {
        allTasks(state) {
            return state.taskup_tasks
        }
    }
});
