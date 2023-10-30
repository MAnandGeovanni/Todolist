import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/reducers/todo-reducer';

function Todolist() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const { todos, isLoading, status } = useSelector((state) => state.todo);

  const filterTodos = todos.filter((item) => {
    if (status === 'all') {
      return true;
    } else return item.status === status;
  });

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-10">...loading</div>
      ) : (
        filterTodos.map((item) =>
          item.edit ? (
            <div key={item.id} className="flex mt-5 border-y align-middle border-black">
              <div className="flex w-3/4 justify-between">
                <input placeholder={item.name} value={input} onChange={(e) => setInput(e.target.value)} type="text" className="border rounded-sm px-2  w-[80%] mx-5" />
                <div className=" flex flex-wrap gap-1 justify-center mx-2 my-2">
                  <button
                    onClick={function () {
                      dispatch(editTodo(item.id, { name: input, edit: false }));
                      setInput('');
                    }}
                    className="border border-black rounded-sm bg-yellow-300 hover:bg-yellow-400 text-center p-1 mr-2 "
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div key={item.id} className="flex mt-5 border-y align-middle border-black">
              <div className="flex w-[80%] justify-between bg-amber-200">
                <form className=" justify-center inline-flex">
                  <input readOnly checked={item.status ? 'cheked' : ''} onClick={() => dispatch(editTodo(item.id, { status: !item.status }))} id={item.id} type="checkbox" className="mx-2" />
                  <label className={item.status ? 'self-center line-through' : 'self-center'} htmlFor={item.id}>
                    {item.name}
                  </label>
                </form>
                <div className=" flex flex-wrap gap-2 justify-center mr-2 my-2 w-[100px]">
                  <button onClick={() => dispatch(editTodo(item.id, { edit: true }))} className="border border-black rounded-md bg-amber-300 hover:bg-amber-400 text-center p-1 ">
                    Edit
                  </button>
                  <button onClick={() => dispatch(deleteTodo(item.id))} className="border border-black rounded-md bg-amber-300 hover:bg-amber-400 text-center p-1 ">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          )
        )
      )}
    </>
  );
}

export default Todolist;
