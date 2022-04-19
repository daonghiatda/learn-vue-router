<template>
    <form>
        <div>
            <label for="">Task name: </label>
            <input type="text" v-model="task.taskName">
        </div>
        <div>
            <label for="">Person: </label>
            <input type="text" v-model="task.taskPerson">
        </div>
        <div>
            <label for="">Duration(Day): </label>
            <input type="number" v-model="task.duration">
        </div>
        <!-- <div>
            <label>Status: </label>
            <select name="" id="" v-model="task.status">
                <option value="inprogress">Inprogress</option>
                <option value="done">Done</option>
                <option value="cancel">Cancel</option>
            </select>
        </div> -->
        <button @click="addTask">Add</button>
    </form>
    <router-link to="/"><button>Back to homepage</button></router-link>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            task: {
                taskId: '',
                taskName: '',
                taskPerson: '',
                duration: '',
                createAt: '',
                deadlineAt: '',
                status: 'Inprogress'
            }
        }
    },
    methods: {
        formatDate(date) {
            return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
        },
        addTask(e) {
            e.preventDefault();
            let createDate = new Date()
            let deadlineDate = new Date(createDate.getTime())
            deadlineDate.setDate(deadlineDate.getDate() + this.task.duration)
            this.task.createAt = this.formatDate(createDate)
            this.task.deadlineAt = this.formatDate(deadlineDate)
            this.task.taskId = this.taskIndex
            this.$store.commit('addTask', this.task)
            this.$store.commit('increaseTaskIndex')
            this.task.taskId = ''
            this.task.taskName = ''
            this.task.createAt = ''
            this.task.deadlineAt = ''
            this.task.taskPerson = ''
            this.task.duration = ''
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        },
        taskIndex() {
            return this.$store.state.taskIndex
        }
    }
}
</script>

