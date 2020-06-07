import { selector } from 'recoil';
import textState from 'atoms/textState';

export default selector({
    key: 'charCountState',
    get: ({ get }) => {
        const text = get(textState);
        return text.length;
    },
});
