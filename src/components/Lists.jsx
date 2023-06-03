import {CssBaseline, Paper} from '@mui/material';
import ListTitle from './ListTitle';
import Card from './Card';
import AddCardOrList from './AddCardOrList';
import styled from '@emotion/styled';

const Lists = () => {
	return (
		<Root>
			<CssBaseline />
			<ListTitle />
			<Card />
			<Card />
			<Card />
			<AddCardOrList type="card" />
		</Root>
	);
};

// styles

const Root = styled(Paper)`
	width: 300px;
	margin: 1rem;
	background-color: #ebecf0;
`;
export default Lists;
