import { BsCheck } from 'react-icons/bs';

function CompleteIcon(props) {
	const { onComplete, completed } = props;
	return (
		<BsCheck
			onClick={onComplete}
			className={`size-8 hover:transition-all hover:ease-in-out hover:delay-150 hover:duration-300 hover:scale-150  ${
				completed
					? 'cursor-pointer text-green-500'
					: 'cursor-pointer text-gray-500'
			}`}
		/>
	);
}

export { CompleteIcon };
