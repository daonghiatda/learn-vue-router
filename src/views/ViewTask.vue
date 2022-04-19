<template>
    <div>
        <p>Task name: {{taskView.taskName}} </p>
        <p>Person: {{taskView.taskPerson}} </p>
        <p>Create at: {{taskView.createAt}} </p>
        <p>Deadline at: {{taskView.deadlineAt}} </p>
        <p>Status: {{taskView.status}} </p>
        <p>There is {{hourRemain}} remain hours to deadline</p>
    </div>
    <router-link to="/"><button>Back to homepage</button></router-link>
    <router-link :to="{name: 'update-task', params: {taskId: this.$route.params.taskId}}"><button>Upate</button></router-link>
</template>

<script>
export default {
    name: 'ViewTask',
    computed: {
        taskView() {
            return this.$store.state.tasks.find(ele => ele.taskId = this.$route.params.taskId)
        },
        hourRemain() {
            return Math.abs((new Date(this.taskView.deadlineAt) - new Date(this.taskView.createAt))/3600000)
        }
    }
}
</script>