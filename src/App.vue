<template>
	<Taskup />
</template>

<script>
// Views
import Taskup from "@/views/Taskup";

export default {
	name: "App",
	components: {
		Taskup
	},
	mounted(){    
		// Get All tasks
        this.$store.dispatch('getAllTasks');
    },
}

</script>
