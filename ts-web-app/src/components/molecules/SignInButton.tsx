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

function Login(props: any): JSX.Element {
  const [newStateModal, setNewStateModal] = useState<boolean>(false);
  return (
    <Fragment>
      <Button
        className="custom-link link-11"
        onClick={() => setNewStateModal(!newStateModal)}
      >
        INICIAR SESION
      </Button>

      <Modal isOpen={newStateModal}>
        <ModalHeader>Sign in</ModalHeader>
        <ModalBody>
          <FormGroup>
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
            Login
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

export default Login;
