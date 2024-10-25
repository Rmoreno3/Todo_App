function TodoList({ children }) {
	return (
		<ul className="flex flex-col justify-center align-center items-center gap-4 py-10 w-6/12">
			{children}
		</ul>
	);
}

export { TodoList };
