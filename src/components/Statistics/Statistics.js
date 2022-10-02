import PropTypes from 'prop-types';
import { StatsTitle, StatsList, StatsListItem } from './Statistics.styled';
import { Box } from '../Box';

const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      bg="background"
      width="346px"
      borderRadius="10px"
      ml="auto"
      mr="auto"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p={2}
    >
      {title && <StatsTitle> {title} </StatsTitle>}
      <StatsList>
        {stats.map(stat => (
          <StatsListItem key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </StatsListItem>
        ))}
      </StatsList>
    </Box>
  );
};

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
