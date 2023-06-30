import styled from '@emotion/styled'
import { InputBase, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useContext, useState } from 'react'
import ContextApi from '../ContextApi'

const ListTitle = ({ title, listId }) => {
  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const { updatedTitle } = useContext(ContextApi)

  const hanldeBlur = () => {
    updatedTitle(newTitle, listId)
    setOpen(false)
  }
  return (
    <>
      {open ? (
        <InputBase
          inputComponent={CustomInputBase}
          autoFocus
          onBlur={hanldeBlur}
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value)
          }}
        />
      ) : (
        <TitleContainer>
          <CustomTypography
            variant="title"
            onClick={() => setOpen(true)}
          >
            {title}
          </CustomTypography>
          <MoreHorizIcon />
        </TitleContainer>
      )}
    </>
  )
}

// styles

const TitleContainer = styled.div`
  display: flex;
  margin: 1rem;
`
const CustomTypography = styled(Typography)`
  flex-grow: 1;
  font-size: 1rem;
  font-weight: bold;
`
const CustomInputBase = styled.input`
  width: 280px !important;
  font-weight: bold !important;
  font-size: 1rem !important;
  margin: 0.5rem 0.7rem !important;
  border-radius: 4px !important;
  &:focus {
    background-color: #ddd;
  }
`
export default ListTitle
