function TodoItem({ text, completed }) {
	return (
		<li className="flex items-center content-center justify-between border-solid border-2 border-black w-2/4 h-12 px-1">
			<span className="cursor-pointer">✅</span>
			<p className={`${completed && 'line-through'}`}>{text}</p>
			<span className="cursor-pointer">❌</span>
		</li>
	);
}

export { TodoItem };
