function TodoCounter({ total, completed }) {
  return (
    <h1 className="text-2xl align-center px-12 py-12">
      Haz completado {completed} de {total} TODO
    </h1>
  );
}

export { TodoCounter };