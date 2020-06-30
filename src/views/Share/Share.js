//React Imports
import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import BlockIcon from '@material-ui/icons/Block';
import TextField from '@material-ui/core/TextField';
//Styles
import './Share.css';

//Component
export const Share = ({
	location: {
		state: { access_code },
	},
}) => {
	//Refs
	const video = React.createRef();
	const canvas = React.createRef();

	//Hooks
	useEffect(() => {
		// beEmiter({
		//   access_code: this.props.location.state.access_code,
		//   email: sessionStorage.getItem("email"),
		// });

		video.current.addEventListener('loadeddata', event => {
			const context = canvas.current.getContext('2d');
			setInterval(() => {
				// let output = canvas.current.toDataURL(
				// 	'image/jpeg',
				// 	0.4
				// );
				context.drawImage(video.current, 0, 0, 800, 400);
				// transmitir({
				//   email: sessionStorage.getItem("email"),
				//   media: output,
				// });
			}, 100);
		});
	}, [video, canvas]);

	//Methods
	const startCapture = async () => {
		navigator.mediaDevices
			.getDisplayMedia({
				video: {
					cursor: 'always',
					width: 800,
					height: 400,
				},
				audio: false,
			})
			.then(track => {
				const screen = video.current;
				screen.srcObject = track;
			})
			.catch(err => {
				console.error('Error:' + err);
				return null;
			});
	};

	const stopCapture = async () => {
		const screen = video.current;
		let tracks = screen.srcObject.getTracks();
		tracks.forEach(track => track.stop());
		screen.srcObject = null;
	};

	return (
		<Card className='container'>
			<center>
				<Card id='screen'>
					<video ref={video} autoPlay></video>
				</Card>
				<TextField
					className='accessCode'
					label='Access Code'
					placeholder='Access Code'
					disabled
					value={access_code}
				/>
				<Button
					className='button'
					color='primary'
					onClick={startCapture}
					variant='contained'
					startIcon={<ShareIcon fontSize='small' />}
				>
					Share
				</Button>

				<Button
					className='button'
					color='secondary'
					onClick={stopCapture}
					variant='contained'
					startIcon={<BlockIcon fontSize='small' />}
				>
					Stop
				</Button>
				<br />
				<br />
				<canvas ref={canvas} height={400} width={800}></canvas>
				<br />
				<br />
			</center>
		</Card>
	);
};
