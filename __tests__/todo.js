let toDolst = require("../todo");

const { all, add, overdue, dueToday, dueLater, markAsComplete } = toDolst();

/* eslint-disable no-undef */

describe("To-do Test Suite", () => {
  beforeAll(() => {
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    add({
      title: "Finish course",
      completed: false,
      dueDate: new Date(today.getTime() + 10 * oneDay).toLocaleDateString(
        "en-CA"
      ),
    });

    add({
      title: "Finish Assignments",
      completed: false,
      dueDate: new Date(today.getTime() - 10 * oneDay).toLocaleDateString(
        "en-CA"
      ),
    });

    add({
      title: "Have Dinner",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"), //today
    });
  });

  test("New todo", () => {
    expect(all.length).toBe(3);

    add({
      title: "testing",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"), //today
    });
    expect(all.length).toBe(4);
    console.log(all);
  });

  test("Mark Complete", () => {
    expect(all[1].completed).toBe(false);
    markAsComplete(1);
    expect(all[1].completed).toBe(true);
  });

  test("overdue retrieve", () => {
    expect(overdue().length).toBe(1);
  });

  test("todaydue retrieve", () => {
    expect(dueToday().length).toBe(2);
  });

  test("dueLater retrieve", () => {
    expect(dueLater().length).toBe(1);
  });
});
