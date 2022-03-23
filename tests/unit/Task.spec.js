import Task from "../../Task.js";

test('can create a Task', () => {
  let task = new Task('test');
  expect(task.label).toBe('test');
});