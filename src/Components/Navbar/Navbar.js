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

	if (userToken) {
		const userData = queryOsuApi("https://osu.ppy.sh/api/v2/me/osu", "GET");
		console.log(userData)
	}

	return (
		<div className='navbar'>
			<button className='account-auth' onClick={accountAuth}>
				Authenticate with osu
			</button>
		</div>
	);
};

export default Navbar;
