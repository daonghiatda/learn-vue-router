import { createStore } from "vuex";

export default createStore({
    state: {
        tasks: [],
        taskIndex: 1,
    },
    getters: {

    },
    mutations: {
        increaseTaskIndex(state) {
            state.taskIndex++
        },
        decreaseTaskIndex(state) {
            state.taskIndex--
        },
        addTask(state, task) {
            state.tasks.push({...task})
        },
        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter((task) => task.taskId !== taskId)
        },
        updateTask(state, taskUpdate) {
            state.tasks = state.tasks.map((task) => {
                return task.taskId == taskUpdate.taskId ? {...taskUpdate} : task
            })
        }
    },
    actions: {

    },
    modules: {

    }
})