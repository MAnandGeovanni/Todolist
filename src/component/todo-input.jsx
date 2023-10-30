import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/todo-reducer';
import { useState } from 'react';
function TodoInput() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  function handleClick(e) {
    e.preventDefault();
    const newTodo = {
      name: input,
      status: false,
    };
    dispatch(addTodo(newTodo));
    setInput('');
  }

  return (
    <form className=" flex justify-center w-[80%] gap-2">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border-solid border-black border-2 w-full rounded-md" />
      <button onClick={handleClick} className="border-solid border-black border-2 bg-amber-300 rounded-lg p-3">
        Add
      </button>
    </form>
  );
}

export default TodoInput;
