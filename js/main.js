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

const toggleTask = () => {
    const taskId = parseInt(prompt(`Enter task id to toggle completion: `));
    const task = tasks.find(task => task.id === taskId);

    if (task) {
        task.completed = !task.completed;
        alert(`Task ${task.title} is ${task.completed ? "completed" : "incompleted"}`)
    } else {
        alert(`Invalid task id`)
    }
}

const removeTask = () => {
    const taskId = parseInt(prompt(`Enter task id to remove: `));
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        const removedTask = tasks.splice(taskIndex, 1)[0];
        alert(`Task ${removedTask.title} removed successfully!`);
    } else {
        alert('Invalid taskId!')
    }
}


const displaySummary = () => {
    const completedTasksCount = tasks.filter(task => task.completed).length;
    const incompletedTaskCount = tasks.length - completedTasksCount;
    alert(`
        Summary:
        Total tasks: ${tasks.length}
        Completed tasks: ${completedTasksCount}
        Incompleted tasks: ${incompletedTaskCount}    
    `)
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
                toggleTask();
                break;
            case "4":
                removeTask();
                break;
            case "5":
                displaySummary();
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