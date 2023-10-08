import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import OnBoardIcon from '@mui/icons-material/PersonAddAlt'

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Brand href="#">RSUITE</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1" icon={<OnBoardIcon/>}>
          Support
        </Nav.Item>
        <Nav.Item eventKey="2">Help</Nav.Item>
        <Nav.Item eventKey="3">Products</Nav.Item>
        <Nav.Menu title="About">
          <Nav.Item eventKey="4">Company</Nav.Item>
          <Nav.Item eventKey="5">Centres</Nav.Item>
          <Nav.Item eventKey="6">Contact</Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Logout</Nav.Item>
      </Nav>
    </Navbar>
  );
};

const DSAAppBar = () => {
  const [activeKey, setActiveKey] = React.useState(null);

  return (
    <>
      
      <hr />
      <CustomNavbar appearance="inverse" activeKey={activeKey} onSelect={setActiveKey} />
      
    </>
  );
};
export default DSAAppBar;