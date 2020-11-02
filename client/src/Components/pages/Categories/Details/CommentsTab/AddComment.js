import React from "react";
import { Button, Modal, Header, Icon, Form, TextArea } from "semantic-ui-react";
import { ADD_COMMENT } from "../../../../../graphql/comment/mutations";
import { Mutation } from "react-apollo";
import Loading from "../../../../Loading/Loading";
import { GET_PRODUCT } from "../../../../../graphql/mobile/queries";

class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addComment = (e, addComment) => {
    e.preventDefault();
    addComment().then(() => {
      this.setState({ comment: "" });
    });
  };

  formValidate = () => !this.state.comment;

  render() {
    const { product, user_id } = this.props;
    return (
      <Mutation
        mutation={ADD_COMMENT}
        variables={{
          user_id,
          product_id: product.id,
          comment: this.state.comment
        }}
        refetchQueries={[{ query: GET_PRODUCT, variables: { id: product.id } }]}
      >
        {(addComment, { loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <div>error</div>;

          return (
            <Modal
              trigger={
                <Button primary fluid>
                  Add Comment
                </Button>
              }
              closeIcon
            >
              <Header icon="edit" content="Add Comment" />
              <Modal.Content>
                <Modal.Description>
                  <Header>{product.header}</Header>
                  <Form>
                    <TextArea
                      onChange={this.onChange}
                      name="comment"
                      value={this.state.comment}
                      placeholder="Type your comment"
                      style={{ minHeight: 200, maxHeight: 200 }}
                    />
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  loading={loading}
                  disabled={loading || this.formValidate()}
                  onClick={e => this.addComment(e, addComment)}
                  primary
                >
                  Add <Icon name="chevron right" />
                </Button>
              </Modal.Actions>
            </Modal>
          );
        }}
      </Mutation>
    );
  }
}

export default AddComment;
