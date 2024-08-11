import React from 'react';
import Popup, { POPUP_TYPE } from './Popup';
import { BarChart } from '@mui/x-charts';
import { COLORS_VIBRANT } from '../utils/colors';
import '../styles/Popup.css';

function PopupWinStats({ showWinStats, toggleShowWinStats }) {
  function getGameStats() {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || {
      totalGamesPlayed: 0,
      tries: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
      loses: 0,
    };

    return gameStats;
  }

  function getData(tries) {
    const totalTries = Object.entries(tries);

    const [dataLabels, dataValues] = totalTries.reduce(
      (acc, [key, value]) => {
        acc[0].push(key);
        acc[1].push(value);
        return acc;
      },
      [[], []]
    );

    return {
      dataLabels,
      dataValues,
    };
  }

  function getColorFills() {
    const colorFills = COLORS_VIBRANT.map((c) => {
      return c.name;
    });

    colorFills.push('white');

    return colorFills;
  }

  function togglePopup() {
    toggleShowWinStats(!showWinStats);
  }

  function renderContent() {
    const { totalGamesPlayed, loses, tries } = getGameStats();
    const { dataLabels, dataValues } = getData(tries);
    const colorFills = getColorFills();

    return (
      <div>
        <div className="popup-header">
          <div>Total Games Played: {totalGamesPlayed}</div>
          <div>Total Losses: {loses}</div>
        </div>
        <div className="container-bar-chart">
          <BarChart
            className="bar-chart"
            xAxis={[
              {
                scaleType: 'band',
                data: dataLabels,
                colorMap: {
                  type: 'ordinal',
                  values: dataLabels,
                  colors: colorFills,
                },
              },
            ]}
            series={[{ data: dataValues }]}
            tooltip={{ trigger: 'none' }}
            borderRadius={10}
            barLabel={(item) => {
              return item.value;
            }}
            axisHighlight={{
              x: 'none',
              y: 'none',
            }}
            sx={{
              '& .MuiChartsAxis-line': {
                display: 'none',
              },
              '& .MuiChartsAxis-tick': {
                display: 'none',
              },
              '& .MuiChartsAxis-tickLabel': {
                stroke: 'white',
              },
              '& .MuiBarLabel-root': {
                stroke: '#202124',
              },
              '& .MuiChartsAxis-left': {
                display: 'none',
              },
              '& .MuiPopper-root': {
                display: 'none',
              },
            }}
          />
        </div>
        <div className="popup-footer">Number of Tries</div>
      </div>
    );
  }
  return (
    <Popup
      type={POPUP_TYPE.WIN_STATS}
      onRenderContent={renderContent()}
      onClosePopup={togglePopup}
    />
  );
}

export default PopupWinStats;
