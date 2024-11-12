import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
	const { text, completed, onComplete, onDelete } = props;
	return (
		<li className="flex items-center content-center justify-between w-2/4 h-12 px-1 border-2 border-black border-solid">
			<CompleteIcon onComplete={onComplete} completed={completed} />

			<p className={`${completed && 'line-through'}`}>{text}</p>
			<DeleteIcon onDelete={onDelete} />
		</li>
	);
}

export { TodoItem };
