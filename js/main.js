const appName = 'Task Manager';
const tasks = [];
function showWelcomeMessage() {
    alert(`Welcome to ${appName}. Manage your tasks efficiently!`)
}

const addTask = () => {
    const taskTitle = prompt('Please, enter a task title: ')
    if (taskTitle) {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            completed: false
        }
        tasks.push(newTask);
        alert(`Task ${taskTitle} added successfully`);
    }
    else {
        alert('Task title cannot be empty!');
    }
}

const viewTasks = () => {
    if (tasks.length === 0) {
        alert('No tasks available!')
    } else {
        let taskList = "Here are your tasks: ";
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            taskList += `
            Id: ${task.id},
            Title: ${task.title}, 
            Completed: ${task.completed ? "Yes" : "No"}
            `
        }
        alert(taskList);
        console.log(taskList);
    }
}


function showMainMenu() {
    let choice;
    do {
        choice = prompt(`
        Welcome to ${appName}!
        Choose a task: 
        1. Add task.
        2. View task.
        3. Toogle task.
        4. Remove task.
        5. Display summary.
        6. Exit.
        `);

        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                viewTasks();
                break;
            case "3":
                alert("Toggle task");
                break;
            case "4":
                alert("Remove task");
                break;
            case "5":
                alert("Display summary");
                break;
            case "6":
                alert(`Goodbye! Thanks for using ${appName}!`);
                break;
            default:
                alert("Invalid option");
        }
    } while (choice !== "6");
}

showWelcomeMessage();
showMainMenu();