export const rules = {
    methods: {
        passwordRules(str, str2) {
            const text = str !== undefined ? str.trim() : undefined;
            const text2 = str2 !== undefined ? str2.trim() : '';
            if (text === undefined) {
                return [];
            }

            return [
                // value => !!value || `새 비밀번호를 입력하세요.`,
                value => !(value && text !== text2) || '비밀번호 변경시 동일한 비밀번호를 입력해주세요.',
                value => !(value && value.length <= 7) || '8자 이상 입력해주세요.',
                value => !!(value && /\d/.test(value)) || '숫자를 포함하여 입력해주세요.',
                value => !!(value && /[A-Za-z]/.test(value)) || '문자를 포함하여 입력해주세요.',
                value => !!(value && /[^A-Za-z0-9]/.test(value)) || '특수문자를 포함하여 입력해주세요.',
                // value => !!(value && /[A-Z]{1}/.test(value)) || '대문자 1개를 포함하여 입력해주세요.',
            ];
        },
        notEmptyRules(str) {
            const text = str.trim();
            return [
                value => !!value || `${text}은(는) 필수입력입니다.`,
            ];
        },
    }
};
    export default { rules };