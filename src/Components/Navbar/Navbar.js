import './Navbar.css';
import userToken from '../../Hooks/codeExchange';
import queryOsuApi from '../../Hooks/queryOsuApi';

const Navbar = () => {
	const accountAuth = () => {
		const url = new URL('https://osu.ppy.sh/oauth/authorize');

		const params = {
			client_id: '46837',
			redirect_uri: 'http://localhost:3000/',
			response_type: 'code',
			scope: 'public identify',
			state: 'randomval',
		};
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key])
		);

		window.location.href = url;
	};

	const queryOsu = async () => {
		if (userToken) {
			const userData = await queryOsuApi("https://osu.ppy.sh/api/v2/me/osu", "GET");
			console.log(userData)
		}
	}
	queryOsu();

	return (
		<div className='navbar'>
			<button className='account-auth' onClick={accountAuth}>
				Authenticate with osu
			</button>
		</div>
	);
};

export default Navbar;
