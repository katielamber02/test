import React, { useState } from "react";
import { ADD_PRODUCT } from "../../../../graphql/mobile/mutation";
import { useMutation } from "@apollo/react-hooks";
import { Input, Button, Icon, Item, Container } from "semantic-ui-react";
import { GET_PRODUCTS } from "../../../../graphql/mobile/queries";
import Error from "../../../Error/Error";

const AddProduct = ({ session }) => {
  const [color, setColor] = useState("");
  const [img, setImg] = useState("");
  const [header, setHeader] = useState("");
  const [meta, setMeta] = useState("");
  const [price, setPrice] = useState("");

  const [newProduct, { error, loading }] = useMutation(ADD_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }]
  });

  const addProduct = e => {
    e.preventDefault();
    newProduct({
      variables: { color, img, header, meta, price: parseInt(price) }
    }).then(() => {
      resetInputValues();
    });
  };

  const resetInputValues = () => {
    setColor("");
    setImg("");
    setHeader("");
    setMeta("");
    setPrice("");
  };

  const formValidate = !color && !img && !header && !meta && !price;

  const errorMessage = error ? error.message.split(":")[1] : null;

  return (
    <Container>
      <Item.Group>
        <Item>
          <Item.Image>
            <Icon size="massive" name="plus" />
          </Item.Image>
          <Item.Content>
            <Item.Header>Add Product</Item.Header>
            <Item.Description>
              <Input
                onChange={e => setColor(e.target.value)}
                placeholder="color"
                style={{ marginTop: "5px" }}
                fluid
              />
              <Input
                onChange={e => setImg(e.target.value)}
                placeholder="img"
                style={{ marginTop: "5px" }}
                fluid
              />
              <Input
                onChange={e => setHeader(e.target.value)}
                placeholder="header"
                style={{ marginTop: "5px" }}
                fluid
              />
              <Input
                onChange={e => setMeta(e.target.value)}
                placeholder="meta"
                style={{ marginTop: "5px" }}
                fluid
              />
              <Input
                onChange={e => setPrice(e.target.value)}
                placeholder="price"
                type="number"
                style={{ marginTop: "5px" }}
                fluid
              />
            </Item.Description>
            {error && <Error error={errorMessage} />}
            <Item.Extra>
              <Button
                onClick={e => addProduct(e)}
                color="teal"
                animated="fade"
                loading={loading}
                disabled={formValidate}
              >
                <Button.Content visible>Add</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
};

export default AddProduct;
