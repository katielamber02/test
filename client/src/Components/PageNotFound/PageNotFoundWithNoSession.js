import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class PageNotFoundWithNoSession extends Component {
  componentDidMount = () => setTimeout(() => { this.props.history.push('/') }, 2500);

  render() {
    return (
      <Grid container columns={1}>
        <Grid.Column>
          <div className="pagenotfound-text">
            We don't have a page <br /> like this!
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="pagenotfound-description">
            We are now directing you <br /> to the home page ...
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(PageNotFoundWithNoSession);
