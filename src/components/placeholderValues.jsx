// this function is there to set placeholder values without clogging up App.jsx

function getPlaceholderTaskState() {
  let todayDate = new Date();
  todayDate = todayDate.toISOString().split("T")[0];
  const placeHolderTaskArray = [
    {
      taskId: "15351355",
      taskName: "Placeholder Name",
      taskDesc: "Placeholder Desc",
      taskDate: "2024-01-01",
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "153513535",
      taskName: "Overdue task",
      taskDesc: "Placeholder Desc",
      taskDate: "2024-01-01",
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "15351355433",
      taskName: "Another overdue task",
      taskDesc: "Placeholder Desc",
      taskDate: "2022-12-13",
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "15351355416",
      taskName: "Today task",
      taskDesc: "Placeholder Desc",
      taskDate: todayDate,
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "15351355412",
      taskName: "Today Task",
      taskDesc: "Placeholder Desc",
      taskDate: todayDate,
      taskPrio: "3",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "1535135541222",
      taskName: "Upcoming + 5",
      taskDesc: "Placeholder Desc",
      taskDate: "2024-06-10",
      taskPrio: "1",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "1535135541233",
      taskName: "Upcoming + 4",
      taskDesc: "Placeholder Desc",
      taskDate: "2024-06-09",
      taskPrio: "2",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
    {
      taskId: "1535135541233390",
      taskName: "Upcoming + 7",
      taskDesc: "Placeholder Desc",
      taskDate: "2024-06-12",
      taskPrio: "1",
      taskCompleted: false,
      taskBelongTo: "jhasd7861j",
      taskDetailShow: false,
    },
  ];
  return placeHolderTaskArray;
}

export { getPlaceholderTaskState };
