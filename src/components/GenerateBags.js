import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

const GenerateBags = (props) => {
    return (
        <div>
            <h1>Generate Bags</h1>
            <Row className="mt-4">
                <Col className="text-center">
                    <Button size="lg" block>Generate Bags</Button>
                </Col>
            </Row>
        </div>
    );
}

export default GenerateBags;