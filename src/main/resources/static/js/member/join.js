console.log("join.js loaded");

$(function() {
    $('#btnSubmit').submit(function(event) {
        event.preventDefault();
        alert("ff");
        checkValidate(event);
    });
});

function checkValidate(event) {
    const formData = {
        'password': $('input[name=password]').val(),
        'passwordConfirm': $('input[name=passwordConfirm]').val()
    };

    if (formData.password !== formData.passwordConfirm) {
        alert('비밀번호와 비밀번호 확인 값이 일치하지 않습니다.');
        return;
    }

    // TODO: 비밀번호 유효성 체크

    $('#formJoin').submit();
}