import React, {useState} from 'react';
import "./Login.css";
import {useHistory} from "react-router-dom";
import {idRegExp, minPwLen, pwRegExp} from "../memberCommon";
import {URL_BASE, URL_LOGIN} from "../../statics/links";

const Login = () => {
    const history = useHistory();
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const [isValidId, setIsValidId] = useState(false);
    const [isValidPw, setIsValidPw] = useState(false);

    const clickLoginBtn = (e) => {
        if(!isValidPw || !isValidId){
            alert("회원정보를 다시 확인해 주세요.");
            return;
        }

        const userId = inputId;
        const password = inputPw;
        fetch(`${URL_BASE}${URL_LOGIN}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'userId': userId, 'password': password })
        }).then(res=>{
            if(res.ok){
                alert("로그인 성공");
            }else{
                alert("로그인 실패");
            }
        });
    }

    const handleId = (e) =>{
        const _input = e.target.value;
        setInputId(_input);
        setIsValidId(idRegExp.test(_input));
    }

    const handlePw = (e) =>{
        const _input = e.target.value;
        setInputPw(_input);
        setIsValidPw(pwRegExp.test(_input));
    }
    return (
        <div className="login_page">
            <div className="login_titleWrap">
                로그인
            </div>
            <div className="login_contentWrap">
                <div className="login_inputTitle">아이디</div>
                <div className="login_inputWrap">
                    <input
                        className="login_input"
                        placeholder="아이디를 입력해 주세요."
                        value={inputId}
                        onChange={handleId}
                    />
                </div>
                {/*<div className="login_errorMessageWrap">*/}
                {/*    {*/}
                {/*        isValidId ? "" : "올바른 아이디를 입력해 주세요."*/}
                {/*    }*/}
                {/*</div>*/}

                <div className="login_inputTitle" style={{marginTop: "26px"}}>비밀번호</div>
                <div className="login_inputWrap">
                    <input
                        type="password"
                        className="login_input"
                        placeholder={`영문, 숫자, 특수문자 포함 ${minPwLen}자 이상을 입력해 주세요.`}
                        value={inputPw}
                        onChange={handlePw}
                    />
                </div>
                {/*<div className="login_errorMessageWrap">*/}
                {/*    {isValidPw ? "" : "영문, 숫자, 특수문자 포함 8자 이상을 입력해 주세요."}*/}
                {/*</div>*/}
            </div>
            <div>
                <button
                    //disabled={!isValidPw || !isValidId}
                    className="login_btnBottom login_btnSignin"
                    onClick={clickLoginBtn}
                >로그인</button>
            </div>
            <div>
                <button
                    className="login_btnBottom login_btnSignup"
                    onClick={()=>history.push("/signup")}>
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Login;