import React from "react";
import kado from "../assets/images/kado.jpg";
import cpp from "../assets/images/cpp.png";
import cpp2 from "../assets/images/cpp2.png";

export default function Icon(props) {
	return (
		<div className="container">
			{3 <= props.step && props.step <= 10 && <img src={kado} />}
			{11 <= props.step && props.step <= 12 && (
				<>
					<img src={cpp} />
					<p>feelings.cpp</p>
				</>
			)}
			{13 <= props.step && props.step <= 20 && <img src={cpp2} />}
			{props.step === 10 && (
				<button
					onClick={() => {
						props.setPause(false);
						props.setStep((step) => 11);
					}}
				>
					Buka
				</button>
			)}
			{props.step === 20 && (
				<button
					onClick={() => {
						props.setPause(false);
						props.setStep((step) => 21);
					}}
				>
					Compile and Run
				</button>
			)}
			<style jsx>{`
				.emoji {
					font-size: 10rem;
				}
				button {
					margin: 1rem 0 0;
				}
				.container {
					display: flex;
					flex-direction: column;
				}
				p {
					text-align: center;
				}
			`}</style>
		</div>
	);
}
