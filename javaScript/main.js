// function for change theme
function theme() {
  let imgTheme = document.querySelector(".header img");
  imgTheme.addEventListener("click", () => {
    //   light mode
    if (document.body.classList == "dark") {
      //icon img
      imgTheme.src = "./images/icon-moon.svg";
      // background img
      document.querySelector(".bg").src = "./images/bg-desktop-light.jpg";
      //color body
      document.body.classList = "light";
      // background input light
      document.querySelector(".write-todo").style.background =
        "hsl(0, 0%, 98%)";
      //input light
      document.querySelector(".write-todo input").style.color =
        "hsl(235, 19%, 35%)";
      document.querySelector(".write-todo input").style.background =
        "hsl(0, 0%, 98%)";
    } else {
      //   dark mode
      //icon img
      imgTheme.src = "./images/icon-sun.svg";
      // background img
      document.querySelector(".bg").src = "./images/bg-desktop-dark.jpg";
      //color body
      document.body.classList = "dark";
      // background input
      document.querySelector(".write-todo").style.background =
        "hsl(235, 21%, 11%)";
      //input
      document.querySelector(".write-todo input").style.background =
        "hsl(235, 21%, 11%)";
      document.querySelector(".write-todo input").style.color =
        "hsl(234, 39%, 85%)";
    }
  });
}
theme();

// function for create todo
numTodo = 0;
function todo() {
  let inputWriteTodo = document.querySelector(".write-todo input");
  let todoList = document.querySelector(".todo-list");
  document
    .querySelector(".write-todo #circle")
    .addEventListener("click", () => {
      // console.log(inputWriteTodo.value);
      if (inputWriteTodo.value != "") {
        numTodo++;
        let divTodo = document.createElement("div");
        divTodo.classList = "todo";
        divTodo.id = `todo${numTodo}`;
        divTodo.innerHTML += `          
        <div id="circle-todo"></div>
          <p>${inputWriteTodo.value}</p>
          <img src="./images/icon-cross.svg" class="cross" alt="" srcset="" />`;
        todoList.prepend(divTodo);
        // inputWriteTodo.value = "";
      }
    });
}
todo();

// function for cheak compleat

function cheak() {
  document.body.addEventListener("click", (e) => {
    let todo = document.querySelectorAll("#circle-todo").length;
    // change and count itimes
    document.querySelector("#status .itims").innerHTML = `${todo} items left`;
    let para = e.target.parentElement.children[1];
    if (e.target.id == "circle-todo") {
      if (e.target.parentElement.classList == "active") {
        e.target.style.backgroundImage = "";
        e.target.innerHTML = ``;
        e.target.parentElement.classList.remove("active");
        e.target.parentElement.children[1].innerHTML = `${para.children[0].innerHTML}`;
      } else {
        e.target.style.backgroundImage =
          "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
        e.target.innerHTML = `<img src="../images/icon-check.svg" class="cheak">`;
        e.target.parentElement.classList += "active";
        e.target.parentElement.children[1].innerHTML = `<del>${para.innerHTML}</del>`;
      }
    }
  });
}
cheak();

// function for sort
function filter() {
  let activ = document.querySelectorAll(".activity>div");
  let all = document.querySelector(".activity #all");
  let acti = document.querySelector(".activity #active");
  let comp = document.querySelector(".activity #compleated");
  console.log(activ);
  //for active class
  activ.forEach((e) => {
    e.addEventListener("click", () => {
      for (i = 0; i < activ.length; i++) {
        e.parentElement.children[i].classList = "";
      }
      e.classList = "active";
    });
  });
  comp.addEventListener("click", () => {
    let todo = document.querySelectorAll(".todo-list > div.active");
    let todoList = document.querySelector(".todo-list");
    // todoList.innerHTML = "";

    for (i = 0; i < todo.length; i++) {
      //   todoList.appendChild(todo[i]);
    }
  });
}
filter();
