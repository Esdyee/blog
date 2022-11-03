import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
	let post = "강남 우동 맛집22";

	// state: 변동시 자동으로 html에 반영되게 만들고 싶을 때 작성
	let [글제목, 글제목변경] = useState(["남자코트 추천", "고객 추천", "우동 맛집 추천"]);
	let [내용, c] = useState(["2022년 10월 발행", "테스트 진행 중", "Not Error"]);
	let [좋아요, 좋아요변경] = useState([0, 0, 0]);
	let [modal, modal변경] = useState(false);

	function 좋아요함수(index) {
		좋아요변경(() => {
			let copy = [...좋아요];
			copy[index]++;
			return copy;
		});
	}

	function 정렬() {
		let array = [...글제목];
		array.sort();
		console.log(array);
		글제목변경(array);
	}

	return (
		<div className="App">
			<div className="black-nav">
				<h4>블로그</h4>
			</div>
			<pre>{글제목}</pre>
			<button
				onClick={() => {
					정렬();
				}}>
				정렬
			</button>
			{/*			<div className="list">
				<h4>
					{글제목[0]}{" "}
					<span
						onClick={() => {
							좋아요변경(좋아요 + 1);
						}}>
						👍
					</span>{" "}
					{좋아요}
					<button
						onClick={() => {
							글제목변경(["여자코트 추천", 글제목[1], 글제목[2]]);
						}}>
						제목변경
					</button>
				</h4>
				<p>{내용[0]}</p>
			</div>
			<div className="list">
				<h4>{글제목[1]}</h4>
				<p>{내용[1]}</p>
			</div>
			<div className="list">
				<h4
					onClick={() => {
						modal변경(!modal);
					}}>
					{글제목[2]}
				</h4>
				<p>{내용[2]}</p>
			</div>
			// Model condition html*/}
			{modal === true ? <Modal></Modal> : null}

			{글제목.map((item, index) => {
				return (
					<div className="list" key={index}>
						<h4>
							{item}
							<span
								onClick={() => {
									좋아요함수(index);
								}}>
								&nbsp; 👍
							</span>
							<span>{좋아요[index]}</span>
						</h4>
						<p>{내용[index]}</p>
					</div>
				);
			})}
		</div>
	);
}

function Modal() {
	return (
		<div className="modal">
			<h4>제목</h4>
			<p>
				{new Date().getFullYear()}-{new Date().getMonth() + 1}-
				{new Date().getDay() < 10 ? "0" + new Date().getDay() : new Date().getDay()}
			</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
