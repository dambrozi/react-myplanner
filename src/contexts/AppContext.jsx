import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [tasks, setTasks] = useState([
    /*{
      id: 1,
      name: "Atualizar Contas",
    },
    {
      id: 2,
      name: "Ir ao Pilates",
    },
    {
      id: 3,
      name: "English Class",
    },
    {
      id: 4,
      name: "Estudar Kotlin",
    },
    {
      id: 5,
      name: "Estudar Web",
    },*/
  ]);

 useEffect(() => {
    api.get("/tasks").then(response => setTasks(response.data))
  }, []);

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
