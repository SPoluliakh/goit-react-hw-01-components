import PropTypes from 'prop-types';
import { StatsTitle, StatsList, StatsListItem } from './Statistics.styled';
import { Box } from '../Box';

const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      bg="profile"
      width="360px"
      borderRadius="normal"
      ml="auto"
      mr="auto"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      pb={0}
      boxShadow="boxShadow"
    >
      {title && <StatsTitle> {title} </StatsTitle>}
      {title ? (
        <StatsList>
          {stats.map(stat => (
            <StatsListItem key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </StatsListItem>
          ))}
        </StatsList>
      ) : (
        <StatsList noTitle>
          {stats.map(stat => (
            <StatsListItem noTitle key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </StatsListItem>
          ))}
        </StatsList>
      )}
    </Box>
  );
};

{
  /* <StatsList>
  {stats.map(stat => (
    <StatsListItem key={stat.id}>
      <span>{stat.label}</span>
      <span>{stat.percentage}%</span>
    </StatsListItem>
  ))}
</StatsList>; */
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
