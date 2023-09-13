<script>
// 공통기능함수
import store from '@/js/store';
import comData from '@/js/tempData/comComp.js';
// 제이쿼리 불러오기
import $ from 'jquery';

export default {
    name: 'SignupComp',
    template: comData.signupComp,
    data() {
        return {
            userName: '',
        };
    },
    methods: {
        // 폼 검사 메서드
        searchForm() {
            // 이메일 앞주소
            const eml1 = $("#email1");
            // 이메일 선택박스
            const seleml = $("#seleml");
            // this 저장용 변수
            let vm = this;

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
                    store.state.setpass = false;
                }
                /***************************************************** 
                    3. 아이디일 경우 유효성 검사
                    - 검사기준: 영문자로 시작하는 6~20글자 영문자/숫자
                *****************************************************/
                else if (cid === "signid") {
                    console.log("아이디 검사결과:", vm.vReg(cv, cid));
                    if (!vm.vReg(cv, cid)) {
                        // 불통과일때 메시지 
                        $(this).siblings('.msg').text(("영문자로 시작하는 6~20글자 영문자/숫자"));

                        // 불통과!
                        store.state.setpass = false;
                    }
                    else {
                        // 통과시
                        // 1. DB에 아이디가 있는지 조회후 결과 처리
                        // 만약 아이디가 이미 있으면 "이미 사용중이거나 탈퇴한 아이디입니다."
                        // 없으면 메시지 지움
                        $(this).siblings(".msg").empty();

                        // 통과!
                        store.state.setpass = true;
                    }
                }
                /***************************************************** 
                    4. 비밀번호일 경우 유효성 검사
                    - 검사기준: 특수문자,문자,숫자포함 형태의 5~15자리
                *****************************************************/
                else if (cid === "signpw") {
                    console.log("비밀번호 검사결과:", vm.vReg(cv, cid));
                    if(!vm.vReg(cv, cid)) {
                        // 불통과일때 메시지 
                        $(this).siblings(".msg").text("특수문자,문자,숫자포함 형태의 5~15자리");

                        // 불통과!
                        store.state.setpass = false;
                    }
                    else {
                        // 메시지 지우기
                        $(this).siblings(".msg").empty();

                        // 통과!
                        store.state.setpass = true;
                    }
                }
                /***************************************************** 
                    5. 이메일 유효성 검사하기
                    - 검사기준: 이메일 형식에 맞는지 여부검사
                *****************************************************/
               else if (cid === "email1") {
                    // 1. 이메일 주소 만들기 : 앞주소@뒷주소
                    let comp = eml1.val() + "@" + seleml.val();
                    // 2. 이메일 검사함수 호출
                    vm.resEml(comp);
                }
                // 모두 통과일 경우 메시지 지움
                else {
                    $(this).siblings(".msg").empty()
                    && $(this).parent().siblings(".msg").empty();
                }
            }); ////////////// blur ////////////////////////
        }, //////////// searchForm 함수 /////////////////

        /****************************************************** 
            함수명 : vReg (validation with Regular Expression)
            기능 : 값에 맞는 형식을 검사하여 리턴함
        ******************************************************/
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
                case "signname": // 이름
                    reg = /^[a-zA-Z가-힣\s]+$/;
                    // 한글, 영문 대/소문자, 공백 허용
                    break;
                case "email1": // 이메일
                    reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
                    // 이메일 형식에 맞는지 검사하는 정규식
                    break;
            } //////////// switch case문 //////////////////

            // 정규식.test(검사할값) : 결과 true/false
            return reg.test(val);
        }, //////////// vReg 함수 /////////////////

        /**************************************** 
            함수명 : resEml (result Email)
            기능 : 이메일 검사결과 처리
        ****************************************/
        resEml(val) { // val - 완성된 이메일 주소
            // 이메일 앞주소
            const eml1 = $("#email1");

            console.log("이메일주소:", val);
            console.log("이메일 검사결과:", this.vReg(val, "email1"));

            // 이메일 정규식검사에 따른 메시지 보이기
            if (!this.vReg(val, "email1")) {
                eml1.parent().siblings(".msg").text("맞지않는 이메일 형식입니다.")

                // 불통과!
                store.state.setpass = false;
            }
            else {
                eml1.parent().siblings(".msg").empty();

                // 통과!
                store.state.setpass = true;
            }
        }, //////////// resEml 함수 /////////////////

        /******************************************** 
            함수명 : formSubmit
            기능 : 폼 제출시 결과여부 따라 페이지 랜딩
        ********************************************/
        formSubmit(e) {
            // 1. 기본이동막기
            e.preventDefault();
            
            // 2. pass 통과여부 변수에 true 할당!
            // 처음에 true로 시작하여 검사 중간에 한번이라도
            // false가 할당되면 결과는 false!!
            store.state.setpass = true;

            // 3. 입력창 blur이벤트 강제발생하기
            $(`input[type=text],input[type=password]`).trigger("blur");
            
            // 4. 최종통과 여부 판별
            console.log("최종 통과여부:", store.state.setpass);
            
            // 5. 검사결과에 따라 메시지 보이기
            if(store.state.setpass){ // 통과시
                alert(`${this.userName}님 회원가입을 축하드립니다!`);
            }
        }, //////////// formSubmit 함수 /////////////////

        /******************************************** 
            함수명 : chgEml
            기능 : 이메일 옵션 선택에 따른 결과처리
        ********************************************/
        chgEml(e) {
            // 1. 선택박스 변경된 값 읽어오기
            const cv = $(e.currentTarget).val();

            // 2. 선택옵션별 분기문 
            if (cv === "init") {
                // 1. 메시지출력
                $(".firsteml").siblings(".msg").text("이메일 옵션을 선택해주세요.");
            }
            else {
                // 이메일 주소일 경우
                // 2. 이메일 전체 주소 조합하기
                let comp = $("#email1").val() + "@" + cv;
                this.resEml(comp);
            }
        }
    },
    mounted() {
        $("#agree_all").click(function() {
            // 필수항목에 체크 안된 경우
            if(!$(this).prop("checked")) {
                $(this).parent().siblings(".msg").text("필수항목에 체크하셔야 합니다.")

                // 불통과!
                this.pass = false;
            }
            else {
                $(this).parent().siblings(".msg").empty();
                
                // 통과!
                this.pass = true;
            }
        })
    }
};
</script>