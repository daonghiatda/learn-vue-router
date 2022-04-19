<template>
  <form>
    <div>
      <label for="">Task name: </label>
      <input type="text" v-model="taskUpdate.taskName" />
    </div>
    <div>
      <label for="">Person: </label>
      <input type="text" v-model="taskUpdate.taskPerson" />
    </div>
    <div>
      <label for="">Duration(Day): </label>
      <input type="number" v-model="taskUpdate.duration" />
    </div>
    <div>
      <label>Status: </label>
      <select name="" id="" v-model="taskUpdate.status">
        <option value="Inprogress">Inprogress</option>
        <option value="Done">Done</option>
        <option value="Cancel">Cancel</option>
      </select>
    </div>
    <button @click="updateTask">Update</button>
  </form>
</template>

<script>
export default {
  name: "UpdateTask",
  methods: {
    updateTask(e) {
      e.preventDefault();
      this.$store.commit('updateTask', this.taskUpdate)
      this.$router.push({path: '/'})
    },
  },
  computed: {
    taskUpdate() {
      return {
        ...this.$store.state.tasks.find(
          (task) => task.taskId == this.$route.params.taskId
        ),
      };
    },
  },
};
</script>