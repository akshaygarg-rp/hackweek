import React from 'react';
import './ModelView.css';
import { Table, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModelView(props) {
    const renderModelPermissions = () => {
        return (
            <>
                <div className='padding-top-8'></div>
                <h5>Model permissions</h5>

                <div className='padding-top-8'>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Action type</th>
                                <th>Source class</th>
                                <th>Type</th>
                                <th>Required name</th>
                                <th>Required expr</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                let rows = [];
                                for(const [key, value] of Object.entries(props.model.permissions)) {
                                    rows.push(
                                        <tr>
                                            <td>{key}</td>
                                            <td>{value.source.class}</td>
                                            <td>{value.type}</td>
                                            <td>{value.required.name}</td>
                                            <td>{value.required.expr}</td>
                                        </tr>
                                    );
                                }
                                return rows;
                            })()}
                        </tbody>
                    </Table>
                </div>
            </>
        );
    }

    const renderFieldPermissions = () => {
        return (
            <>
                <div className='padding-top-8'></div>
                <h5>Field permissions</h5>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Field Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Field Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
        );
    }

    return (
        <div className='modelview-container'>
            The source class is <b>{props.model.source.class}</b>
            {renderModelPermissions()}
            {renderFieldPermissions()}
        </div>
        
      );
}

export default ModelView;