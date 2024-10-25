function CreateTodoButton() {
	const alert = () => {
		console.log('le diste click al boton');
	};
	return (
		<button
			onClick={alert}
			className="bg-green-500 w-16 h-16 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-800 duration-300"
		>
			+
		</button>
	);
}

export { CreateTodoButton };
