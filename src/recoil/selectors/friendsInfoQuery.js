import { selector, waitForAll } from 'recoil';
import usernameQuery from './usernameQuery';

export default selector({
    key: 'FriendsInfoQuery',
    get: ({ get }) => {
        const friendList = [4, 5, 6, 7];
        const friends = get(waitForAll(
        friendList.map(friendID => usernameQuery(friendID))));
        return friends;
    },
});
