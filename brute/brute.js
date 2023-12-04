const { addTaskNumberToEachTask } = require("../utils/functions.js");

/**
 * @param {number} interval - Time period for completing tasks
 * @param {number[number[]]} tasks - Array of tasks. Each task have format [duration, value]
 * @returns {object} {
 *  {number} maxiValue  - Sum of task values in interval;
 *  {number[]} scheduledTasks - Task numbers in interval
 * }
 */

const getMaxValueForInterval = (interval, tasks) => {
  if (!interval || !tasks) {
    return { maxiValue: 0, scheduledTasks: [] };
  }

  tasks = addTaskNumberToEachTask(tasks);

  let maxiValue = 0;
  let scheduledTasks = [];

  let currInterval = interval;
  let currMaxi = 0;
  let currTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    currInterval -= tasks[i][0];
    currMaxi += tasks[i][1];
    currTasks.push(tasks[i][2]);

    if (currInterval > 0) {
      for (let k = i + 1; k < tasks.length; k++) {
        currInterval -= tasks[k][0];
        currMaxi += tasks[k][1];
        currTasks.push(tasks[k][2]);

        if (currInterval > 0) {
          for (let n = k + 1; n < tasks.length; n++) {
            currInterval -= tasks[n][0];
            currMaxi += tasks[n][1];
            currTasks.push(tasks[n][2]);
            updateMaxiValueAndScheduledTasksIfNeed();

            if (currInterval <= 0) {
              currInterval = interval - tasks[i][0] - tasks[k][0];
              currMaxi = tasks[i][1] + tasks[k][1];
              currTasks = [tasks[1][2], tasks[k][2]];
            }
          }
        }

        updateMaxiValueAndScheduledTasksIfNeed();
        currInterval = interval - tasks[i][0];
        currMaxi = tasks[i][1];
        currTasks = [tasks[i][2]];
      }
    }
    updateMaxiValueAndScheduledTasksIfNeed();
    currInterval = interval;
    currMaxi = 0;
    currTasks = [];
  }

  function updateMaxiValueAndScheduledTasksIfNeed() {
    if (currInterval >= 0 && maxiValue < currMaxi) {
      maxiValue = currMaxi;
      scheduledTasks = [...currTasks];
    }
  }

  return {
    maxiValue,
    scheduledTasks,
  };
};

module.exports = getMaxValueForInterval;
