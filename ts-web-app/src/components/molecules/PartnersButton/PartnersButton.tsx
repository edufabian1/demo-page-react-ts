import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import "../../molecules/PartnersButton/PartnersButton.css";
import { Button, ModalBody, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { IPartnerContract } from "../../models/IPartnerContract";
import * as partnerService from "../../services/PartnerServices";
import { IContract } from "../../models/IContract";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function PartnersButton(props: any): JSX.Element {
  const [newStateModal, setNewStateModal] = useState<boolean>(false);

  const employees = [
    { id: 1, value: "Jorge" },
    { id: 2, value: "Fabian" },
    { id: 3, value: "Eduardo" },
  ];
  //agregar state setStateValues que clase de hook es este chabon
  const [stateOptions] = useState(employees);

  const [newContract, setNewContract] = useState<IContract>({
    cashMonth:0,
    refPartner:"",
    idEmployee:1
  });

  const [newPartner, setNewPartner] = useState<IPartnerContract>({
    nickname: "",
    name: "",
    description: "",
    urlPage: "",
    contract: newContract
  });



  const handleInputChange = (e: InputChange) => {
    setNewPartner({ ...newPartner, [e.target.name]: e.target.value });
  };

  const handleContractInputChange = (e: InputChange) => {
    setNewContract({ ...newContract, [e.target.name]: e.target.value });
    setNewPartner({ ...newPartner, contract: newContract });
  };


  const handleInputNumberChange = (e: InputChange) => {
    setNewContract({
      ...newContract,
      [e.target.name]: Number.parseInt(e.target.value),
    });    
    setNewPartner({ ...newPartner, contract: newContract });
  };

  const handlSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await partnerService.createPartner(newPartner);
    console.log(res);
  };

  return (
    <Fragment>
      <Button
        className="custom-link link-11"
        onClick={() => setNewStateModal(!newStateModal)}
      >
        Nuevo partner
      </Button>
      <Modal isOpen={newStateModal}>
        <form onSubmit={handlSubmit}>
          <ModalHeader>Partner</ModalHeader>
          <ModalBody>
            <div className="form-group form-small-partners">
              <label className="col-sm-3 col-form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nickname"
                placeholder="Enter nickname"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group form-small-partners">
              <label className="col-sm-7 col-form-label">Razon social</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter name"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group form-large-partners">
              <label className="col-sm-3 col-form-label">Descripcion</label>
              <textarea
                className="form-control"
                placeholder="Enter description"
                name="description"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group form-large-partners">
              <label className="col-sm-5 col-form-label">Pagina oficial</label>
              <input
                type="text"
                className="form-control"
                name="urlPage"
                placeholder="Enter page"
                onChange={handleInputChange}
              />
            </div>
            <h3 className="col-sm-5 col-form-label form-large-partners">
              Contratación
            </h3>
            <div className="form-group form-small-partners">
              <label className="col-sm-10 col-form-label">
                Fecha de inicio
              </label>
              <input
                type="date"
                className="form-control"
                name="initDate"
                onChange={handleContractInputChange}
                placeholder="Enter init date"
              />
            </div>
            <div className="form-group form-small-partners">
              <label className="col-sm-10 col-form-label">Fecha de fin</label>
              <input
                type="date"
                className="form-control"
                name="finalDate"
                onChange={handleContractInputChange}
                placeholder="Enter final date"
              />
            </div>
            <div className="form-group form-large-partners">
              <label className="col-sm-7 col-form-label">
                Ingresos mensuales
              </label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  name="cashMonth"
                  onChange={handleInputNumberChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
            </div>
            <div className="form-group form-small-partners">
              <label className="col-sm-3 col-form-label">Referente</label>
              <input
                type="text"
                className="form-control"
                name="refPartner"
                onChange={handleContractInputChange}
                placeholder="Enter Referrer"
              />
            </div>
            <div className="form-group form-small-partners">
              <label className="col-sm-3 col-form-label">Telefono</label>
              <input
                type="number"
                className="form-control"
                name="phone"
                onChange={handleContractInputChange}
                placeholder="Enter Phone"
              />
            </div>

            <div className="form-group form-large-partners">
              <label className="col-sm-3 col-form-label">
                Empleado asignado
              </label>
              <select className="form-control" id="exampleSelect1">
                {stateOptions.map((employee) => (
                  <option key={employee.id}>{employee.value}</option>
                ))}
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-success"
              onClick={() => setNewStateModal(!newStateModal)}
            >
              Aceptar
            </button>
            <Button
              className="btn btn-danger"
              onClick={() => setNewStateModal(!newStateModal)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </Fragment>
  );
}

export default PartnersButton;
