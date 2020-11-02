import React from "react";
import { Tab, List, Message, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import AddComment from "./AddComment";
import UpdateCommentModal from "./UpdateCommentModal";

const CommentsTab = ({ activeUser, loading, comments, product }) => (
  <Tab.Pane loading={loading}>
    <List divided>
      {!comments || comments.length === 0 ? (
        <Message
          style={{ border: "1px solid black" }}
          icon="question"
          header="There is no comment about this product!"
          content="Let's add one!"
        />
      ) : null}
      {comments.find(comment => comment.user_id === activeUser.id) ? null : (
        <AddComment product={product} user_id={activeUser.id} />
      )}
      {comments.map(comment => (
        <List.Item key={comment.id} style={{ padding: "20px" }}>
          <List.Content>
            <Message icon>
              <Icon name="user circle" />
              <Message.Content>
                <Message.Header>
                  {comment.user.name} {comment.user.surname}
                  {comment.user_id === activeUser.id && (
                    <span style={{ opacity: "0.5" }}> (your comment)</span>
                  )}
                </Message.Header>
                <div>{comment.comment}</div>
                <Moment
                  style={{ opacity: "0.7" }}
                  fromNow
                  date={comment.createdAt}
                />
              </Message.Content>
              {activeUser.id === comment.user_id && (
                <List.Item>
                  <UpdateCommentModal
                    comment={comment}
                    productId={product.id}
                  />
                </List.Item>
              )}
            </Message>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </Tab.Pane>
);

export default CommentsTab;
