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
                    <input type="radio" :id="color.color" name="task_color" :value="color.color" :checked="color.is_checked" v-model="task_color" :style="{ backgroundColor: color.code }">
                    <label :for="color.color" :style="{ 'background-color': color.code }"><span class="form-radio-checked"></span></label>
                </div>                
            </div>
        </div>

        <div class="btn-group">
            <button type="button" class="task-btn task-btn-green" @click="editTask">Edit Task</button>
        </div>
            
    </form>

</template>

<script>

export default {
    name: 'EditTask',
    
    props: {
        task: {
            type: Object,
            required: true
        },
    },
    mounted(){
        this.setTaskDetails();
    },
    data() {
        return {
            task_name: this.task.task_name,
            task_name_error: false,
            task_desc: this.task.task_desc,
            task_desc_error: false,
            task_status: this.task.task_status,
            task_statuses: [
                { title: 'to-do', is_checked: true},
                { title: 'in-progress', is_checked: false},
                { title: 'completed', is_checked: false},
            ], 
            task_color: this.task.task_color,
            task_colors: [
                { color: 'pink', code: '#f76f8c', is_checked: true}, 
                { color: 'green', code: '#0EBC7D', is_checked: false }, 
                { color: 'blue', code: '#306bdd', is_checked: false }, 
                { color: 'purple', code: '#8676fe', is_checked: false }
            ],
        }
    },
    methods: {

        setTaskDetails(){
            this.task_statuses.forEach(status => {
                if(status.title === this.task.task_status) {
                    status.is_checked = true;
                } else {
                    status.is_checked = false;
                }
            });
            this.task_colors.forEach(color => {
                if(color.color === this.task.task_color) {
                    color.is_checked = true;
                } else {
                    color.is_checked = false;
                }
            });
        },

        // Validate Form
        validateForm(){
            // Task name
            this.task_name_error = this.task_name === '' ? true : false;
            // Task description
            this.task_desc_error = this.task_desc === '' ? true : false;

            return !this.task_name_error && !this.task_desc_error ? true : false;
        },

        // Create task
        editTask(){ 
            
            if(!this.validateForm()) { return; }

            let task = {
                task_id: this.task.task_id,
                task_name: this.task_name,
                task_desc: this.task_desc,
                task_status: this.task_status,
                task_color: this.task_color,
                task_date: this.task.task_date
            }; 
 
            this.$store.dispatch('editTask', task);
            this.$emit('close-popup');
        },

    }
}

</script>