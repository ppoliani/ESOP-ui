import React from 'react';

import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import ContractUtils from '../ContractUtils'

export default ({RoTAddress, ESOPAddress, networkId}) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h2>Contract addresses:</h2>
                    <Table selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow >
                                <TableRowColumn>Root of trust</TableRowColumn>
                                <TableRowColumn>
                                    {RoTAddress}
                                    <a className="inline_link" target="_blank" href={ContractUtils.formatEtherscanUrl(RoTAddress, networkId)}>
                                        <FontIcon className="material-icons material_icon_table">link</FontIcon></a>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>ESOP contract</TableRowColumn>
                                <TableRowColumn>
                                    {ESOPAddress}
                                    <a className="inline_link" target="_blank" href={ContractUtils.formatEtherscanUrl(ESOPAddress, networkId)}>
                                        <FontIcon className="material-icons material_icon_table">link</FontIcon></a>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}