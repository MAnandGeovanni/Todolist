import FilterTodo from '../component/filter-todo';
import Todolist from '../component/todo-list';
import TodoInput from '../component/todo-input';
function Todo() {
  return (
    <div className="p-3 ml-24">
      <TodoInput />
      <FilterTodo />
      <Todolist />
    </div>
  );
}

export default Todo;
