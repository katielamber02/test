import React from "react";
import { Grid, Container } from "semantic-ui-react";
import MobileCardItem from "./MobileCardItem";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../../../../graphql/mobile/queries";
import Loading from "../../../Loading/Loading";
import NoProductMessage from "./NoProductMessage";

const MobileCard = ({ activeUser }) => {
  const { data, error, loading } = useQuery(GET_PRODUCTS);

  if (loading) return <Loading />;
  if (error) return <div>error...</div>;

  return (
    <>
      {!data.products || data.products.length === 0 ? (
        <Container>
          <NoProductMessage />
        </Container>
      ) : (
        <Grid centered container columns={3} stackable>
          {data.products.map(({ id, color, img, header, meta, price }) => (
            <Grid.Column key={id}>
              <MobileCardItem
                user_id={activeUser.id}
                id={id}
                color={color}
                img={img}
                header={header}
                meta={meta}
                price={price}
                activeUser={activeUser}
              />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </>
  );
};

export default MobileCard;
