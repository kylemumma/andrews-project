import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

const AddNewDonations = (props) => {
    return (
        <div>
            <h1>Add New Donations</h1>
            <Row>
                <Form width="100%" onSubmit={props.onSubmit}>
                    <Form.Control id="itemName" className="my-2" type="text" placeholder="Item Name" onChange={props.onChange}/>
                    <Form.Control id="quantity" className="my-2" type="number" placeholder="Quantity" onChange={props.onChange}/>
                    <Form.Control id="expirationDate" className="my-2" type="date" placeholder="Expiration Date" onChange={props.onChange}/>
                    <Form.Control id="category" as="select" onChange={props.onChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    <Form.Control id="donationSource" className="my-2" type="text" placeholder="Donation Source" onChange={props.onChange}/>

                    <Button className="my-2" variant="primary" type="submit">Submit</Button>
                </Form>
            </Row>
        </div>
    );
}

export default AddNewDonations;