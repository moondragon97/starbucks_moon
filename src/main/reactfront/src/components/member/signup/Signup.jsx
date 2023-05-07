import React, {useState} from 'react';
import "./Signup.css";

const Signup = () => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const [isValidId, setIsValidId] = useState(false);
    const [isValidPw, setIsValidPw] = useState(false);

    return (
        <div className="signup_page">
            <div className="signup_titleWrap">
                회원가입
            </div>
            <div className="signup_contentWrap">
                <div className="signup_inputTitle">아이디</div>
                <div className="signup_inputWrap">
                    <input
                        className="signup_input"
                        placeholder="아이디를 입력해 주세요."
                        value={inputId}
                    />
                </div>

                <div className="signup_inputTitle" style={{marginTop: "26px"}}>비밀번호</div>
                <div className="signup_inputWrap">
                    <input
                        className="signup_input"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상을 입력해 주세요."
                        value={inputPw}
                    />
                </div>
            </div>
            <div>
                <button
                    disabled={!isValidPw || !isValidId}
                    className="signup_btnBottom btnSignin"
                >로그인</button>
            </div>
            <div>
                <button className="signup_btnBottom btnSignup">
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Signup;