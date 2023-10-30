import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterALl, filterActive, filterDone, getTodo } from '../redux/reducers/todo-reducer';

function FilterTodo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div className="flex gap-5 mt-3">
      <button onClick={() => dispatch(filterALl())} className="border border-black rounded-lg bg-yellow-300 hover:bg-yellow-400 p-3">
        ALL
      </button>
      <button onClick={() => dispatch(filterActive())} className="border border-black rounded-lg bg-yellow-300 hover:bg-yellow-400 p-3">
        Belum selesai
      </button>
      <button onClick={() => dispatch(filterDone())} className="border border-black rounded-lg bg-yellow-300 hover:bg-yellow-400 p-3">
        Selesai
      </button>
    </div>
  );
}

export default FilterTodo;
