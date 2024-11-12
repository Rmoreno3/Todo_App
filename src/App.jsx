import { useState } from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';
import './App.css';

const exampleTodos = [
	{ text: 'Cortar cebolla', completed: false },
	{ text: 'Cortar tomate', completed: true },
];
function App() {
	const localeStorageTodos = JSON.parse(localStorage.getItem('TODOS_V1'));

	let parsedTodos;
	if (!localeStorageTodos) {
		localStorage.setItem('TODOS_V1', JSON.stringify([]));
		parsedTodos = [];
	} else {
		parsedTodos = localeStorageTodos;
	}

	const [todos, setTodos] = useState(parsedTodos);
	const [searchValue, setSearchValue] = useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	// Actualizamos el localStorage y actualizamos el state
	const savedTodos = newTodos => {
		localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
		setTodos(newTodos);
	};

	const completeTodo = text => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(todo => todo.text === text);

		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

		savedTodos(newTodos);
	};

	const deleteTodo = text => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(todo => todo.text === text);
		newTodos.splice(todoIndex, 1);
		savedTodos(newTodos);
	};

	const searchTodos = todos.filter(todo => {
		const todoText = todo.text.toLowerCase();
		const searchValueText = searchValue.toLowerCase();
		return todoText.includes(searchValueText);
	});

	return (
		<>
			<TodoCounter total={totalTodos} completed={completedTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
				{searchTodos.map(todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}
export default App;
