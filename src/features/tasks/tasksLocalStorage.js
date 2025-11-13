const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => {
  try {
    const tasks = JSON.parse(localStorage.getItem(localStorageKey));

    return Array.isArray(tasks) ? tasks : [];
  } catch {
    return [];
  }
};
