import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Icon } from "semantic-ui-react";

const PageNotFoundWithSession = () => (
  <Grid container columns={1}>
    <Grid.Column>
      <div className="pagenotfound-text">
        We don't have a page <br /> like this but <br /> millions Product here!
      </div>
    </Grid.Column>
    <Grid.Column>
      <div className="pagenotfound-description">
        Page removed or changed can. <br /> Want to look for something else?
      </div>
    </Grid.Column>
    <Grid.Column>
      <div className="pagenoutfound-our-categories">
        Our Categories <br />
      </div>
      <div className="pagenotfound-button-group">
        <Link to="/categories/mobile">
          <Button color="violet" size="large" animated>
            <Button.Content visible>Mobile</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Link>{" "}
        &nbsp; &nbsp;
        <Link to="/categories/computer">
          <Button color="violet" size="large" animated>
            <Button.Content visible>Computer</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Link>{" "}
        &nbsp; &nbsp;
        <Link to="/categories/television">
          <Button color="violet" size="large" animated>
            <Button.Content visible>Television</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Link>{" "}
        &nbsp; &nbsp;
      </div>
    </Grid.Column>
    <Grid.Column>
      <Link to="/">
        <Button size="large" animated="vertical">
          <Button.Content hidden>Home</Button.Content>
          <Button.Content visible>
            <Icon name="home" />
          </Button.Content>
        </Button>
      </Link>
    </Grid.Column>
  </Grid>
);

export default PageNotFoundWithSession;
