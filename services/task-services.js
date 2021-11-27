export default class ListTaskService {
    getListTaskApi() {
        return axios({
            url: "https://6188d850d0821900178d756d.mockapi.io/Task",
            method: "GET",
        });
    }
    deleteTaskApi(id) {
        return axios({
          url: `https://6188d850d0821900178d756d.mockapi.io/Task/${id}`,
          method: "DELETE",
        });
      }
    
      addTaskApi(task) {
        return axios({
          url: "https://6188d850d0821900178d756d.mockapi.io/Task",
          method: "POST",
          data: task,
        });
      }
    
      getTaskById(id) {
        return axios({
          url: `https://6188d850d0821900178d756d.mockapi.io/Task/${id}`,
          method: "GET",
        });
      }
    
      updateTaskApi(task) {
        return axios({
          url: `https://6188d850d0821900178d756d.mockapi.io/Task/${task.id}`,
          method: "PUT",
          data: task,
        });
      }
}