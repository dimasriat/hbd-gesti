import React from 'react'

export default function Subtitle(props) {
	const text = [
		"", // 0
		"halo Ges,👋",
		"aku punya sesuatu buat kamu 😁",
		"", // kado muncul
		"Tada!",
		"* krik krik *",
		"ini kado aku simpan",
		"spesial buat kamu hari ini",
		"soalnya ini kan hari spesialmu, kan?",
		"coba dibuka Ges kadonya",
		"", // 10
		"",
		"",
		"wkwkwk",
		"jadi ini itu kodinganmu",
		"yang kamu kirim ke aku Ges",
		"",
		"ternyata, bisa di run lhooo 😱",
		"beneran",
		"kalo nggak percaya coba aja",
		"", // 20
	];

	return (
		<>
			<p>{text[props.step]}</p>
			<style jsx>{`
				p {
					position: fixed;
					color: white;
					bottom: 0;
					width: 100%;
					font-size: 1.5rem;
					text-align: center;
				}
			`}</style>
		</>
	);
}