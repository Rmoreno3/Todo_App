function TodoItem({ text, completed }) {
  return (
    <li>
      <p>{text}</p>
      {completed ? <span>✅</span> : <span>❌</span>}
    </li>
  );
}

export { TodoItem };