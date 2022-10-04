import styled from 'styled-components';

export const TransactionsTable = styled.table`
  font-family: ${props => props.theme.fonts.table};
  font-size: ${props => props.theme.fontSizes.m}px;
  border-radius: ${props => props.theme.radii.normal};
  border-spacing: ${props => props.theme.space[0]}px;
  text-align: center;
  overflow: hidden;
  margin-top: ${props => props.theme.space[2]}px;
  margin-left: auto;
  margin-right: auto;
`;

export const TableHead = styled.th`
  background: ${props => props.theme.colors.tableBgcHead};
  color: ${props => props.theme.colors.profileList};
  text-shadow: ${props => props.theme.shadows.tableShadow};
  padding: ${props => props.theme.space[2]}px;

  border-style: ${props => props.theme.borders.table};
  border-width: 0 1px 1px 0;
  border-color: ${props => props.theme.colors.tableBorderColor};

  :first-child {
    text-align: left;
  }

  :last-child {
    border-right: none;
  }
`;

export const TableData = styled.td`
  border-style: ${props => props.theme.borders.table};
  border-width: 0 1px 1px 0;
  border-color: ${props => props.theme.colors.tableBorderColor};
  padding: 10px 20px;
  background: ${props => props.theme.colors.tableBgc};
  width: 100px;

  :first-child {
    text-align: left;
    width: 120px;
  }

  :last-child {
    border-right: none;
  }
`;

export const TableRow = styled.tr`
  :last-child {
    border-right: none;
  }
`;
