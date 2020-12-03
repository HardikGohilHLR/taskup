<template>
    <!-- View Task -->
    
    <div class="task-popup taskup-view-task-popup">
        <div class="task-popup-inner">

            <!-- Close Popup -->
            <button class="task-back-popup" @click="closePopup">
                <span><i class="far fa-arrow-left"></i></span>
            </button>

            <div class="taskup-view-task">
                {{ task }}

                <h2>{{ task.task_name }}</h2>  

                <p>{{ task.task_desc }}</p> 

                <div class="taskup-view-task-date">
                    <span> {{ getDate(task.task_date) }} </span>
                </div>
                
            </div>
        </div>
    </div>

</template>

<script>
// Moment js
import moment from 'moment';

export default {
    name: 'ViewTask',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
        // Get Date
        getDate(date){
            return moment(date).format('LL');
        },

        // Close Popup
        closePopup(){
            this.$emit('close-popup');
        }

    }
}

</script>