import './Tournament.scss';

import { useNavigate, useParams } from 'react-router-dom';

import Button from 'components/core/Button';
import { paths } from 'common/constants';
import Header from 'components/layout/Header';

function Tournament() {
	const navigate = useNavigate();
	const { name } = useParams();

	return (
		<div className="tournament">
			<Header label={name?.toUpperCase()} />
			<Button onClick={() => navigate(paths.home)}>Atrás</Button>
		</div>
	);
}

export default Tournament;
