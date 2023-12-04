const {
  addTaskNumberToEachTask,
  getTasksInIntervalWithMaxValue,
} = require("../utils/functions.js");

const getMaxValueForInterval = (interval, tasks) => {
  if (!interval || !tasks) {
    return { maxiValue: 0, scheduledTasks: [] };
  }
  const tasksWithTaskNumber = addTaskNumberToEachTask(tasks);
  const allTasksCombination = getAllTaskCombination(tasksWithTaskNumber);
  console.log("allTasksCombination", allTasksCombination);
  const tasksWithinInterval = getTasksInIntervalWithMaxValue(
    interval,
    allTasksCombination
  );
  return tasksWithinInterval;
};

function getAllTaskCombination(tasks) {
  let combination = [];
  let tempArr = [];
  let i = 0;

  function recur(tasks, i, tempArr) {
    if (i == tasks.length) {
      combination.push(tempArr);
      return;
    }

    recur(tasks, i + 1, [...tempArr, tasks[i]]);
    recur(tasks, i + 1, tempArr);
  }

  recur(tasks, i, tempArr);
  return combination;
}

module.exports = getMaxValueForInterval;
