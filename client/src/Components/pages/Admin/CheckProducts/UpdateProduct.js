import React, { useState } from "react";
import { Button, Modal, Header, Icon } from "semantic-ui-react";
import UpdateProductInputs from "./UpdateProductInputs";

const UpdateProduct = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      trigger={
        <Button
          onClick={() => setModalOpen(true)}
          basic
          color="green"
          icon="edit outline"
          floated="right"
        />
      }
      closeIcon
    >
      <Header icon="edit" content="Update Product" />
      <Modal.Content>
        <Modal.Description>
          <Header>Update Product ({product.header})</Header>
          <UpdateProductInputs setModalOpen={setModalOpen} id={product.id} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" onClick={() => setModalOpen(false)}>
          <Icon name="delete" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UpdateProduct;
