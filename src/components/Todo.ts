import {type Component, tags} from '@tentjs/tent'
import {Input} from '@tentjs/ui'
import * as styles from './todo.module.css'

const {div, ul, li} = tags;

type Todo = {
  title: string
  done: boolean
}

type State = {
  newTodoTitle: ''
  todos: Todo[]
}

const todos = [
  {title: 'Todo #1', done: false},
  {title: 'Todo #2', done: false},
  {title: 'Todo #3', done: false},
]

const TodoList: Component<State> = {
  state: {newTodoTitle: '', todos},
  view: ({state}) => div([
    Input('text', {
      placeholder: 'What is up?',
      oninput: (ev) => state.newTodoTitle = ev.target.value,
      onkeydown: (ev) => {
        if (ev.key === 'Enter') {
          state.todos = [...state.todos, {title: state.newTodoTitle, done: false}]
          state.newTodoTitle = ''
          ev.target.value = ''
        }
      },
    }),
    ul(
      state.todos.map(
        todo => li(todo.title, {
          onclick: () => todo.done = !todo.done,
          className: `${todo.done ? styles.done : ''}`,
        })
      )
    )
  ], {className: styles.todoList})
}

export {TodoList}
