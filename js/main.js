import ListTaskService from "../services/task-services.js";
import Task from "../js/task.js";
import Validation from "../js/Validation.js";

const listTaskService = new ListTaskService();
const getEle = (id) => document.getElementById(id);
const validation = new Validation();

const fetchData = () => {
  listTaskService
    .getListTaskApi()
    .then((result) => {
      renderListData(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchData();


const renderListData = (arrData) => {
  let contentTodo = "";
  let contentComplete = "";
  arrData.forEach(task => {
    if (task.status === "todo"){
    contentTodo += `<li>${task.textTask}
    <button class = "remove" onclick = "deleteTask('${task.id}')">
           <i class = "fas fa-trash-alt"></i>
         </button>
         <button class = "complete" onclick = "checkStatus('${task.id}')">
            <i class = "${status === "todo" ? "far" : "fas"
           } fa-check-circle"></i>   
         </li>`
  }else{
    contentComplete += `<li>${task.textTask}
    <button class = "remove" onclick = "deleteTask('${task.id}')">
           <i class = "fas fa-trash-alt"></i>
    </button>
    <button class = "complete" onclick = "checkStatus('${task.id}')">
    <i class = "${status === "completed" ? "far" : "fas"
       } fa-check-circle"></i>
         </button></li>`
  }
});
  getEle("todo").innerHTML = contentTodo;
  getEle("completed").innerHTML = contentComplete;
}


   
    //   <li>
    //     <span>${task.textTask}</span>
    //     <div class ="buttons>
    //     <button class = "remove" onclick = "deleteTask('${task.id}')">
    //       <i class = "fas fa-trash-alt"></i>
    //     </button>
    //     <button class = "complete" onclick = "checkStatus('${task.id}')">
    //       <i class = "${status === "todo" ? "far" : "fas"
    //   } fa-check-circle"></i>
    //     </button>
    //   </li>
    // ;
 
const checkStatus = (result, status) => {
  if(status  == "todo"){
    result.status == "completed";
  } else {
    result.status == "todo";
} 
  listTaskService
  .updateTaskApi(task)
  .then(()=>{
    fetchData();
    renderListData();
  })
  .catch((error)=>{
    console.log(error);
  });
};
// window.checkStatus = checkStatus;

// const checkStatus = async (id,event) => {
//   event.preventDefault();
//   const textTask = getEle("newTask");
// }
// const taskDetail = await listTaskService.getTaskById(task.id);
// if (!taskDetail.data.status){
//   task.status = taskDetail.data.status;
// }


// const result = await listTaskService.updateTaskApi(task);
// if (result.status == 200){
//   alert("Update Success!");
//   fetchData();
// };
// window.checkStatus = checkStatus;


const renderStatus = (result, status, message) => {
  if (result.data == status) {
    alert(`${message} Successfully`);
  } else {
    alert("Fail");
    return false;
  }
}
window.renderStatus = renderStatus;


const deleteTask = (id) => {
  listTaskService
    .deleteTaskApi(id)
    .then(() => {
      alert("delete success!");
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
};
window.deleteTask = deleteTask;


// Add Task
const addTask = (event) => {
  event.preventDefault();
  const textTask = getEle("newTask").value;
  const task = new Task(
    textTask,
    id,
    status,
  );

  listTaskService
    .addTaskApi(task)
    .then(() => {
      alert("Add success!");
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
}
window.addTask = addTask;


// getEle("addItem").addEventListener("click", async () => {
//     const textTask = getEle("newTask").value;
//     let isValid = true;
//     isValid &= validation.checkEmpty(textTask,"spanTask","Task is empty");
//     if (isValid){
//       const task = new Task("", textTask, "todo");
//       const result = await listTaskService.addTaskApi(task);
//       const success = renderStatus(result,201, `Add`);
//       if (success) contentTodo.push(result.data);
//       renderListData(arrData, "todo");
//       getEle("newTask").value = "";
//     }
// });

// Sorry mentor nh??ng m??nh ch??? l??m ???????c ?????n ????y th??i, mentor c?? th??? layout v???n t???t nh???ng l???i sai c?? b???n c???a b??i n??y ???????c kh??ng, n???u mentor kh??ng c?? th???i gian th?? mentor c?? th??? g???i m??nh link git b??i c???a 1 b???n ??i???m cao m?? code c?? b???n ????? m??nh tham kh???o v?? l??m l???i b??i nh??. Mentor c??? ch???m b??i n??y bao nhi??u c??ng ???????c. C???m ??n mentor nhi???u.
