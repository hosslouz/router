// add a ModalInput movie card description contains : 1 : title , 2 : description , 3 : posteUrl , 4 : rate, 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Modal,Form} from "react-bootstrap"
import { useState } from "react"



function Add (props){
  
    const [show, setShow] = useState(false);
  
    const [rating, setRating] = useState();
    const [newMovie,setNewMovie]= useState({
        Title:"",
        Description:"",
        PosterURL:"",
        Rating:""
    })
      const handleClose = () => setShow(false);
      const handleShow = () =>  setShow(true);


      const handleAdd = () => {
       
        props.addMovie(newMovie)
        handleClose()
      };
      const handleChange=(e)=>setNewMovie({...newMovie,[e.target.name]:e.target.value}); 
  
      
 return (
   <>
      <Button variant="primary" className="add" onClick={handleShow}>
       Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD a Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
              <Form.Group>
               
                  
                <Form.Label>  Title </Form.Label>
                <Form.Control 
                name= "Title"
                placeholder="Movie title"
                autoFocus
                onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                type="text"
                name="Description"
                placeholder="Movie descrition"
                autoFocus
                onChange={handleChange} 
                />
              </Form.Group>
             
              <Form.Group>
                <Form.Label>PosterURL</Form.Label>
                <Form.Control
                type="text"
                name="PosterURL"
                placeholder="Movie poster"
                autoFocus
                onChange={handleChange}
                />
              </Form.Group>
             

              <Form.Group>
                <Form.Label>Rate</Form.Label>
                <Form.Control 
                type="text"
                name="Rating"
                placeholder="Movie rate"
                autoFocus
                onChange={handleChange}
                />
              </Form.Group>
            </Form>
            
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close 
          </Button>
          <Button variant="success" onClick={handleAdd}>
           Add changes
          </Button>
        </Modal.Footer>
      </Modal>
   </>
 );
}

export default Add;
