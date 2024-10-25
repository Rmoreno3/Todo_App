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
	return (
		<>
			<TodoCounter total={10} completed={8} />
			<TodoSearch />
			<TodoList>
				{defaultTodos.map(todo => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}
export default App;
