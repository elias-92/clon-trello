import { CssBaseline, Paper } from '@mui/material'
import ListTitle from './ListTitle'
import Card from './Card'
import AddCardOrList from './AddCardOrList'
import styled from '@emotion/styled'

const Lists = ({ list }) => {
  return (
    <Root>
      <CssBaseline />
      <ListTitle
        title={list.title}
        listId={list.id}
      />
      {list.cards.map((card) => (
        <Card
          card={card}
          key={card.id}
        />
      ))}
      <AddCardOrList
        type="card"
        cards={list.cards}
        list={list.id}
      />
    </Root>
  )
}

// styles

const Root = styled(Paper)`
  width: 300px;
  margin: 1rem;
  background-color: #ebecf0;
`
export default Lists
