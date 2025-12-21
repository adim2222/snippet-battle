import codeExchange from './codeExchange';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let globalToken;

if (urlParams.get('code')) {
	const data = await codeExchange(urlParams);
	globalToken = data.access_token;
}

export default globalToken;
