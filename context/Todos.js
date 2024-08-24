"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useUserContext } from "./UserInfo";
import { getTaskInsideColl } from "@/utils/TaskHandling";

export const todoContext = createContext();

export const TodoState = ({
  children,
  TodoId
}) => {

  const { userInfo } = useUserContext()

  const [Tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const Tasks = await getTaskInsideColl(TodoId)
      setTasks(Tasks);
    }

    if (!userInfo?.loading && !userInfo?.uid) {
      fetchTasks()
    }
  }, [])

  const contextValue = useMemo(() => ({
    TodoId,
    Tasks,
    setTasks,
  }),
    [
      TodoId,
      Tasks,
      setTasks
    ]);

  return (
    <todoContext.Provider value={contextValue}>
      {children}
    </todoContext.Provider>
  );
};

export function useTodoContext() {
  return useContext(todoContext);
}