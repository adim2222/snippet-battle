import userToken from "./codeExchange";

const queryOsuApi = async (url, method, body) => {
    const response = await fetch('http://localhost:5185/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userToken: userToken,
            url: url,
            method: method,
            ...(body && { body: JSON.stringify(body) }),
        }),
    });
    return await response.json();
}

export default queryOsuApi;