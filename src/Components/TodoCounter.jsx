function TodoCounter(props) {
	const { total, completed } = props;
	return (
		<h1 className="px-12 py-12 text-2xl align-center">
			{total === completed
				? 'Todos los TODO han sido completados'
				: `Haz completado ${completed} de ${total} TODO`}
		</h1>
	);
}

export { TodoCounter };
