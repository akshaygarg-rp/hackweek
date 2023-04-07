import React from 'react';
import './ModelView.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModelView(props) {
    const modelPermissions =  Object.entries(props.model.permissions);
    const fieldEntries =  Object.entries(props.model.fields);
    const fieldRows = Object.values(props.model.fields).reduce((acc, field) => {
        acc += Object.values(field.permissions).length;
        return acc;
    }, 0);

    const numberOfRows = modelPermissions.length + fieldRows;
    let model = [];
    // model name, source class, type of permission(model/field), field name, actionType, source class, type, required name, required expr 

    // rowspan would be applied on "type of permission" and "model name", field name
    return (
        <>
            {
                (() => {
                    for(let i=0; i<modelPermissions.length; i++) {
                        model.push(
                            <tr>
                                {i===0 && <td rowSpan={numberOfRows}>{props.model.name}</td>}
                                {i===0 && <td rowSpan={numberOfRows}>{props.model.source.class}</td>}
                                {i===0 && <td rowSpan={modelPermissions.length}>Model</td>}
                                <td>N/A</td>
                                <td>{modelPermissions[i][0]}</td>
                                <td>{modelPermissions[i][1].source.class}</td>
                                <td>{modelPermissions[i][1].type}</td>
                                <td>{modelPermissions[i][1].required.name}</td>
                                <td>{modelPermissions[i][1].required.expr}</td>
                            </tr>
                        )
                    }

                    // for every field, we run a loop for permissions
                    for(let i=0; i<fieldEntries.length; i++) {
                        const fieldPermissions = Object.entries(fieldEntries[i][1].permissions);
                        
                        for (let j=0; j<fieldPermissions.length; j++) {
                            model.push(
                                <tr class="success">
                                    {i===0 && j===0 && <td rowSpan={fieldRows}>Field</td>}

                                    {/* field name at the start of field permissions chunk */}
                                    {j===0 && <td rowSpan={fieldPermissions.length}>{fieldEntries[i][0]}</td>}

                                    {/* field permission name for every row */}
                                    <td>{fieldPermissions[j][0]}</td>
                                    <td>{fieldPermissions[j][1].source.class}</td>
                                    <td>{fieldPermissions[j][1].type}</td>
                                    <td>{fieldPermissions[j][1].required.name}</td>
                                    <td>{fieldPermissions[j][1].required.expr}</td>
                                </tr>
                            )
                        }
                        
                    }

                    return model;
                })()
            }
        </>
      );
}

export default ModelView;