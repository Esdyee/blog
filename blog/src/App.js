import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
	let post = "강남 우동 맛집22";

	// state: 변동시 자동으로 html에 반영되게 만들고 싶을 때 작성
	let [글제목, 글제목변경] = useState(["남자코트 추천", "여자코트 추천", "우동 맛집 추천"]);
	let [내용, c] = useState(["2022년 10월 발행", "테스트 진행 중", "Error"]);
	let [좋아요, 좋아요변경] = useState(0);

	function 함수() {
		// add count 좋아요
		좋아요 = 좋아요 + 1;
	}

	return (
		<div className="App">
			<div className="black-nav">
				<h4>블로그</h4>
			</div>
			<button>정렬</button>
			<div className="list">
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
				<h4>{글제목[2]}</h4>
				<p>{내용[2]}</p>
			</div>
		</div>
	);
}

export default App;
