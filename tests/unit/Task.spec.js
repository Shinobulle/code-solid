import { expect } from "@jest/globals";
import Task from "../../Task.js";
import Collection from "../../Collection.js";

test('can create a Task', () => {
  let task = new Task('test');
  expect(task.label).toBe('test');
});

test('can markAsDone a Task', () => {
  let task = new Task('test');
  task.markAsDone();
  expect(task.done).toBe(true);
});

test('can rename a Task', () => {
  let task = new Task('test');
  task.rename('tata');
  expect(task.label).toBe('tata');
});

test('can setId a Task', () => {
  let task = new Task('test');
  task.setId(0);
  expect(task.id).toBe(0);
});

test('can getId a Task', () => {
  let task = new Task('test');
  expect(task.getId()).toBe(null);
});

test('can compare two Task', () => {
  let task = new Task('test');
  let task2 = new Task('test2');
  expect(task.compare(task2)).toEqual(-1);
});

test('can create a Collection', () => {
  let taskList = new Collection();
  expect(taskList.collection).toEqual([]);
});

test('can add a Task to a Collection', () => {
  let task = new Task('test');
  let taskList = new Collection();
  taskList.add(task);
  expect(taskList.collection).toEqual([task]);
});

test('can sort a Collection', () => {
  let task = new Task('test');
  let task2 = new Task('abcde');
  let taskList = new Collection();
  taskList.add(task);
  taskList.add(task2);
  taskList.sort();
  expect(taskList.collection).toEqual([task2, task]);
});

test('can remove a Task from a Collection', () => {
  let task = new Task('test');
  let task2 = new Task('abcde');
  let taskList = new Collection();
  taskList.add(task);
  taskList.add(task2);
  taskList.remove(task);
  expect(taskList.collection).toEqual([task2]);
});