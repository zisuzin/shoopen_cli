<script>
// 공통기능함수
import comData from '@/js/tempData/comComp.js';
// 제이쿼리 불러오기
import $ from 'jquery';

export default {
    name: 'SignupComp',
    template: comData.signupComp,
    methods: {
        // 폼 검사 메서드
        searchForm() {
            // 검사용변수
            let pass;
            // this 저장 변수
            let self = this;

            $(`input[type=text],input[type=password]`).blur(function () {
                // 1. 요소 공백제거
                const groSpace = (cv) => cv.replace(/\s/g, '');
                // 블러 발생한 요소 id
                let cid = $(this).attr('id');
                // 블러 발생한 요소 입력값
                let cv = cid === 'signname' ? $(this).val().trim() : groSpace($(this).val());
                // 공백제거된 데이터 다시 입력창에 업데이트!
                $(this).val(cv);

                // 2. 빈값 여부 검사
                if (cv === '') {
                    // 메시지 출력
                    $(this).siblings('.msg').text('필수 입력 바랍니다.')
                    && $(this).parent().siblings('.msg').text('필수 입력 바랍니다.');

                    // 불통과
                    pass = false;
                }
                // 3. 아이디 유효성 검사
                else if (cid === "signid") {
                    // 아이디일 경우 유효성 검사
                    if (!self.vReg(cv, cid)) {
                        // 불통과일때 메시지 
                        $(this).siblings('.msg').text(("영문자로 시작하는 6~20글자 영문자/숫자"));

                        // 불통과!
                        pass = false;
                    }
                    else {
                        // 통과시
                        // 1. DB에 아이디가 있는지 조회후 결과 처리
                        // 만약 아이디가 이미 있으면 "이미 사용중이거나 탈퇴한 아이디입니다."
                        // 없으면 메시지 지움
                        $(this).siblings(".msg").empty();
                    }
                }
                console.log(pass)
            });
        }, //////////// searchForm 함수 /////////////////
        // 정규식 검사 메서드
        vReg(val, cid) { // val - 검사값, cid - 처리구분 아이디
            // 정규식 변수
            let reg;

            // 검사할 아이디에 따라 정규식 변경
            switch (cid) {
                case "signid": // 아이디
                    reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
                    // 영문자로 시작하는 6~20글자 영문자/숫자
                    break;
                case "signpw": // 비밀번호
                    reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
                    // 특수문자,문자,숫자포함 형태의 5~15자리
                    break;
                case "email1": // 이메일
                    reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
                    // 이메일 형식에 맞는지 검사하는 정규식
                    break;
            } //////////// switch case문 //////////////////

            // 정규식.test(검사할값) : 결과 true/false
            return reg.test(val);
        } //////////// vReg 함수 /////////////////
    },
};
</script>
