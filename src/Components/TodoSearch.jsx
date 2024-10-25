function TodoSearch() {
	const search = e => {
		let letters = e.target.value;

		console.log(letters);
	};

	return (
		<div>
			<input
				onChange={search}
				className="border-solid border-2"
				placeholder="Cortar Cebolla"
			/>
		</div>
	);
}

export { TodoSearch };
