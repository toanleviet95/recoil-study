import { selectorFamily } from 'recoil';
import getUserByID from 'services/users';

export default selectorFamily({
    key: 'Username',
    get: userID => async () => {
        const response = await getUserByID(userID);
        if (response.error) {
            return 'Error occured!';
        }
        return response && response.data && response.data.email ? response.data.email : '';
    },
});
