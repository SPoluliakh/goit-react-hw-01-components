import styled from 'styled-components';

export const ProfileWrap = styled.div`
  background-color: ${props => props.theme.colors.profile};
  width: 360px;
  padding-top: ${props => props.theme.space[3]}px;
  margin-top: ${props => props.theme.space[6]}px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 300px;
`;

export const Text = styled.p`
  margin-top: ${props => props.theme.space[2]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  color: ${props => props.theme.colors.text};
  font-size: ${props =>
    props.firstLastName ? props.theme.fontSizes.l : props.theme.fontSizes.m}px;
  text-decoration: ${props => (props.firstLastName ? 'underline' : 'none')};
`;

export const InnerWrap = styled.div`
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: ${props => props.theme.space[0]}px;
  display: flex;
  align-items: center;
  margin: ${props => props.theme.space[0]}px;
  background-color: rgba(255, 213, 0, 0.73);
  margin-top: ${props => props.theme.space[3]}px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ListItem = styled.li`
  flex-basis: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;
