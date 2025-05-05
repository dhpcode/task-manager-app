const appName = 'Task Manager';

function showWelcomeMessage() {
    alert(`Welcome to ${appName}. Manage your tasks efficiently!`)
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
                alert('Add task');
                break;
            case "2":
                alert("View task");
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