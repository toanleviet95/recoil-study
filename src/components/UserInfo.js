import React from 'react';
import Proptypes from 'prop-types';
import {
    useRecoilValue,
} from 'recoil';
import usernameQuery from 'selectors/usernameQuery';
import friendsInfoQuery from 'selectors/friendsInfoQuery';

const UserInfo = ({ userID }) => {
    const userName = useRecoilValue(usernameQuery(userID));
    const friends = useRecoilValue(friendsInfoQuery);
    return (
      <>
        <div>{userName}</div>
        <div>Friends:</div>
        <ul>
          {friends.map(friend => (
            <li key={friend}>
              {friend}
            </li>
            ))}
        </ul>
      </>
    );

    // Without React Suspense
    // const userNameLoadable = useRecoilValueLoadable(usernameQuery(userID));
    // switch (userNameLoadable.state) {
    //     case 'hasValue':
    //     return <div>{userNameLoadable.contents}</div>;
    //     case 'loading':
    //     return <div>Loading...</div>;
    //     case 'hasError':
    //     throw userNameLoadable.contents;
    // }
};

UserInfo.propTypes = {
    userID: Proptypes.number.isRequired,
};

export default UserInfo;
