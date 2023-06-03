import {Paper, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Card = () => {
	return (
		<Paper className="card-container">
			<Typography>Card</Typography>
			<span className="edit-icon">
				<EditIcon />
			</span>
		</Paper>
	);
};

export default Card;
