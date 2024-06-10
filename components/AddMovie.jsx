import React, { useState} from 'react';
import {Button , Modal , Form} from "react-bootstrap"

const AddMovie = (addMovie) => {
    const [show, setShow] = useState(false);
    const [title , setTitle] =useState("");
    const [description , setdescription] = useState("");
    const [poster_url , setposter_url] = useState("");
    const [date , setdate] = useState("");
    const [ringat , setringat] = useState(0);

    const newMovie = {id:Math.random(), title , description , poster_url , date , ringat}

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return (
    
        <>
        <Button variant="primary" onClick={handleShow}>
        Add Movie
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Enter Movie Detalis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
        <Form.Label>titel</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie titel" onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Description :</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Description"onChange={(e)=>description(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Poster_URL :</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Poster_URL" onChange={(e)=>setposter_url(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>date :</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie date"onChange={(e)=>setdate(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>ringat :</Form.Label>
        <Form.Control type="number" max={5} min={1} onChange={(e)=>setringat(e.target.value)}/>
        </Form.Group>
        
    </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={()=>{addMovie(newMovie); handleClose()}}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </>

  )
}

export default AddMovie
