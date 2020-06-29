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
		"yhaaaa",
		"",
		"jadi ini itu kodinganmu",
		"yang kamu kirim ke aku Ges",
		"",
		"ternyata, bisa di run lhooo 😱",
		"beneran",
		"kalo nggak percaya coba aja",
		"", // 20
		"now playing - rehat (kunto aji)",
		"now playing - rehat (kunto aji)",
		"",
		"",
		"",
		"", //stay positive
		"",
		"",
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