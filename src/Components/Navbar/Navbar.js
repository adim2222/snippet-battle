import './Navbar.css';

const Navbar = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const codeExchange = async () => {
		const response = await fetch('http://localhost:3000/authenticate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				code: urlParams.get('code'),
			}),
		});
		const data = await response.json();
		console.log(data);
	};

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

	if (urlParams.get('code')) {
		console.log(urlParams.get('code'));
		codeExchange();
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
