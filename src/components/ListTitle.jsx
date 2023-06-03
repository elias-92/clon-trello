import styled from '@emotion/styled';
import {Typography} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ListTitle = () => {
	return (
		<TitleContainer>
			<CustomTypography variant="title">To do</CustomTypography>
			<MoreHorizIcon />
		</TitleContainer>
	);
};

// styles

const TitleContainer = styled.div`
	display: flex;
	margin: 1rem;
`;
const CustomTypography = styled(Typography)`
	flex-grow: 1;
	font-size: 1rem;
	font-weight: bold;
`;
export default ListTitle;
