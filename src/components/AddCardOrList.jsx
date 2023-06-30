import { Collapse, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddTextCardOrList from './AddTextCardOrList'
import styled from '@emotion/styled'

const AddCardOrList = ({ type, list }) => {
  const [open, setOpen] = useState(false)
  return (
    <Root>
      <Collapse in={open}>
        <AddTextCardOrList
          type={type}
          setOpen={setOpen}
          listId={list}
        />
      </Collapse>
      <Collapse in={!open}>
        <CustomPaper onClick={() => setOpen(true)}>
          <Typography>{type === 'card' ? '+ Add a card' : '+ Add a list'}</Typography>
        </CustomPaper>
      </Collapse>
    </Root>
  )
}

const Root = styled.div`
  width: 300px;
  margin-top: 0.98rem;
`
const CustomPaper = styled(Paper)`
  padding: 1rem 1rem 1rem 2rem;
  margin: 0 0.7rem 0.7rem 0.7rem;
  background-color: #ebecf0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`
export default AddCardOrList
