import { Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const Card = ({ card }) => {
  return (
    <Paper className="card-container">
      <Typography>{card.title}</Typography>
      <span className="edit-icon">
        <EditIcon />
      </span>
    </Paper>
  )
}

export default Card
