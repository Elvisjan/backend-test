import { createEvent, createStore } from "effector";

export const addTodo = createEvent('add todo')
export const deleteTodo = createEvent('delete todo')
export const toggleTodo = createEvent('toggle todo')

interface ITodo {
    name: string;
    checked: boolean;
}
export const $todos = createStore<ITodo[]>([])