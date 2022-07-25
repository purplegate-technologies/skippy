import { useState } from "react";
import "./styles.css"

// const LoadingBar = () => {


//     const progress:  Element | null | any = document.querySelector('.progress')
//     const loading:  Element | null | any = document.querySelector('.loading')

//     let i = 0;
//     const fakeUpLoadPerc = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];

//     const interval = setInterval(() => {
//         // progress.style.width = "50%"
//         progress.style.width = `${fakeUpLoadPerc[i]}%`
//         progress.style.width = fakeUpLoadPerc[i] + `%`
//         loading.innerHTML = fakeUpLoadPerc[i] + "%"
//         i++;

//         if(i === fakeUpLoadPerc.length) {
//             clearInterval(interval);
//             loading.innerHTML = "Completed"
//         }
//     }, 1000)

//     return (
//         <>
//             <div className="progress-bar">
//                 <div className="progress"></div>
//             </div>
//             <span className="loading"></span>
//         </>
//     )
// }

// export default LoadingBar

// hooke progress bar
const LoadingBar = ({done}: {done: string}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
        const newStyle = {
            opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress-hook">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}
export default LoadingBar

// const App = () => (
// 	<>
// 		<h1>React LoadingBar Bar</h1>
// 		<LoadingBar done="70"/>
// 	</>
// );