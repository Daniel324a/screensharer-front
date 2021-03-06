import Swal from 'sweetalert2';

export const fetchLogin = (params, action) => {
	const res = fetch('https://sshare-backend.herokuapp.com/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...params,
		}),
	})
		.then(response => response.json())
		.then(data => {
			data.ok
				? Swal.fire({
						title: 'Log In Succesfully!',
						icon: 'success',
						showConfirmButton: false,
						timer: 600,
				  }).then(action)
				: Swal.fire({
						title: 'Log In Failed!',
						icon: 'error',
						confirmButtonText: 'Continue',
				  });
		})
		.catch(err => console.log(err));

	return res;
};
