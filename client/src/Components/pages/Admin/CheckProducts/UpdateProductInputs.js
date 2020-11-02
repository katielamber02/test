import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { UPDATE_PRODUCT } from "../../../../graphql/mobile/mutation";
import { useMutation } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../../../graphql/mobile/queries";
import Error from "../../../Error/Error";

const UpdateProductInputs = ({ setModalOpen, id }) => {
  const [color, setColor] = useState("");
  const [img, setImg] = useState("");
  const [header, setHeader] = useState("");
  const [meta, setMeta] = useState("");
  const [price, setPrice] = useState(0);

  const [updateProduct, { error, loading }] = useMutation(UPDATE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }]
  });

  const onUpdateProduct = e => {
    e.preventDefault();
    updateProduct({
      variables: { id, color, img, header, meta, price: parseInt(price) }
    }).then(() => {
      resetInputValues();
      !loading && setModalOpen(false);
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
    <>
      <Input
        style={{ marginTop: "10px" }}
        fluid
        placeholder="color"
        onChange={e => setColor(e.target.value)}
      />
      <Input
        style={{ marginTop: "10px" }}
        fluid
        placeholder="img"
        onChange={e => setImg(e.target.value)}
      />
      <Input
        style={{ marginTop: "10px" }}
        fluid
        placeholder="header"
        onChange={e => setHeader(e.target.value)}
      />
      <Input
        style={{ marginTop: "10px" }}
        fluid
        placeholder="meta"
        onChange={e => setMeta(e.target.value)}
      />
      <Input
        style={{ marginTop: "10px" }}
        fluid
        placeholder="price"
        onChange={e => setPrice(e.target.value)}
      />
      <Error error={errorMessage} />
      <Button
        loading={loading}
        disabled={formValidate}
        onClick={e => onUpdateProduct(e)}
        style={{ marginTop: "10px" }}
        basic
        color="green"
        content="Update"
      />
    </>
  );
};

export default UpdateProductInputs;
