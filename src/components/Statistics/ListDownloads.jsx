import { Item, UlDownloads } from "./ListDownloads.styled";
import PropTypes from 'prop-types';

export const ListDownloads = ({ data }) => (
  <UlDownloads>
    {data.map((stats) => (
      <Item key={stats.id} className="item" style={{ backgroundColor: getRandomHexColor() }}>
        <span className="label">{stats.label} </span>
        <span className="percentage">{stats.percentage}%</span>
      </Item>
    ))}
 </UlDownloads>
);

ListDownloads.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
