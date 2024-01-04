import {type Component, mount, tags} from '@tentjs/tent'
import {TodoList} from './components/Todo'

const {div, button} = tags

type State = {
  count: number
}

const Counter: Component<State> = {
  state: {count: 0},
  view: ({state}) => div([
    button('+', {onclick: () => state.count++}),
    div(state.count),
    button('-', {onclick: () => state.count--}),
  ])
}

mount(document.getElementById('counter'), Counter)

const GetStarted = {
  view: () => button(
    'Get Started',
    {onclick, class: 'cta'},
  ),
}

function onclick() {
  window.location.href = 'https://github.com/tentjs/tent';
}

mount(
  document.getElementById('get-started'),
  GetStarted,
);

mount(
  document.getElementById('todo'),
  TodoList,
)
