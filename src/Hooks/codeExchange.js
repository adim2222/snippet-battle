const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let userToken = null;

if (urlParams.get('code')) {
	const response = await fetch('http://localhost:5185/authenticate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			code: urlParams.get('code'),
		}),
	});
	userToken = await response.json();
}

export default userToken;