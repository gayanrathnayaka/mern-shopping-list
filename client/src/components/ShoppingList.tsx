import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { IReducerItem } from "../types/interfaces";
import { deleteItem, getItems } from "../redux/actions/itemActions";
import { ToastContainer } from "react-toastify";

const ShoppingList = () => {
  //const [items, setItems] = useState([]);

  const { items }: IReducerItem = useSelector((state: any) => state.item);
  const dispatch = useDispatch();
  //dispatch(setItemsLoading());
  dispatch(getItems());

  return (
    <Container>
      <ToastContainer position={"bottom-right"} autoClose={2000} />
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => dispatch(deleteItem(_id))}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
