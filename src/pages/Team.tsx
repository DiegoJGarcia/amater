import './Team.scss';

import { useNavigate, useParams } from 'react-router-dom';

import Button from 'components/core/Button';
import { paths } from 'common/constants';
import Header from 'components/layout/Header';

function Team() {
	const navigate = useNavigate();
	const { name } = useParams();

	return (
		<div className="team">
			<Header label={name?.toUpperCase()} />
			<Button onClick={() => navigate(paths.home)}>Atrás</Button>
		</div>
	);
}

export default Team;
