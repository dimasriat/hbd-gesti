import React, { useState, useEffect } from "react";
import Icon from "./icon";
import Subtitle from './subtitle'


function Center(props) {
	return (
		<div className="container">
			<Icon {...props} />
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					color: white;
				}
			`}</style>
		</div>
	);
}

export default function App(props) {
	const [step, setStep] = useState(0);
	const [pause, setPause] = useState(false);
	useEffect(() => {
		if (!pause) {
			setTimeout(() => {
				if (step == 10) return setPause((s) => true);
				if (step == 20) return setPause((s) => true);
				setStep((s) => s + 1);
			}, 3000);
		}
	}, [step]);
	return (
		<div className="container">
			<Center
				step={step}
				setStep={setStep}
				pause={pause}
				setPause={setPause}
			/>
			<Subtitle step={step} />
			<style jsx>{`
				.container {
					width: 100%;
					height: 100%;
				}
			`}</style>
			<style jsx global>{`
				* {
					font-family: sans-serif;
					box-sizing: border-box;
				}
				html {
					width: 100%;
					height: 100%;
					margin: 0;
					padding: 0;
				}
				body,
				#root {
					width: 100%;
					height: 100%;
					margin: 0;
					padding: 0;
					background-color: black;
				}
			`}</style>
		</div>
	);
}
