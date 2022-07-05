import { expect } from "@jest/globals";
import Task from "../../Task.js";
// import TaskList from "../../TaskList.js";

test('can create a Task', () => {
  let task = new Task('test');
  expect(task.label).toBe('test');
  task.rename('tata');
  expect(task.label).toBe('tata');
});

