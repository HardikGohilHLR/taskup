<template>
    <!-- Form -->
    <form class="task-add-form" @submit="prevent">

        <div class="form-group form-group-input">
            <label for="task_name">Task name <span>(40 Words)</span></label>
            <input type="text" id="task_name" v-model="task_name"/>
            <span class="task-error-msg" v-if="task_name_error">Please enter task name.</span>
        </div>

        <div class="form-group form-group-input">
            <label for="task_desc">Description</label>
            <textarea id="task_desc" v-model="task_desc"></textarea>
            <span class="task-error-msg" v-if="task_desc_error">Please enter task description.</span>
        </div>

        <div class="form-group">
            <label for="task_status">Status</label>
            <div class="form-radio-group">
                <div class="form-group-radio" v-for="task_st in task_statuses" :key="task_st.title">
                    <input type="radio" :id="task_st.title" name="task_status" :value="task_st.title" :checked="task_st.is_checked" v-model="task_status">
                    <label :for="task_st.title" :class="task_st.title">{{ task_st.title }}<span class="form-radio-checked"></span></label>
                </div>
                
            </div>
        </div>

        <div class="form-group form-color-group">
            <label for="task_color">color</label>
            <div class="form-radio-group">
                <div class="form-group-radio" v-for="color in task_colors" :key="color.color">
                    <input type="radio" :id="color.color" name="task_color" :value="color.code" :checked="color.is_checked" v-model="task_color" :style="{ backgroundColor: color.code }">
                    <label :for="color.color" :style="{ 'background-color': color.code }"><span class="form-radio-checked"></span></label>
                </div>                
            </div>
        </div>

        <div class="btn-group">
            <button type="button" class="task-btn task-btn-green" @click="createTask">Create Task</button>
        </div>
            
    </form>

</template>

<script>

export default {
    name: 'AddTask',
    data() {
        return {
            task_name: '',
            task_name_error: false,
            task_desc: '',
            task_desc_error: false,
            task_status: 'to-do',
            task_statuses: [
                { title: 'to-do', is_checked: true},
                { title: 'in-progress', is_checked: false},
                { title: 'done', is_checked: false},
            ], 
            task_color: '#f76f8c',
            task_colors: [
                { color: 'pink', code: '#f76f8c', is_checked: true}, 
                { color: 'green', code: '#0EBC7D', is_checked: false }, 
                { color: 'blue', code: '#306bdd', is_checked: false }, 
                { color: 'purple', code: '#8676fe', is_checked: false }
            ],
        }
    },
    methods: {

        // Validate Form
        validateForm(){
            // Task name
            this.task_name_error = this.task_name === '' ? true : false;
            // Task description
            this.task_desc_error = this.task_desc === '' ? true : false;

            return !this.task_name_error && !this.task_desc_error ? true : false;
        },

        // Create task
        createTask(){ 
            console.log('submit');
             console.log(this.task_colors.find(color => color.is_checked));   
            if(!this.validateForm()) { return; }

            let task = {
                task_id: 1,
                task_name: this.task_name,
                task_desc: this.task_desc,
                task_status: this.task_status,
                task_color: this.task_colors.find(color => color.is_checked),
                task_date: new Date().toISOString()
            };
            
            let taskup_tasks = JSON.parse(localStorage.getItem("taskup_tasks"));
            
            taskup_tasks = !taskup_tasks ? [] : taskup_tasks;

            task.task_id = taskup_tasks.length;
            taskup_tasks.push(task);
            localStorage.setItem("taskup_tasks", JSON.stringify(taskup_tasks));

            this.closePopup();
        },

        // Close Popup
        closePopup(){
            this.$emit('close-popup');
        }
    }
}

</script>