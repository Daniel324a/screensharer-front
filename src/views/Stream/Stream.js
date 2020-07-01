//React Imports
import React from 'react';
import Card from '@material-ui/core/Card';

//Styles
import './Stream.scss';

//Component
export const Stream = ({
	location: {
		state: { access_code },
	},
}) => {
	//Refs
	const screen = React.createRef();

	return (
		<div>
			<Card id='screen' elevation={3}>
				<div className='ml-15 mr-15'>
					<h3>{access_code}</h3>
					<hr />
				</div>
				<br />
				<canvas ref={screen} height={400} width={800}></canvas>
			</Card>
		</div>
	);
};

// export default class Stream extends Component {
//   constructor(props) {
//     super(props);
//     this.video = React.createRef();
//     // this.other = beReceptor(props.location.state.access_code);
//   }

//   componentDidMount() {
//     this.context = this.video.current.getContext("2d");
//   }

//   render() {
//     const getScreen = async () => {
//       await this.other.on("transmitir", async (stream) => {
//         if (stream) {
//           console.log(stream);
//           let media = stream?.media;

//           if (media) {
//             //🚀
//             let frame = new Image();
//             frame.src = media;
//             console.log(frame);
//             frame.onload = () => {
//               this.context.drawImage(frame, 0, 0, 800, 400);
//             }

//             //🚀
//           }
//         }
//       });
//     };

//     getScreen();

//     return (

//     );
//   }
// }
