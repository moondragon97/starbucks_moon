import React, {useState} from 'react';

const Login = () => {
    const minIdLen = 5;
    const maxIdLen = 20;
    const minPwLen = 8;
    const maxPwLen = 20;

    const idRegExp = new RegExp(`^[a-z0-9_-]{${minIdLen},${maxIdLen}}$`);
    const pwRegExp = new RegExp(`^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{${minPwLen},${maxPwLen}}$`);

    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const [isValidId, setIsValidId] = useState(false);
    const [isValidPw, setIsValidPw] = useState(false);

    const clickLoginBtn = (e) => {
        const userId = inputId;
        const password = inputPw;
        fetch("http://localhost:8080/member_login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'userId': userId, 'password': password })
        }).then(res=>{
            if(res.ok){
                console.log("로그인 성공");
            }else{
                console.log("로그인 실패");
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
        <div className="page">
            <div className="titleWrap">
                아이디와 비밀번호를 입력해 주세요.
            </div>
            <div className="contentWrap">
                <div className="inputTitle">아이디</div>
                <div className="inputWrap">
                    <input
                        className="input"
                        placeholder="아이디를 입력해 주세요."
                        value={inputId}
                        onChange={handleId}
                    />
                </div>
                <div className="errorMessageWrap">
                    {
                        isValidId ? "" : "올바른 아이디를 입력해 주세요."
                    }
                </div>

                <div className="inputTitle" style={{marginTop: "26px"}}>비밀번호</div>
                <div className="inputWrap">
                    <input

                        className="input"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상을 입력해 주세요."
                        value={inputPw}
                        onChange={handlePw}
                    />
                </div>
                <div className="errorMessageWrap">
                    {isValidPw ? "" : "영문, 숫자, 특수문자 포함 8자 이상을 입력해 주세요."}
                </div>
            </div>
            <div>
                <button
                    disabled={!isValidPw || !isValidId}
                    className="bottomBtn"
                    onClick={clickLoginBtn}
                >확인</button>
            </div>
        </div>
    );
};

export default Login;