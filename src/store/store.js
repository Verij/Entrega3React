import {createStore} from "redux";
import reducer from "../reducers";

// const state = useSelector((state) => ({ ...state }))
// console.log("state", state)

const store = createStore(reducer);

store.subscribe(()=> console.log('Cambio el estado'));

export default store;