    const dateinput = document.getElementById("dateinput")
    const box = document.getElementById("box")
    const clearBtn = document.getElementById("clearBtn")
    const myinput = document.getElementById("myInput");
    const adderBtn = document.getElementById("adderBtn");
    const ul = document.getElementById("TaskList");
    const saverBtn = document.getElementById("saverBtn");
    let selectedDate = dateinput.value;

    function createTaskElement(text, hidden = false, dateText = "") {
      const saverBtn = document.getElementById("saverBtn");
      const ul = document.getElementById("TaskList");
      let li = document.createElement("li");
      let inputcreated = document.createElement("input");
      let btngroup = document.createElement("div");
      let editBtn = document.createElement("button");
      let deleteBtn = document.createElement("button");
      let dateSpan = document.createElement("span");

      const formattedDate = (dateText || selectedDate).replace(/-/g, "/");
      dateSpan.innerHTML = formattedDate;
      dateSpan.className = "task-date text-blue-500 text-sm px-2";

      li.className = "bg-gray-100 rounded-xl p-1 flex justify-between items-center shadow-md";
      btngroup.className = "flex items-center gap-2";

      inputcreated.disabled = true;
      inputcreated.className = "bg-transparent text-gray-800 px-3 py-1 text-lg w-full flex-grow focus:outline-none";
      inputcreated.value = text;

      editBtn.innerHTML = '✏️';
      editBtn.className = "editbtn hover:opacity-70 text-xl";
      if (hidden) editBtn.classList.add("hidden");

      editBtn.addEventListener("click", () => {
        saverBtn.disabled = false;
        saverBtn.classList.remove("opacity-50", "cursor-not-allowed");
        inputcreated.disabled = !inputcreated.disabled;
        inputcreated.focus();
        inputcreated.selectionStart = inputcreated.selectionEnd = inputcreated.value.length;

        if (editBtn.innerHTML === "✏️") {
          editBtn.innerHTML = "✅";
        } else if (editBtn.innerHTML === "✅") {
          editBtn.classList.add("hidden");
          saveNoteToLocalstorage();
        }
      });

      deleteBtn.innerHTML = '🗑️';
      deleteBtn.className = "deleteBtn hover:opacity-70 text-xl";
      deleteBtn.addEventListener("click", () => {
        li.remove();
        saveNoteToLocalstorage();
        checkifexist();
      });

      li.appendChild(inputcreated);
      li.appendChild(dateSpan);
      btngroup.appendChild(editBtn);
      btngroup.appendChild(deleteBtn);
      li.appendChild(btngroup);
      ul.appendChild(li);

      if (inputcreated.value === text) {
        myinput.value = '';
      }
      checkifexist();
    }

    myinput.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        const val = myinput.value.trim();
        if (val !== "") {
          if (dateinput.value === "") {
            alert("Please first set the date!");
          } else {
            selectedDate = dateinput.value;
            createTaskElement(val);
            saverBtn.disabled = false;
            saverBtn.classList.remove("opacity-50", "cursor-not-allowed");
          }
        }
      }
    });

    dateinput.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        const val = myinput.value.trim();
        if (val === "") {
          alert("Please write something first.");
        } else {
          selectedDate = dateinput.value;
          createTaskElement(val);
          saverBtn.disabled = false;
          saverBtn.classList.remove("opacity-50", "cursor-not-allowed");
          dateinput.value = "";
          myinput.value = "";
        }
      }
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saverBtn.click();
      }
    });

    adderBtn.addEventListener("click", () => {
      const val = myinput.value.trim();
      if (val == "") {
        alert("Please write something");
        saverBtn.disabled = true;
        saverBtn.classList.add("opacity-50", "cursor-not-allowed");
      } else {
        if (dateinput.value === "") {
          alert("Please first set the date!");
        } else {
          selectedDate = dateinput.value;
          createTaskElement(val);
          saverBtn.disabled = false;
          saverBtn.classList.remove("opacity-50", "cursor-not-allowed");
          dateinput.value = "";
        }
      }
    });

    function saveNoteToLocalstorage() {
      let tasksholder = [];
      document.querySelectorAll("li").forEach(li => {
        const input = li.querySelector("input");
        const editBtn = li.querySelector(".editbtn");
        const dateSpan = li.querySelector(".task-date");
        tasksholder.push({
          text: input.value.trim(),
          hidden: editBtn.classList.contains("hidden"),
          date: dateSpan ? dateSpan.innerHTML : ""
        });
      });
      localStorage.setItem("tasks", JSON.stringify(tasksholder));
    }

    function LoadNotefromlocalStorage() {
      let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      tasks.forEach(task => createTaskElement(task.text, task.hidden, task.date));
      checkifexist();
    }

    saverBtn.addEventListener("click", () => {
      if (ul.children.length == 0) {
        alert("No task to add");
      } else {
        saveNoteToLocalstorage();
        saverBtn.disabled = true;
        alert(`${ul.children.length} Task Saved Successfully!`);
        saverBtn.classList.add("opacity-50", "cursor-not-allowed");
      }
    });

    clearBtn.addEventListener("click", () => {
      localStorage.clear();
      location.reload();
    });

    function checkifexist() {
      if (ul.children.length == 0) {
        box.classList.remove("min-h-[34%]");
        box.classList.add("min-h-[23%]");
        saverBtn.classList.add("hidden");
        clearBtn.classList.add("hidden");
      } else {
        box.classList.add("min-h-[34%]");
        box.classList.remove("min-h-[23%]");
        saverBtn.classList.remove("hidden");
        clearBtn.classList.remove("hidden");
      }
    }

    dateinput.addEventListener("input", () => {
      selectedDate = dateinput.value;
    });

    LoadNotefromlocalStorage();