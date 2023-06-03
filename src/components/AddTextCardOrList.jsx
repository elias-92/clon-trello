import InputBase from '@mui/material/InputBase';
import {Button, IconButton, Paper} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, {useState} from 'react';
import styled from '@emotion/styled';

const AddTextCardOrList = ({type, setOpen}) => {
	const [title, setTitle] = useState('');
	return (
		<>
			<CustomPaper>
				<CustomInputBase
					multiline
					onBlur={() => setOpen(false)}
					placeholder={
						type === 'card'
							? 'Enter a title for this card...'
							: 'Enter a title for this list...'
					}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</CustomPaper>
			<ConfirmContainer>
				<div>
					<BtnConfirm>{type === 'card' ? 'Add card' : 'Add list'}</BtnConfirm>
					<IconButton onClick={() => setOpen(false)}>
						<ClearIcon />
					</IconButton>
				</div>
				<IconButton>
					<MoreHorizIcon />
				</IconButton>
			</ConfirmContainer>
		</>
	);
};

const CustomPaper = styled(Paper)`
	width: 270px;
	margin: 0 auto;
	padding-bottom: 1.5rem;
`;
const CustomInputBase = styled(InputBase)`
	margin: 0.7rem;
`;
const ConfirmContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0.8rem;
`;
const BtnConfirm = styled(Button)`
	width: 95px;
	height: 37.5px;
	background-color: #5aac44;
	color: #fff;
	&:hover {
		color: #5aac44;
		background-color: #fff;
		border: 1px solid #5aac44;
		transition: all 0.8s;
	}
`;
export default AddTextCardOrList;
