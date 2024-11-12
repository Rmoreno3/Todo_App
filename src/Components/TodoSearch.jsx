function TodoSearch({ searchValue, setSearchValue }) {
	const search = e => {
		const value = e.target.value;

		setSearchValue(value);
		console.log(value); // for testing purposes only, remove in production code!
	};

	return (
		<div>
			<input
				onChange={search}
				value={searchValue}
				className="border-solid border-2"
				placeholder="Cortar Cebolla"
			/>
		</div>
	);
}

export { TodoSearch };
