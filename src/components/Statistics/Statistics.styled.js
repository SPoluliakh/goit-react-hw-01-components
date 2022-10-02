import styled from 'styled-components';

export const StatsTitle = styled.h2`
  margin: ${props => props.theme.space[0]};
  margin-left: auto;
  margin-right: auto;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: ${props => props.theme.space[0]}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  align-items: center;
`;
