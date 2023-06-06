import styles from  './App.Module.css'
// export function Tweet() {
// export default funcion Tweet() {}

function Tweet(props) {
  return (
    <div className={styles.container}>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}

// DEFAULT EXPORT
//export default Tweet

// NAMED EXPORT
export { Tweet };
