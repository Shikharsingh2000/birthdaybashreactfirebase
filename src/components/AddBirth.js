import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BirthDataService from "../services/birth.services";
import validator from "validator";

const AddBirth = ({ id, setBirthId }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [flavour, setFlavour] = useState("Chocolate");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [pounds, setPounds] = useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [errorMessage, setErrorMessage] = useState();

  const [birth, setBirth] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || dob === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBirth = {
      name,
      dob,
      flavour,
      address,
      contact,
      pounds,
    };
    console.log(newBirth);

    try {
      if (id !== undefined && id !== "") {
        await BirthDataService.updateBirth(id, newBirth);
        setBirthId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BirthDataService.addBirth(newBirth);
        setMessage({ error: false, msg: "New Customer added successfully!" });
        // my code
       
        
        // code end
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setDob("");
    setAddress("");
    setContact("");
    setPounds("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BirthDataService.getBirth(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setDob(docSnap.data().dob);
      setFlavour(docSnap.data().flavour);
      setAddress(docSnap.data().address);
      setContact(docSnap.data().contact);
      setPounds(docSnap.data().pounds);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  const validateDate = (value) => {
    if (validator.isDate(value)) {
      setErrorMessage("Valid Date :)");
    } else {
      setErrorMessage("Enter Valid Date!");
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  //my code

  useEffect(() => {
    getBirth();
  }, [id]);

  const getBirth = async () => {
    const data = await BirthDataService.getAllBirth();
    console.log(data.docs);
    setBirth(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addHandler=async(id)=>{
    await BirthDataService.getBirth(id);
    getBirth();
  }

  // end

  

  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">N</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">D</InputGroup.Text>
              <Form.Control
                type="date"
                placeholder="DOB"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  validateDate(e.target.value);
                  // setDate(e.target.value);
                }}
              />
              
            </InputGroup>
          </Form.Group>
          <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {errorMessage}
              </span>
          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">S</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Size in pounds"
                value={pounds}
                onChange={(e) => setPounds(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setFlavour("Chocolate");
                setFlag(true);
              }}
            >
              Chocolate
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setFlavour("Vanilla");
                setFlag(false);
              }}
            >
              Vanilla
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" >
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddBirth;
