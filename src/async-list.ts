import {type Component, mount, tags} from '@tentjs/tent'

const {div, ul, li, button} = tags

type Item = {
  id: number
  title: string
}

type State = {
  list: Item[]
  page: number
}

const perPage = 5

const AsyncList: Component<State> = {
  state: {list: [], page: 1},
  view: ({state}) => div(
    state.list.length ? [
      ul(
        state.list
          .slice(0, state.page * perPage)
          .map(item => li(item.title))
      ),
      button(
        'Load more',
        {onclick: () => state.page++},
      )
    ] : []
  ),
  mounted: async ({state}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')

    state.list = await res.json()
  },
}

mount(
  document.querySelector('.recipe'),
  AsyncList
)
