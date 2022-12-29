// connected the databse to the controller
const Task =require('../models/todo');
// made the function name home for homepage 
module.exports.home=function(req,res)
{
    // to fetch the home page 
    Task.find({}, function(err, tasks) {
        if(err) {
            console.log(`Error in fetching the tasks from db: ${err}`);
            return;
        }
        return res.render('home', {
            title: "ToDo App",
            todo_list: tasks
        });
    })
};
// array of month names 
const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"
];

function formatDate(dueDate) {
    if(dueDate.length == 0) {
        return "NO DEADLINE";
    }

    const date = new Date(dueDate);
    return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

// controller to add the task
module.exports.addTask = function(req, res) {
    // console.log(req.body);
    Task.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: formatDate(req.body.dueDate)
    }, function(err, newTask) {
        if(err) {
            console.log(`Error in adding a new task: ${err}`);
            return;
        }
        console.log(newTask);
        return res.redirect('back');
    })
}
// controller to delete the task
function deleteOne(task) {
    Task.findByIdAndDelete(task, function(err) {
        if(err) {
            console.log(`Error in deleting an object from db: ${err}`);
            return;
        }
    })
}


function deleteTasks(tasks) {
    if(typeof tasks == 'string') {
        deleteOne(tasks);
    }
    else {
        for(let task of tasks) {
            deleteOne(task);
        }
    }
}

module.exports.deleteTask = async function(req, res) {
    var obj = req.body;
    console.log(req.body);

    if(obj && Object.keys(obj).length == 0
        && Object.getPrototypeOf(obj) === Object.prototype)
        return res.redirect('back');

    var result = await deleteTasks(req.body.tasks);

    return res.redirect('back');
}