import { createEvent, createStore } from "effector";
interface ITodo {
    name: string;
    checked: boolean;
    id: number;
}

export const addTodo = createEvent<ITodo>('add todo')
export const deleteTodo = createEvent<number>('delete todo')
export const toggleTodo = createEvent<number>('toggle todo')


export const $todos = createStore<ITodo[]>([])

$todos.on(addTodo,(state,payload)=>{
    return [...state,payload]
})
$todos.on(deleteTodo,(state,id)=>{
    return state.filter(t=>t.id !== id)
})
$todos.on(toggleTodo,(state,id)=>{    
    return state.map(t=>{
        if(t.id===id) {
            return {...t,checked:!t.checked}
        }
        return t
    })
})