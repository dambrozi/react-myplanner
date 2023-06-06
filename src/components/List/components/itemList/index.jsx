import { useAppContext } from "../../../../hooks/useAppContext";
import styles from "./itemList.module.css";
import { api } from "../../../../services/api";

export function ItemList({ name, id }) {

  const { setTasks } = useAppContext();

  async function handleRemove() {
    // alert(`Ação para remover o item ${props.name}`);
    if (confirm (`Remover o item ${name}`)) {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks => tasks.filter(task => task.id !== id));
    }
    
  }

  return (
    <li className={styles.container}>
      <strong>{name}</strong>
      <button onClick={handleRemove}>-</button>
    </li>
  );
}
