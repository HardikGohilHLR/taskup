<template>
    <div class="task-item" :class="[current_color]">
        <div class="tasktup-task-title">
            <h3>{{ task.task_name }}</h3>
        </div>
    </div>
</template>

<script>

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
}

</script>