const getMaxValueForInterval = require("./brute.js");

describe("test user input", () => {
  test("expect maxiValue = 0 and scheduledTasks = [] when interval is 0 hours", () => {
    const initialInterval = 0;
    const allTasks = [
      [6, 2],
      [8, 3],
      [5, 6],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 0, scheduledTasks: [] });
  });
  test("expect maxiValue = 0 and scheduledTasks = [] when allTasks array in empty", () => {
    const initialInterval = 0;
    const allTasks = [];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 0, scheduledTasks: [] });
  });
  test("expect maxiValue = 0 and scheduledTasks = [] when allTasks argument is not specified", () => {
    const initialInterval = 0;
    const answer = getMaxValueForInterval(initialInterval);
    expect(answer).toEqual({ maxiValue: 0, scheduledTasks: [] });
  });
  test("expect maxiValue = 0 and scheduledTasks = [] when all arguments are not specified", () => {
    const answer = getMaxValueForInterval();
    expect(answer).toEqual({ maxiValue: 0, scheduledTasks: [] });
  });
});

describe("basic test cases", () => {
  test("expect maxiValue = 5 and scheduledTasks = [2, 3] when interval = 7 and tasks = [[1,1], [3,2], [4,3]]", () => {
    const initialInterval = 7;
    const allTasks = [
      [1, 1],
      [3, 2],
      [4, 3],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 5, scheduledTasks: [2, 3] });
  });
  test("expect maxiValue = 7 and scheduledTasks = [2, 3] when interval = 5 and tasks = [[1,1], [2,3], [3,4]]", () => {
    const initialInterval = 5;
    const allTasks = [
      [1, 1],
      [2, 3],
      [3, 4],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 7, scheduledTasks: [2, 3] });
  });
});

describe("test function's logic", () => {
  test("must select a task with a duration shorter than the interval", () => {
    const initialInterval = 5;
    const allTasks = [
      [2, 1],
      [4, 5],
      [3, 2],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 5, scheduledTasks: [2] });
  });

  test("must must select all available values in the specified interval", () => {
    const initialInterval = 5;
    const allTasks = [
      [1, 1],
      [5, 10],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 2],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 12, scheduledTasks: [1, 3, 4, 5, 6] });
  });

  test("expect maxiValue=0 and scheduledTasks=[] if no task is within the interval", () => {
    const initialInterval = 4;
    const allTasks = [
      [6, 2],
      [8, 3],
      [5, 6],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 0, scheduledTasks: [] });
  });
});

describe("test function on predetermined cases", () => {
  test("expect: { maxiValue: 16, scheduledTasks: [4, 6] } ", () => {
    const initialInterval = 10;
    const allTasks = [
      [9, 6],
      [10, 7],
      [10, 6],
      [4, 8],
      [2, 5],
      [6, 8],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 16, scheduledTasks: [4, 6] });
  });

  test("expect: { maxiValue: 17, scheduledTasks: [2, 4] } ", () => {
    const initialInterval = 6;
    const allTasks = [
      [9, 3],
      [1, 8],
      [9, 8],
      [3, 9],
      [9, 1],
      [10, 10],
      [7, 9],
      [8, 5],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 17, scheduledTasks: [2, 4] });
  });

  test("expect: { maxiValue: 23, scheduledTasks: [6, 7, 8] } ", () => {
    const initialInterval = 5;
    const allTasks = [
      [7, 8],
      [9, 7],
      [5, 5],
      [8, 9],
      [6, 10],
      [3, 6],
      [1, 10],
      [1, 7],
      [9, 8],
      [6, 2],
    ];
    const answer = getMaxValueForInterval(initialInterval, allTasks);
    expect(answer).toEqual({ maxiValue: 23, scheduledTasks: [6, 7, 8] });
  });
});
