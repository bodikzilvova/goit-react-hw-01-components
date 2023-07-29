import { StatisticsSection } from './Statistics.styled';

import { ListDownloads } from './ListDownloads';
import data from './data.json';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    {title && <h2 className="title">{title}</h2>}

    <ListDownloads data={data} />
  </StatisticsSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
