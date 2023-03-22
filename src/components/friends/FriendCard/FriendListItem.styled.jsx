import styled from 'styled-components';

const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid rgb(162 162 162 / 62%);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const FriendAvatar = styled.img`
  margin-left: 15px;
  width: 48px;
  border: 1px solid rgb(162 162 162 / 62%);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 2px;
`;

const UserName = styled.span`
  color: #000;
  margin-left: 15px;
`;

const Status = styled.span`
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 15px;
  height: 15px;
`;

export { FriendItem, FriendAvatar, UserName, Status };
