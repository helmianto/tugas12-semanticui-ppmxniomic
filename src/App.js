import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Placeholder, Icon, Segment, List, Grid, Input, Form, Divider, Flag, Image, Header, Checkbox, Loader, Container } from 'semantic-ui-react';

class App extends Component {
  render(){
    return (
      <div>
        <br />
        <Container textAlign='center'>
          <Header as='h2' color='teal'>
            <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' /> Member Login
          </Header>
        </Container>
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <Form >
                  <Form.Field>
                    <Input icon='user' iconPosition='left' placeholder='Username' />
                  </Form.Field>
                  <Form.Field>
                    <Input icon='lock' iconPosition='left' placeholder='Password' />
                  </Form.Field>
                  <Form.Field fluid>
                    <Checkbox label='I agree to the Terms and Conditions' />
                  </Form.Field>
                  <Button type='submit' color='teal' fluid>Login</Button>
                </Form>
                
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column width={6}>
              <Segment textAlign='center'>
                <p>Tidak Punya Akun? Silahkan <a href='https://niomic.com'>Register</a></p>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
        </Grid>
        
      </div>
    );
  }
}

export default App;
