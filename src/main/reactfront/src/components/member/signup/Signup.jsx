import React, {useState} from 'react';
import "./Signup.css";
import {emailRegExp, pwRegExp} from "../MemberCommon";
import {useHistory} from "react-router-dom";
import {URL_BASE, URL_CHK_DUPLICATE_ID, URL_SIGNUP} from "../../statics/Links";

const Signup = () => {
    const history = useHistory();

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputPwConfirm, setInputPwConfirm] = useState("");
    const [inputNm, setInputNm] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const [isValidId, setIsValidId] = useState(false);
    const [isValidPw, setIsValidPw] = useState(false);
    const [isValidPwConfirm, setIsValidConfirm] = useState(true);

    const handleId = (e) => {
        if(isValidId){
            setIsValidId(false);
        }
        const _input = e.target.value;
        setInputId(_input);
    }
    const checkDuplicateId = () => {
        if(inputId.length < 5){
            alert("아이디를 5글자 이상 입력해 주세요.");
            return;
        }

        fetch(`${URL_BASE}${URL_CHK_DUPLICATE_ID}?userId=${inputId}`)
            .then(response =>{
                if(response.status === 200){
                    alert("사용 가능한 아이디입니다.");
                    setIsValidId(true);
                }else{
                    alert("중복된 아이디입니다.");
                }
            })
            .catch(error => console.log(error));
    }

    const handlePw = (e) => {
        const _input = e.target.value;
        setInputPw(_input);
        setIsValidPw(pwRegExp.test(_input));
        setIsValidConfirm(inputPwConfirm === _input);
    }

    const handlePwConfirm = (e) => {
        const _input = e.target.value;
        setInputPwConfirm(_input);
        setIsValidConfirm(inputPw === _input);
    }

    const clickSignup = () => {
        let msg = "";
        if(!isValidId){
            msg = "아이디 중복 체크를 해 주세요.";
        }
        if(!isValidPw){
            msg = "비밀번호를 확인해 주세요.";
        }
        if(!isValidPwConfirm){
            msg = "비밀번호가 일치하지 않습니다.";
        }
        if(emailRegExp.test(inputEmail)){
            msg = "이메일을 다시 확인해 주세요.";
        }
        if(inputNm.length < 1){
            msg = "이름을 입력해 주세요.";
        }

        if(msg !== ""){
            alert(msg);
            return;
        }
        console.log(inputNm);

        fetch(`${URL_BASE}${URL_SIGNUP}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userId': inputId,
                'password': inputPw,
                'userName' : inputNm,
                'email' : inputEmail
            })
        }).then(response =>
            console.log(response)
        ).catch(error =>
            console.log(error));
    }

    return (
        <div className="signup_page">
            <div className="signup_titleWrap">
                회원가입
            </div>
            <div className="signup_contentWrap">
                <div className="signup_columnWrap">
                    <div className="signup_inputTitle">아이디</div>
                    <div className="signup_inputWrap">
                        <input
                            className="signup_input"
                            placeholder="아이디를 입력해 주세요."
                            value={inputId}
                            onChange={handleId}
                        />
                    </div>
                    <div className="signup_idConfirmWrap">
                        <button
                            className="signup_btnIdConfirm"
                            onClick={checkDuplicateId}>중복확인</button>
                    </div>
                </div>

                <div className="signup_columnWrap">
                    <div className="signup_inputTitle">비밀번호</div>
                    <div className="signup_inputWrap">
                        <input
                            type="password"
                            className="signup_input"
                            placeholder="비밀번호를 입력해 주세요."
                            value={inputPw}
                            onChange={handlePw}
                        />
                    </div>
                </div>
                <div className="login_errorMessageWrap">
                    {isValidPw ? "" : "영문, 숫자, 특수문자 포함 8자 이상을 입력해 주세요."}
                </div>

                <div className="signup_columnWrap">
                    <div className="signup_inputTitle">비밀번호 확인</div>
                    <div className="signup_inputWrap">
                        <input
                            type="password"
                            className="signup_input"
                            placeholder="비밀번호를 재입력해 주세요."
                            value={inputPwConfirm}
                            onChange={handlePwConfirm}
                        />
                    </div>
                </div>
                <div className="login_errorMessageWrap">
                    {isValidPwConfirm ? "" : "비밀번호가 일치하지 않습니다."}
                </div>

                <div className="signup_columnWrap">
                    <div className="signup_inputTitle">이름</div>
                    <div className="signup_inputWrap">
                        <input
                            className="signup_input"
                            placeholder="이름을 입력해 주세요."
                            value={inputNm}
                            onChange={(e)=>setInputNm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="signup_columnWrap">
                    <div className="signup_inputTitle">이메일</div>
                    <div className="signup_inputWrap">
                        <input
                            type="email"
                            className="signup_input"
                            placeholder="이메일을 입력해 주세요."
                            value={inputEmail}
                            onChange={(e)=>setInputEmail(e.target.value)}
                        />
                    </div>
                </div>

            </div>

            <div>
                <button
                    className="signup_btnBottom signup_btnSignin"
                    onClick={clickSignup}
                >완료</button>
            </div>
            <div>
                <button
                    className="signup_btnBottom signup_btnSignup"
                    onClick={()=>history.push("/login")}>
                    취소
                </button>
            </div>
        </div>
    );
};

export  default Signup;