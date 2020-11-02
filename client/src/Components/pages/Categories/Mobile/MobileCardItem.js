import React, { Component } from "react";
import { Grid, Divider, Card, Image } from "semantic-ui-react";
import AddCartButton from "./AddCartButton";
import { NavLink } from "react-router-dom";

class MobileCardItem extends Component {
  render() {
    const {
      user_id,
      id,
      color,
      img,
      header,
      meta,
      price,
      activeUser
    } = this.props;
    return (
      <Grid.Column>
        <Card centered color={color}>
          <NavLink to={`/categories/details/${id}`}>
            <Image src={img} />
          </NavLink>
          <Divider />
          <Card.Content>
            <Card.Header>{header}</Card.Header>
            <Card.Meta>{meta}</Card.Meta>
            <Card.Description>${price}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <AddCartButton
              user_id={user_id}
              id={id}
              color={color}
              img={img}
              header={header}
              meta={meta}
              price={price}
              activeUser={activeUser}
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default MobileCardItem;
