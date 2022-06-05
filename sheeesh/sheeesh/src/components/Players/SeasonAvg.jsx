

function SeasonAvg({item}) {
  return (
    <div className="seasonavg">
    <h4>Season Averages for Season {item?.season}</h4>
    <table className="seasonavg-table">
    <thead>
    <tr>
      <th>MIN</th>
      <th>FGM</th>
      <th>FGA</th>
      <th>FG3M</th>
      <th>FG3A</th>
      <th>FTM</th>
      <th>FTA</th>
      <th>OREB</th>
      <th>DREB</th>
      <th>REB</th>
      <th>AST</th>
      <th>STL</th>
      <th>BLK</th>
      <th>TRNOVR</th>
      <th>PF</th>
      <th>PTS</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{item?.min}</td>
      <td>{item?.fgm}</td>
      <td>{item?.fga}</td>
      <td>{item?.fg3m}</td>
      <td>{item?.fg3a}</td>
      <td>{item?.ftm}</td>
      <td>{item?.fta}</td>
      <td>{item?.oreb}</td>
      <td>{item?.dreb}</td>
      <td>{item?.reb}</td>
      <td>{item?.ast}</td>
      <td>{item?.stl}</td>
      <td>{item?.blk}</td>
      <td>{item?.turnover}</td>
      <td>{item?.pf}</td>
      <td>{item?.pts}</td>
    </tr>
    </tbody>
    </table>
    </div>
  );
}

export default SeasonAvg;
