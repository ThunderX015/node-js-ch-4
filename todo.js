const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      function (val) {
        return val.dueDate < new Date().toLocaleDateString("en-CA");
      } //expired
    );
  };

  const dueToday = () => {
    return all.filter(function (val) {
      return val.dueDate === new Date().toLocaleDateString("en-CA"); //today expiry
    });
  };

  const dueLater = () => {
    return all.filter(function (val) {
      return val.dueDate > new Date().toLocaleDateString("en-CA"); //expiry later
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map(function (val) {
        return `${
          val.completed ? "[x]" : "[ ]"
        } ${val.title} ${val.dueDate === new Date().toLocaleDateString("en-CA") ? "" : val.dueDate}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
