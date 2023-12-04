/**
 * @param {number[number[]]} tasks - array of tasks. Each task have format [duration, value]
 * @returns {number[number[]]} tasks - Each task have format [duration, value, task number]
 */
const addTaskNumberToEachTask = (tasks) => {
  return tasks.map((item, index) => [...item, index + 1]);
};

/**
 * @param {number} interval - - Time period for completing tasks
 * @param {number[number[]]} tasks - Each task have format [duration, value, task number]
 * @returns {object} {
 *  {number} maxiValue  - Sum of task values in interval;
 *  {number[]} scheduledTasks - Task numbers in interval
 * }
 */
function getTasksInIntervalWithMaxValue(interval, tasks) {
  let maxiValue = 0;
  let tasksWithinInterval = [];

  for (let task of tasks) {
    const { duration: overallDuration, interval: overallValue } = task.reduce(
      (accum, curr) => {
        accum.duration += curr[0];
        accum.interval += curr[1];
        return accum;
      },
      {
        duration: 0,
        interval: 0,
      }
    );

    if (overallDuration <= interval && maxiValue < overallValue) {
      maxiValue = overallValue;
      tasksWithinInterval = task.map((item) => item[2]);
    }
  }

  return {
    maxiValue,
    scheduledTasks: tasksWithinInterval,
  };
}

module.exports = { addTaskNumberToEachTask, getTasksInIntervalWithMaxValue };
