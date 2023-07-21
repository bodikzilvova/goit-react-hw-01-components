import { List, UlDownloads } from "./ListDownloads.styled";

export const ListDownloads = ({ data }) => (
  <UlDownloads>
    {data.map((stats) => (
      <List key={stats.id} className="item">
        <span className="label">{stats.label} </span>
        <span className="percentage">{stats.percentage}%</span>
      </List>
    ))}
 </UlDownloads>
);