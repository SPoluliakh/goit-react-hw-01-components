import styled from 'styled-components';

export const FreandListItem = styled.li`
  display: flex;
  width: 360px;
  background-color: ${props => props.theme.colors.profile};
  padding: ${props => props.theme.space[2]}px;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border-radius: ${props => props.theme.radii.normal};
  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[2]}px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${props =>
    props.children ? props.theme.colors.online : props.theme.colors.offline};
  margin-right: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.round};
`;

export const FriendsFoto = styled.img`
  background-color: ${props => props.theme.colors.profileList};
  border-radius: ${props => props.theme.radii.normal};
`;

export const FriendsName = styled.p`
  font-family: ${props => props.theme.fonts.table};
  margin-left: ${props => props.theme.space[3]}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m}px;
`;
