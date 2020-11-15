<template>
    <div class="task-item">
        {{task}}
    </div>
</template>

<script>

export default {
    name: 'TaskItem',
    props: {
        task: {
            type: Object
        }
    }
}

</script>