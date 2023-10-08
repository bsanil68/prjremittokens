import {
    Container,
    Header,
    Content,
    Footer,
    Form,
    ButtonToolbar,
    Button,
    Navbar,
    Panel,
    FlexboxGrid
  } from 'rsuite';
  import React, { useState } from 'react';
  import axios from 'axios';
  import { useHistory } from 'react-router-dom';
  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
  
    const handleLogin = async () => {
      try {
        // Make a GET request with the credentials in the URL
        const response = await axios.get(`/api/login?username=${username}&password=${password}`);
  
        // Handle the response from the API as needed
        console.log('Response:', response.data);
  
        // Perform actions based on the response
  
        handleLoginSuccess(response.data);
  
      } catch (error) {
        // Handle login failure, show error message, etc.
        console.error('Login failed:', error);
      }
    };
    const getUserData = () => {
      const userJson = sessionStorage.getItem('user');
      return userJson ? JSON.parse(userJson) : null;
    };
    
    const getUsergroupData = () => {
      const usergroupJson = sessionStorage.getItem('usergroup');
      return usergroupJson ? JSON.parse(usergroupJson) : null;
    };
    
    const handleLoginSuccess = (userData) => {
      // After successful login, redirect to the dashboard page
       // Store user and usergroup data in sessionStorage or localStorage
       sessionStorage.setItem('user', JSON.stringify(userData.user));
       sessionStorage.setItem('usergroup', JSON.stringify(userData.usergroup));
  
       // based  on user  and group   redirect  to  specific  dashboard
  
       const user = getUserData();
       const usergroup = getUsergroupData();
       //based  on group   call the  relevant dashboard 
       if(usergroup==="DSAGroup") 
       {
      history.push('/DsaDashboard');
       }
    };
  
  
    return  (
    <div className="show-fake-browser login-page">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Brand>
              <a style={{ color: '#fff' }}><img src='../logo.svg'/></a>
            </Navbar.Brand>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid>
                  <Form.Group>
                    <Form.ControlLabel>Username or email address</Form.ControlLabel>
                    <Form.Control name="name"      
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}                  
                    />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      <Button appearance="primary" onClick={handleLogin}>Sign in</Button>
                      <Button appearance="link">Forgot password?</Button>
                    </ButtonToolbar>
                  </Form.Group>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
        <Footer>Footer</Footer>
      </Container>
    </div>
  )
    }
  
  export default LoginPage;
  