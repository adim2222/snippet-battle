import './Navbar.css';

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

	return (
		<div className='navbar'>
			<button className='account-auth' onClick={accountAuth}>
				Authenticate with osu
			</button>
		</div>
	);
};

export default Navbar;
