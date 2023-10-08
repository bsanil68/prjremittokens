import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { Doughnut } from 'react-chartjs-2';

/** 
const data1 = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['red', 'blue', 'yellow'],
    },
  ],
};

const data2 = {
  labels: ['Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [150, 200, 80],
      backgroundColor: ['green', 'purple', 'orange'],
    },
  ],
};

const data3 = {
  labels: ['Cyan', 'Magenta', 'Lime'],
  datasets: [
    {
      data: [70, 50, 180],
      backgroundColor: ['cyan', 'magenta', 'lime'],
    },
  ],
};

const data4 = {
  labels: ['Gray', 'Brown', 'Pink'],
  datasets: [
    {
      data: [120, 80, 100],
      backgroundColor: ['gray', 'brown', 'pink'],
    },
  ],
};
*/


const FourPieCharts = ({ apiUrls }) => {

 // Store data for each API URL in an object
 const [dataByApi, setDataByApi] = useState({});
 
 useEffect(() => {
  const fetchData = async () => {
    try {
      const updatedDataByApi = {};

      // Iterate through the array of API URLs
      for (const apiUrl of apiUrls) {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const jsonData = await response.json();
          updatedDataByApi[apiUrl] = jsonData; // Store data by API URL
        } else {
          console.error(`Failed to fetch data from ${apiUrl}`);
        }
      }

      // Update the state with the new data
      setDataByApi(updatedDataByApi);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [apiUrls]);

  return (
    <Grid>
      <Row gutter={16}>
        <Col xs={12} md={6}>
          <Doughnut data={data1} />
        </Col>
        <Col xs={12} md={6}>
          <Doughnut data={data2} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={12} md={6}>
          <Doughnut data={data3} />
        </Col>
        <Col xs={12} md={6}>
          <Doughnut data={data4} />
        </Col>
      </Row>
    </Grid>
  );
};

export default FourPieCharts;
