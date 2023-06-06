import { CreateTask } from "../../components/CreateTask";
import { List } from "../../components/List";
import sytles from "./Home.module.css";
import { useState } from "react";

export function Home() {
  /*const [tasks, setTasks] = useState([
    {
        id: 1,
        name: "Atualizar Contas"
    },
    {
        id: 2,
        name: "Ir ao Pilates"
    },
    {
        id: 3,
        name: "English Class"
    },
    {
        id: 4,
        name: "Estudar Kotlin"
    },
    {
        id: 5,
        name: "Estudar Web"
    },
  ]);

  return (
    <>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks}/>
    </>
  ;*/
  
   return (
    <>
      <CreateTask />
      <List />
    </>
  );
}
