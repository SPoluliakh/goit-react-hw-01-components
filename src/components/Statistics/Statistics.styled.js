import styled from 'styled-components';
import { getRandomHexColor } from '../../getRandomColor';

export const StatsTitle = styled.h2`
  margin: ${props => props.theme.space[0]};
  margin-left: auto;
  margin-right: auto;
  font-size: ${props => props.theme.fontSizes.ml}px;
  color: ${props => props.theme.colors.statsTitle};
  padding-top: ${props => props.theme.space[2]}px;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: ${props => props.theme.space[0]}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${props => props.theme.space[0]}px;
  margin-top: ${props =>
    props.noTitle ? props.theme.space[0] : props.theme.space[3]}px;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  align-items: center;
  background-color: ${getRandomHexColor};
  color: ${props => props.theme.colors.statsText};
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;

  :first-child {
    border-bottom-left-radius: ${props => props.theme.radii.normal};
    border-top-left-radius: ${props =>
      props.noTitle ? props.theme.radii.normal : props.theme.radii.none};
  }

  :last-child {
    border-bottom-right-radius: ${props => props.theme.radii.normal};
    border-top-right-radius: ${props =>
      props.noTitle ? props.theme.radii.normal : props.theme.radii.none};
  }
`;
