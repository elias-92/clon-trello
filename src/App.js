import './app.css';
import styled from '@emotion/styled';
import Lists from './components/Lists';
import backgroundImg from './img/imgFondo.jpg';
import AddCardOrList from './components/AddCardOrList';

function App() {
	return (
		<Root>
			<ListsContainer>
				<Lists />
				<Lists />
				<Lists />
				<div>
					<AddCardOrList type="list" />
				</div>
			</ListsContainer>
		</Root>
	);
}
const Root = styled.div`
	height: 100vh;
	overflow-y: auto;
	margin: 0 1rem 0 0;
	background-image: url(${backgroundImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
const ListsContainer = styled.div`
	display: flex;
`;
export default App;
