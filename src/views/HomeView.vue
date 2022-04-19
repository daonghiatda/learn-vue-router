<template>
    <div>
        <label for="">Filter task status</label>
        <select name="" id="" v-model="filterType">
            <option value="All">All</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Done">Done</option>
            <option value="Cancel">Cancel</option>
        </select>
    </div>
  <table>
    <tr>
      <th>ID</th>
      <th>Task name</th>
      <th>Task Person</th>
      <th>Create Date</th>
      <th>Deadline Date</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    <tr v-for="task in tasks" :key="task.id">
      <td> {{ task.taskId }} </td>
      <td> {{ task.taskName }} </td>
      <td> {{ task.taskPerson }} </td>
      <td> {{ task.createAt }} </td>
      <td> {{ task.deadlineAt }} </td>
      <td><span :class="(task.status.toLowerCase())"> {{ task.status }} </span></td>
      <td>
          <span><i class="fa-solid fa-eye"></i></span>
          <span><i class="fa-solid fa-file-pen" @click="updateTask(task.taskId)"></i></span>
          <span><i class="fa-solid fa-trash-can" @click="deleteTask(task.taskId)"></i></span>
      </td>
    </tr>
  </table>
  <button @click="this.$router.push({ path: '/addtask' })">Add task</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
      return {
          filterType: 'All'
      }
  },
  methods: {
        deleteTask(taskId) {
            this.$store.commit('deleteTask', taskId)
            this.$store.commit('decreaseTaskIndex')
        },
        updateTask(taskId) {
            this.$router.push({ name: 'update-task', params: {taskId: taskId} })
        }
    },
  computed: {
    tasks() {
      return this.$store.state.tasks.filter(task => this.filterType == 'All' ? task : task.status == this.filterType);
    },
  },
};
</script>

<style scoped>
th, td {
    min-width: 120px;
    text-align: center;
}

td:last-child {
    display: inline-flex;
    justify-content: space-around;
}

td span {
    display: inline-block;
    width: 16px;
    height: 16px;
    padding: 4px;
    color: #fff;
    background-color: #2dbb2d;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
}
td span i {
    font-size: 12px;
    display: inline-block;
    margin: auto;
}

.inprogress {
    background-color: orange;
    min-width: 80px;
}

.done {
    background-color: #2dbb2d;
    min-width: 80px;
}

.cancel {
    background-color: red;
    min-width: 80px;
}
</style>