import Swal from 'sweetalert2';

export const fetchSignIn = (params, action) => {
	const res = fetch('https://sshare-backend.herokuapp.com/signin', {
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
					title: "User Created!",
					icon: "success",
					confirmButtonText: "Continue",
				  }).then(action)
				: Swal.fire({
						title: 'SigIn Failed!',
						icon: 'error',
						confirmButtonText: 'Continue',
				  });
		})
		.catch(err => console.log(err));

	return res;
};
