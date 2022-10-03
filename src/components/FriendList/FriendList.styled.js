import styled from 'styled-components';

export const FriendList = styled.ul`
  margin-top: ${props => props.theme.space[2]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  list-style: none;
  padding: ${props => props.theme.space[0]}px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
