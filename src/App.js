import './app.css'
import styled from '@emotion/styled'
import Lists from './components/Lists'
import backgroundImg from './img/imgFondo.jpg'
import AddCardOrList from './components/AddCardOrList'
import mockData from './mockData.js'
import { useState } from 'react'
import ContextApi from './ContextApi'

function App() {
  const [data, setData] = useState(mockData)

  const updatedTitle = (newTitle, listId) => {
    const list = data.lists[listId]
    list.title = newTitle
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    })
  }

  const addCard = (title, listId) => {
    const newCard = {
      id: +new Date(),
      title
    }
    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    })
  }
  const addList = (title) => {
    const newListId = +new Date()
    setData({
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: {
          id: newListId,
          title,
          cards: []
        }
      }
    })
  }

  return (
    <ContextApi.Provider value={{ updatedTitle, addCard, addList }}>
      <Root>
        <ListsContainer>
          {data.listIds.map((listId) => {
            const list = data.lists[listId]
            return (
              <Lists
                list={list}
                key={listId}
              />
            )
          })}
          <div>
            <AddCardOrList type="list" />
          </div>
        </ListsContainer>
      </Root>
    </ContextApi.Provider>
  )
}
const Root = styled.div`
  height: 100vh;
  overflow-y: auto;
  margin: 0 1rem 0 0;
  background-image: url(${backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const ListsContainer = styled.div`
  display: flex;
`
export default App
