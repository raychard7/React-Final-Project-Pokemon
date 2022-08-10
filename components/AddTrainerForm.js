import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

 const AddTrainerForm = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formTrainer">
      <Form.Label>Trainer Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Trainer Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formPokemon">
      <Form.Label>Pokemon</Form.Label>
      <Form.Control type="password" placeholder="Enter Pokemon name" />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default AddTrainerForm