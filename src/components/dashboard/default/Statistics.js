import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';

import {lableList} from '../../../app/routes/dashboard/routes/Misc/data'
import ChartCard from 'components/dashboard/Common/ChartCard';
import Chart from "components/dashboard/default/Chart";

const Statistics = () => {

  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

    return (
      <div className="jr-card p-0">
        <div className="d-flex justify-content-between align-items-center bg-green lighten-1 pt-3 px-4 card-img-top">
          <IconButton className="jr-menu-icon" aria-label="Menu">
            <span className="menu-icon bg-white"/>
          </IconButton>
          <h2 className="text-white mb-0">Statistics</h2>
          <IconButton><i className="zmdi zmdi-eye text-white"/></IconButton>
        </div>
        <ChartCard styleName="bg-green lighten-1 text-white no-shadow border-0 rounded-0 mb-0">
          <div className="chart-title">
            &nbsp;
          </div>

          {value === 0 ?
            <div className='statistics-chartjs'>
              <Chart
                borderColor="#FFF"
                pointBorderColor='#FFF'
                pointBackgroundColor='#FFF'
                height={140}
                pointHoverBorderColor='#4CB050'
                borderWidth={4}
                labels={lableList}
                chartdata={[20, 35, 26, 40, 30, 45, 30, 55]}
              />
              <div className="bg-black d-flex align-items-center justify-content-between py-2">
                {lableList.map((lable, index) => <div key={index}>{lable}</div>)}
              </div>

            </div>
            :
            value === 1 ?
              <div className='statistics-chartjs'>
                <Chart
                  borderColor="#FFF"
                  pointBorderColor='#FFF'
                  pointBackgroundColor='#FFF'
                  height={140}
                  pointHoverBorderColor='#4CB050'
                  borderWidth={4}
                  labels={lableList}
                  chartdata={[30, 16, 32, 20, 44, 70, 50]}
                />
                <div className="bg-black d-flex align-items-center justify-content-between py-2">
                  {lableList.map((lable, index) => <div key={index}>{lable}</div>)}
                </div>

              </div>
              : <div className='statistics-chartjs'>
                <Chart
                  borderColor="#FFF"
                  pointBorderColor='#FFF'
                  pointBackgroundColor='#FFF'
                  height={140}
                  pointHoverBorderColor='#4CB050'
                  borderWidth={4}
                  labels={lableList}
                  chartdata={[40, 25, 55, 40, 44, 70, 40]}
                />
                <div className="bg-black d-flex align-items-center justify-content-between py-2">
                  {lableList.map((lable, index) => <div key={index}>{lable}</div>)}
                </div>
              </div>
          }
        </ChartCard>
        <div className="jr-card-social jr-card-social-around pb-2">
          <ul className="social-link">
            <li onClick={handleChange}>
              <IconButton color={value === 0 ? "primary" : "default"}>
                <i className="zmdi zmdi-timer zmdi-hc-lg"/>
              </IconButton>
            </li>
            <li onClick={handleChange}>
              <IconButton color={value === 1 ? "primary" : "default"}>
                <i className="zmdi zmdi-gesture zmdi-hc-lg"/>
              </IconButton>
            </li>
            <li onClick={handleChange}>
              <IconButton color={value === 2 ? "primary" : "default"}>
                <i className="zmdi zmdi-time-interval zmdi-hc-lg"/>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    )
};

export default Statistics;

