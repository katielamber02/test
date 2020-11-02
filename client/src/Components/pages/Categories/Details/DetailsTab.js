import React from "react";
import { Tab } from "semantic-ui-react";
import DescriptionTab from "./DescriptionTab/DescriptionTab";
import CommentsTab from "./CommentsTab/CommentsTab";

const DetailsTab = ({ activeUser, loading, comments, product }) => {
  const panes = [
    {
      menuItem: {
        key: "description",
        icon: "write",
        content: "Description"
      },
      render: () => <DescriptionTab />
    },
    {
      menuItem: { key: "comments", icon: "comment", content: "Comments" },
      render: () => (
        <CommentsTab
          activeUser={activeUser}
          loading={loading}
          comments={comments}
          product={product}
        />
      )
    }
  ];

  return <Tab panes={panes} />;
};

export default DetailsTab;
