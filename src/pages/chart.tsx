import { useState, useEffect } from "react"
import { Box } from "@chakra-ui/react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default function LineChart() {
  const [data, setData] = useState([])
  let ohlc = [];
  let dataLength = data.length

  for (let i = 0; i < dataLength; i++) {
    ohlc.push([
      data[i][0], // the date
      data[i][1], // open
      data[i][2], // high
      data[i][3], // low
      data[i][4], // close
    ]);
  }

  useEffect(() => {
    fetch('https://demo-live-data.highcharts.com/aapl-ohlcv.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error(error));
  }, [])

  if (!data) {
    return <div>Loading...</div>;
  }

  const options = {
    rangeSelector: {
      selected: 1
    },

    tooltip: {
      enabled: false
    },


    title: {
      text: 'AAPL Stock Price'
    },

    yAxis: {
      crosshair: {
        snap: false,
        width: 1,
        color: '#000c',
        dashStyle: 'LongDash'
      }
    },

    xAxis: {
      crosshair: {
        width: 1,
        color: '#000c',
        dashStyle: "LongDash"
      }
    },

    series: [{
      type: 'candlestick',
      name: 'AAPL Stock Price',
      data: data,
      dataGrouping: {
        units: [
          [
            'week', // unit name
            [1] // allowed multiples
          ], [
            'month',
            [1, 2, 3, 4, 6]
          ]
        ]
      }
    }]
  };


  return (
    <Box w='100%'>
      <Box w='100%'>HighChart</Box>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </Box>
  )
}