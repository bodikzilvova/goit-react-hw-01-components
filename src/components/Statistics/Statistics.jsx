import {
    StatisticsSection,
  } from './Statistics.styled';

import { ListDownloads } from './ListDownloads';
import data from './data.json';
  
  export const Statistics = ({ title, stats }) => (
    <StatisticsSection>
   {title && <h2 className="title">{title}</h2>}

 <ListDownloads data={data} />

</StatisticsSection>
  );