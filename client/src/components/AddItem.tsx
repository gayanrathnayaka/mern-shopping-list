import React, { useState } from "react";
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { ITarget } from "../types/interfaces";
import { addItem } from "../redux/actions/itemActions";

const AddItem = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  // useEffect(() => {
  //   nameRef.current!.focus();
  // }, []);

  return (
    <div>
      <Container>
        {" "}
        <Button
          onClick={() => setModal(!modal)}
          color="dark"
          style={{ marginBottom: "2rem" }}
          className="btnAdd"
        >
          Add Item
        </Button>
        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
          <ModalHeader toggle={() => setModal(!modal)}>
            Add To Shopping List
          </ModalHeader>
          <ModalBody>
            <Form
              onSubmit={(e: any) => {
                e.preventDefault();
                dispatch(
                  addItem({
                    _id: uuid(),
                    name: name,
                  })
                );
                setName("");
                setModal(false);
              }}
            >
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={name}
                  id="item"
                  placeholder="Add shopping item"
                  onChange={(e: ITarget) => setName(e.target.value)}
                />
                <Button
                  disabled={name === ""}
                  color="dark"
                  style={{ marginTop: "2rem" }}
                  block
                >
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    </div>
  );
};

export default AddItem;
