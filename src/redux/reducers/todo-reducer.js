import axios from 'axios';

const initialValue = {
  todos: [],
  isLoading: false,
  status: 'all',
};

function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        isLoading: true,
      };
    case 'BERHASIL':
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case 'DONE':
      return {
        ...state,
        isLoading: false,
        status: true,
      };
    case 'AKTIF':
      return {
        ...state,
        isLoading: false,
        status: false,
      };
    case 'ALL':
      return {
        ...state,
        isLoading: false,
        status: 'all',
      };
    default:
      return state;
  }
}

export function fetching() {
  return {
    type: 'FETCH',
  };
}
export function succes(data) {
  return {
    type: 'BERHASIL',
    payload: data,
  };
}
export function filterDone() {
  return {
    type: 'DONE',
  };
}
export function filterActive() {
  return {
    type: 'AKTIF',
  };
}
export function filterALl() {
  return {
    type: 'ALL',
  };
}

export function getTodo() {
  return async function (dispatch) {
    dispatch(fetching());

    const { data } = await axios('https://652a0f4f55b137ddc83f45fa.mockapi.io/Todolist');

    dispatch(succes(data));
  };
}
export function addTodo(input) {
  return async function (dispatch) {
    dispatch(fetching());

    await axios.post('https://652a0f4f55b137ddc83f45fa.mockapi.io/Todolist', input);

    dispatch(getTodo());
  };
}
export function deleteTodo(id) {
  return async function (dispatch) {
    dispatch(fetching());

    await axios.delete(`https://652a0f4f55b137ddc83f45fa.mockapi.io/Todolist/${id}`);

    dispatch(getTodo());
  };
}
export function editTodo(id, input) {
  return async function (dispatch) {
    dispatch(fetching());

    await axios.put(`https://652a0f4f55b137ddc83f45fa.mockapi.io/Todolist/${id}`, input);

    dispatch(getTodo());
  };
}

export default todoReducer;
