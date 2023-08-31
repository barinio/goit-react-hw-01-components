import PropTypes from 'prop-types';
import { ItemBox, Section, StatsList, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">Upload stats</Title>}
      <StatsList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <ItemBox key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </ItemBox>
          );
        })}
      </StatsList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
