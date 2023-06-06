import { useAppContext } from "../../hooks/useAppContext";
import styles from "./List.module.css";
import { ItemList } from "./components/itemList";

export function List() {
  const { tasks, isLoading= true } = useAppContext();

  return (
    <ul className={styles.container}>
      {tasks.length === 0 && (
        <div className={styles.no_items}>
          {isLoading ? "Carregando..." : "Plan Vazia"}
        </div>
      )}
      {tasks.map((task) => (
        <ItemList key={task.id} name={task.name} id={task.id} />
      ))}
    </ul>
  );
}
