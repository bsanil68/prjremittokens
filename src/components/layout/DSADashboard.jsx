import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav } from 'rsuite';

import CardGrid from '../contents/DSAContent/cardgrid';
import FourPieCharts from '../contents/DSAContent/FourPieCharts';


const DSADashboard = () => {
  const [expand, setExpand] = React.useState(true);
  return (
    
    <div>
    <Grid fluid>
      {/* First Row: Component1 */}
      <Row gutter={16}>
        <Col xs={24} md={6}>
          <CardGrid/>
        </Col>
 
      </Row>

      {/* Second Row: Component2 */}
      <Row gutter={16}>
        <Col xs={24} md={6}>
          <FourPieCharts />
        </Col>
    
      </Row>

      {/* Third Row: Component3 */}
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Component3 />
        </Col>
        <Col xs={24} md={12}>
          <Component3 />
        </Col>
      </Row>
    </Grid>
  </div>
);
};

export default DSADashboard;