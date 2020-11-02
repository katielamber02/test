import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import './Home.css';

const Home = () => (
  <Grid className="home" stackable divided="vertically" container={true}>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header textAlign="center" className="welcome">
              WELCOME
            </Header>
          </Grid.Column>
          <hr className="home-hr" />
          <Grid.Column>
            <Header textAlign="center" sub>
              Join & Start E-commerce
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column>
        <Image centered src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Home;
