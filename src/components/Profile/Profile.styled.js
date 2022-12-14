import styled from 'styled-components';

export const Image = styled.img`
  width: 200px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.profileList};
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.table};
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
  background-color: ${props => props.theme.colors.profileList};
  margin-top: ${props => props.theme.space[3]}px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ListItem = styled.li`
  font-family: ${props => props.theme.fonts.table};
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;
