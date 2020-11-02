import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../../Loading/Loading";
import { GET_PRODUCT } from "../../../../graphql/mobile/queries";
import { Container, Card, Image, List } from "semantic-ui-react";
import DetailsTab from "./DetailsTab";
import AddCartButton from "../Mobile/AddCartButton";

const Details = ({ activeUser }) => {
  const itemId = window.location.pathname.split("/")[3];
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id: itemId }
  });

  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;

  const { id, color, img, header, meta, price, comments } = data.product;
  const product = { id, color, img, header, meta, price, comments };

  return (
    <Container>
      <Card centered fluid color={color}>
        <List divided relaxed verticalAlign="middle">
          <List.Item>
            <Image style={{ padding: "10px" }} size="big" src={img} />
            <List.Content>
              <List.Header as="h2">{header}</List.Header>
              <List.Description>{meta}</List.Description>
              <List.Description as="b">{price}$</List.Description>
            </List.Content>
          </List.Item>
          <List.Item style={{ marginBottom: "5px" }}>
            <AddCartButton
              user_id={activeUser.id}
              id={id}
              color={color}
              img={img}
              header={header}
              meta={meta}
              price={price}
              activeUser={activeUser}
            />
          </List.Item>
        </List>
      </Card>
      <Card style={{ marginBottom: "20px" }} fluid>
        <DetailsTab
          activeUser={activeUser}
          loading={loading}
          comments={comments}
          product={product}
        />
      </Card>
    </Container>
  );
};

export default Details;
