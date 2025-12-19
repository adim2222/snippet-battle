const codeExchange = async (urlParams) => {
  const response = await fetch('http://localhost:5185/authenticate', {
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

export default codeExchange;