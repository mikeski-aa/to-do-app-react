function getPlusXdays(input) {
  let date1 = new Date();
  date1.setDate(date1.getDate() + input);

  return date1.toISOString().split("T")[0];
}

// this function is there to set placeholder values without clogging up App.jsx

function getPlaceholderTaskState() {
  const placeHolderTaskArray = [
    {
      taskId: "15351355",
      taskName: "Buy new car",
      taskDesc: "Look through facebook marketplace",
      taskDate: "2024-01-01",
      taskPrio: "1",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "153513535",
      taskName: "Example overdue task",
      taskDesc: "I was meant to do this at the start of the year!",
      taskDate: "2024-01-01",
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "15351355433",
      taskName: "Another overdue task",
      taskDesc: "This one is from two years ago!",
      taskDate: "2022-12-13",
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "15351355416",
      taskName: "Today task number one",
      taskDesc: "Buy groceries",
      taskDate: getPlusXdays(0),
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "15351355412",
      taskName: "Today Task number two",
      taskDesc: "Clean the house",
      taskDate: getPlusXdays(0),
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "1535135541222",
      taskName: "Upcoming + 5 days",
      taskDesc: "This task is coming up in the next 5 days!",
      taskDate: getPlusXdays(5),
      taskPrio: "1",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "1535135541233",
      taskName: "Upcoming + 3 days",
      taskDesc: "This task is coming up in the next 3 days!",
      taskDate: getPlusXdays(3),
      taskPrio: "2",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "1535135541233390",
      taskName: "Upcoming + 7 days",
      taskDesc: "This task is coming up in the next 7 days!",
      taskDate: getPlusXdays(7),
      taskPrio: "1",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
  ];
  return placeHolderTaskArray;
}

export { getPlaceholderTaskState };
