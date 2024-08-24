"use client";
import { createContext, useContext, useMemo } from "react";

export const todoContext = createContext();

export const TodoState = ({
  children,
  TodoId
}) => {

  const contextValue = useMemo(() => ({

  }),
    [
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