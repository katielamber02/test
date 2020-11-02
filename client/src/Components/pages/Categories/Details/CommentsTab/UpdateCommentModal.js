import React from "react";
import { Button, Modal, Header, Icon } from "semantic-ui-react";
import UpdateCommentInput from "./UpdateCommentInput";
import DeleteComment from "./DeleteComment";

class UpdateCommentModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { comment, productId } = this.props;
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Button onClick={this.handleOpen} icon="edit" />}
        closeIcon
      >
        <Header icon="edit" content="Update Your Comment" />
        <Modal.Content>
          <Modal.Description>
            <Header>Update Your Comment</Header>
            <UpdateCommentInput
              handleClose={this.handleClose}
              comment={comment}
              productId={productId}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <DeleteComment comment={comment} productId={productId} />
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default UpdateCommentModal;
