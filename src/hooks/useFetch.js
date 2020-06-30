import { useState } from 'react';

export const useFetch = (
	url,
	body = {},
	method = 'GET',
	headers = {
		'Content-Type': 'application/json',
	}
) => {
	const [state, setState] = useState({
		loading: true,
		data: {},
	});

	fetch(url, method, headers, body)
		.then(response => response.json())
		.then(data => setState({ loading: false, data }))
		.catch(err => setState({ loading: false, err }));

	return state;
};
