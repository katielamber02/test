import React from "react";
import { Item, Header, Divider, Container } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../../../graphql/mobile/queries";
import Loading from "../../../Loading/Loading";
import Error from "../../../Error/Error";
import NoProductMessage from "./NoProductMessage";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

const ListingProducts = ({ session }) => {
  const { data, error, loading } = useQuery(GET_PRODUCTS);

  const errorMessage = error ? error.message.split(":")[1] : null;

  if (loading) return <Loading />;
  if (error) return <Error error={errorMessage} />;

  return (
    <Container>
      <Header as="h1" textAlign="center" content="All Products" />
      <Divider />
      {!data.products || data.products.length === 0 ? (
        <NoProductMessage />
      ) : (
        <Item.Group divided>
          {data &&
            data.products.map(product => (
              <Item key={product.id}>
                <Item.Image size="tiny" src={product.img} />
                <Item.Content>
                  <Item.Header as="b">{product.header}</Item.Header>
                  <Item.Meta>{product.meta}</Item.Meta>
                  <Item.Description>${product.price}</Item.Description>
                  <DeleteProduct id={product.id} />
                  <UpdateProduct product={product} />
                </Item.Content>
              </Item>
            ))}
          <Divider />
        </Item.Group>
      )}
    </Container>
  );
};

export default ListingProducts;
