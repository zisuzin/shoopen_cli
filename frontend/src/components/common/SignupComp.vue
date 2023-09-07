<script>
// 공통기능함수
import comData from '@/js/tempData/comComp.js';

export default {
    name: 'SignupComp',
    template: comData.signupComp,
    methods: {
        searchForm() {
            console.log('회원가입 !!');
        },
    },
};
</script>
