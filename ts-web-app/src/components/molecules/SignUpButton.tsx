import React, { Fragment, useState } from "react";
import "../organisms/LinkButton.css";
import {
  Button,
  ModalBody,
  Modal,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "reactstrap";

function SignUp(props: any): JSX.Element {
  const [newStateModal, setNewStateModal] = useState<boolean>(false);
  return (
    <Fragment>
      <Button
        className="custom-link link-11"
        onClick={() => setNewStateModal(!newStateModal)}
      >
        CREAR CUENTA
      </Button>

      <Modal isOpen={newStateModal}>
        <ModalHeader>Sign up</ModalHeader>
        <ModalBody>
          <FormGroup>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername1"
                aria-describedby="UsernameHelp"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-success"
            onClick={() => setNewStateModal(!newStateModal)}
          >
            Create account
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => setNewStateModal(!newStateModal)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}

export default SignUp;
