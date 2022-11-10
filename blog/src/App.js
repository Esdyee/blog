import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
    // state: 변동시 자동으로 html에 반영되게 만들고 싶을 때 작성
    let [글제목, 글제목변경] = useState(["남자코트 추천", "고객 추천", "우동 맛집 추천"]);

    // selected 글제목 state
    let [selected, selected변경] = useState({});

    let [내용, c] = useState(["2022년 10월 발행", "테스트 진행 중", "Not Error"]);
    let [좋아요, 좋아요변경] = useState([0, 0, 0]);
    let [modal, 모달변경] = useState(false);
    let [저장값, 저장값변경] = useState("");

    // Test
    function 좋아요함수(index) {
        좋아요변경(() => {
            let copy = [...좋아요];
            copy[index]++;
            return copy;
        });
    }

    //Test
    function 정렬() {
        let array = [...글제목];
        array.sort();
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

            {글제목.map((item, index) => {
                return (
                    <div className="list" key={index}>
                        <h4
                            onClick={() => {
                                모달변경(!modal);
                                selected변경({ index: index, title: item });
                            }}>
                            >{item}
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    좋아요함수(index);
                                }}>
                                &nbsp; 👍
                            </span>
                            <span>{좋아요[index]}</span>
                        </h4>
                        <p>
                            {내용[index]}&nbsp;
                            <button
                                onClick={() => {
                                    let array = [...글제목];
                                    array.splice(index, 1);
                                    글제목변경(array);

                                    let array2 = [...내용];
                                    array2.splice(index, 1);
                                    c(array2);
                                }}>
                                삭제
                            </button>
                        </p>
                    </div>
                );
            })}

            <input
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        글제목변경([저장값, ...글제목]);
                        e.target.value = "";
                        // remove in state garbage value
                        저장값변경("");
                    }
                }}
                onChange={(e) => {
                    console.log("changed");
                    저장값변경(e.target.value);
                }}></input>
            <button
                onClick={() => {
                    글제목변경([저장값, ...글제목]);
                }}>
                저장
            </button>
            {modal === true ? <Modal 글제목={글제목} 글제목변경={글제목변경} selected={selected}></Modal> : null}
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.selected.title}</h4>
            <p>
                {new Date().getFullYear()}-{new Date().getMonth() + 1}-
                {new Date().getDay() < 10 ? "0" + new Date().getDay() : new Date().getDay()}
            </p>
            <p>상세내용</p>
            <button
                onClick={() => {
                    const changeTitle = "여자코트 추천";
                    props.selected.title = changeTitle;
                    props.글제목[props.selected.index] = changeTitle;
                    props.글제목변경([...props.글제목]);
                }}>
                글수정
            </button>
        </div>
    );
}

export default App;
