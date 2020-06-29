import React from "react";
import kado from "../assets/images/kado.jpg";
import cpp from "../assets/images/cpp.png";
import cpp2 from "../assets/images/cpp2.png";

export default function Icon(props) {
	return (
		<div className="container">
			{/* icon kado */}
			{3 <= props.step && props.step <= 10 && <img src={kado} />}
			{props.step === 10 && props.pause && (
				<button
					onClick={() => {
						props.setPause(false);
						props.setStep((step) => 11);
					}}
				>
					Buka
				</button>
			)}

			{/* ikon file */}
			{11 <= props.step && props.step <= 12 && (
				<>
					<img src={cpp} />
					<p>feelings.cpp</p>
				</>
			)}

			{/* icon vscode */}
			{13 <= props.step && props.step <= 20 && <img src={cpp2} />}
			{props.step === 20 && props.pause && (
				<button
					onClick={() => {
						props.setPause(false);
						props.setStep((step) => 21);
					}}
				>
					Compile and Run
				</button>
			)}

			{/* compiling */}
			{/* You should turn your fav music on,
				feel the pain,
				and think that sadness
				can't longer to stay */}
			{22 <= props.step && <div>You should turn your fav music on,</div>}
			{23 <= props.step && <div>feel the pain,</div>}
			{24 <= props.step && <div>and think that sadness</div>}
			{25 <= props.step && <div>can't longer to stay</div>}
			{26 <= props.step && (
				<div>
					<b>stay positive :)</b>
				</div>
			)}
			<style jsx>{`
				img {
					max-width: 100%;
					height: auto;
				}
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
				div {
					color: ${props.step >= 27 ? "black" : "white"};
				}
			`}</style>
		</div>
	);
}
