import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BirthDataService from "../services/birth.services";

const BirthList = ({ getBirthId,id,setBirthId }) => {
  const [birth, setBirth] = useState([]);
  useEffect(() => {
    getBirth();
  }, [id]);

  const getBirth = async () => {
    const data = await BirthDataService.getAllBirth();
    console.log(data.docs);
    setBirth(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  

  const deleteHandler = async (id) => {
    await BirthDataService.deleteBirth(id);
    // await BirthDataService.getBirth(id);
    getBirth();
  };
  return (
    <>


      <div className="mb-2">
        <Button variant="dark edit" onClick={getBirth}>
          Refresh 
        </Button>
      </div>

      
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Flavour</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Size in pounds</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {birth.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.dob}</td>
                <td>{doc.flavour}</td>
                <td>{doc.address}</td>
                <td>{doc.contact}</td>
                <td>{doc.pounds}</td>
                <td>
                  {/* <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBirthId(doc.id)}
                  >
                    Edit
                  </Button> */}
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default BirthList;
