// SignupComp 컴포넌트 테스트 파일 - SignupComp.spec.js
import { mount } from '@vue/test-utils';
import SignupComp from "../src/components/common/SignupComp.vue";
// 입력폼 유효성 검사
describe('SignupComp', () => {
    it('1. 빈값 여부 검사', () => {
        const wrapper = mount(SignupComp);
        // 빈값 설정
        wrapper.setData({
            signid: '',
            signpw: '',
            email1: '',
            gender: '',
            agree_all: false,
        });
    
        // 폼 제출
        wrapper.find("#final_signup").trigger('submit');
    
        // 각 입력 필드 및 약관동의 빈값일 시 경고 메시지 띄움
        expect(wrapper.find('#signid + .msg')).text(('필수 정보입니다.'));
        expect(wrapper.find('#signpw + .msg')).text(('필수 정보입니다.'));
        expect(wrapper.find('#email1 + .msg')).text(('필수 정보입니다.'));
        expect(wrapper.find('.agreebx + .msg')).text(('필수 정보입니다.'));
    });
});