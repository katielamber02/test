import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { UPDATE_COMMENT } from "../../../../../graphql/comment/mutations";
import { Input, Button } from "semantic-ui-react";
import { GET_PRODUCT } from "../../../../../graphql/mobile/queries";

class UpdateCommentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newComment: ""
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  formValidate = () => !this.state.newComment;

  updateCommentFunction = (e, updateComment, loading) => {
    e.preventDefault();
    updateComment().then(() => {
      this.setState({ newComment: "" });
      !loading && this.props.handleClose();
    });
  };

  render() {
    const { productId } = this.props;
    const { newComment } = this.state;

    return (
      <Mutation
        mutation={UPDATE_COMMENT}
        variables={{ comment_id: this.props.comment.id, newComment }}
        refetchQueries={[{ query: GET_PRODUCT, variables: { id: productId } }]}
      >
        {(updateComment, { error, loading }) => {
          if (error) return <div>error...</div>;
          return (
            <>
              <Input action fluid placeholder="type your new comment content">
                <input
                  onChange={this.onChange}
                  name="newComment"
                  value={this.state.newComment}
                  onKeyPress={e =>
                    e.key === "Enter" &&
                    this.updateCommentFunction(e, updateComment, loading)
                  }
                />
                <Button
                  loading={loading}
                  disabled={loading || this.formValidate()}
                  onClick={e =>
                    this.updateCommentFunction(e, updateComment, loading)
                  }
                >
                  Update
                </Button>
              </Input>
            </>
          );
        }}
      </Mutation>
    );
  }
}

export default UpdateCommentInput;
