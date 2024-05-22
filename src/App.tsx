import backArrow from './assets/back-arrow.svg';
import topBg from './assets/top-bg.svg';
import graph from './assets/graph.svg';
import seekThumb from './assets/seek-thumb.svg';
import othersThumb from './assets/others-thumb.svg';
import seekPath from './assets/seek-path.svg';
import othersPath from './assets/others-path.svg';
import { useGSAP } from '@gsap/react';

import './App.css';
import gsap from 'gsap';

function App() {
	useGSAP(() => {
		gsap.to('.seek-path', { opacity: 1, duration: 1, delay: 2 });
		gsap.to('.others-path', { opacity: 1, duration: 1, delay: 2 });
		gsap.to('.seek-thumb', { left: '94%', top: '30%', duration: 1, delay: 2 });
		gsap.to('.others-thumb', {
			left: '94%',
			top: '67%',
			duration: 1,
			delay: 2,
		});
		gsap.to('.seek-text', { top: '37%', opacity: 1, duration: 1, delay: 2 });
		gsap.to('.others-text', { top: '75%', opacity: 1, duration: 1, delay: 2 });
		setTimeout(() => {
			document.getElementsByClassName('button')[0].classList.add('blue');
		}, 2000);
	}, []);

	const handleBack = () => {
		window.location.reload();
	};

	return (
		<div className='app'>
			<img src={topBg} className='top-bg' alt='' />
			<div className='app-container'>
				<img
					onClick={handleBack}
					className='back-arrow'
					src={backArrow}
					alt=''
				/>
				<div className='graph'>
					<p className='graph-header'>Attendance</p>
					<div className='graph-container'>
						<img className='graph-bg' src={graph} alt='' />
						<img className='seek-path' src={seekPath} alt='' />
						<img className='others-path' src={othersPath} alt='' />
						<img className='others-thumb' src={othersThumb} alt='' />
						<img className='seek-thumb' src={seekThumb} alt='' />
						<p className='seek-text'>Seek</p>
						<p className='others-text'>Others</p>
					</div>
					<div className='graph-labels'>
						<p>Week 1</p>
						<p>Week 12</p>
					</div>
				</div>
				<div onClick={handleBack} className='button'>
					<p>Great!</p>
				</div>
			</div>
		</div>
	);
}

export default App;
