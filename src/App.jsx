import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './App.css';

const defaultTodos = [
	{ text: 'Cortar cebolla', completed: false },
	{ text: 'Cortar tomate', completed: true },
	{ text: 'Cortar zanahoria', completed: false },
	{ text: 'Cortar papa', completed: true },
];
function App() {
	const [todos, setTodos] = useState(defaultTodos);
	const [searchValue, setSearchValue] = useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	const completeTodo = text => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(todo => todo.text === text);

		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		console.log(newTodos);
		setTodos(newTodos);
	};

	const deleteTodo = text => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(todo => todo.text === text);
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
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
