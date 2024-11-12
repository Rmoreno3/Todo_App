import { BsX } from 'react-icons/bs';

function DeleteIcon(props) {
	const { onDelete } = props;
	return (
		<BsX
			onClick={onDelete}
			className="cursor-pointer size-8 hover:text-red-500 hover:transition-all hover:ease-in-out hover:delay-150 hover:duration-300 hover:scale-150 "
		/>
	);
}

export { DeleteIcon };
