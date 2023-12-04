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
  const tasksWithinInterval = getTasksInIntervalWithMaxValue(
    interval,
    allTasksCombination
  );
  return tasksWithinInterval;
};

function getAllTaskCombination(tasks) {
  const combinations = [];

  for (let mask = 0; mask < 2 ** tasks.length; mask++) {
    combinations.push([]);
    for (let i = 0; i < tasks.length; i++) {
      if (mask & (2 ** i)) {
        combinations[combinations.length - 1].push(tasks[i]);
      }
    }
  }

  return combinations;
}

module.exports = getMaxValueForInterval;
