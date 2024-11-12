function TodoItem(props) {
	const { text, completed, onComplete, onDelete } = props;
	return (
		<li className="flex items-center content-center justify-between w-2/4 h-12 px-1 border-2 border-black border-solid">
			<span className="cursor-pointer " onClick={onComplete}>
				✅
			</span>
			<p className={`${completed && 'line-through'}`}>{text}</p>
			<span className="cursor-pointer" onClick={onDelete}>
				❌
			</span>
		</li>
	);
}

export { TodoItem };
