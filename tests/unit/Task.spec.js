import { expect } from "@jest/globals";
import Task from "../../Task.js";
import TaskList from "../../TaskList.js";

test('can create a Task', () => {
  let task = new Task('test');
  let task2 = new Task('animal');
  expect(task.label).toBe('test');
  task.rename('tata');
  expect(task.label).toBe('tata');
  let taskList = new TaskList();
  taskList.addTask(task);
  expect(taskList.list).toContain(task);
  taskList.addTask(task2);
  taskList.reorderTask();
  expect(taskList.list).toEqual([task2,task]);
  taskList.removeTask(task);
  expect(taskList.list).toEqual([task2]);
});

