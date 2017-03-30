import React from 'react';
import './Esop.scss';

import chart from '../images/esop_chart.jpg';

import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';

export default class Esop extends React.Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div className="esop">
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <h1>Neufund ESOP details</h1>
                    </div>
                    <div className="col-xs-12 col-md-7 read_more">
                        <RaisedButton className="read_more_button" label="Read more what ESOP is" onTouchTap={this.handleOpen}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <h2>Contract addresses:</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <Table selectable={false}>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow >
                                    <TableRowColumn>Root of trust</TableRowColumn>
                                    <TableRowColumn><FontIcon onClick={() => alert("well it's not working ;)")} className="material-icons copy_icon">content_copy</FontIcon> 0x0046adE103035E8d9B1E8143Ec077F7cfcB47c2f</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>ESOP contract</TableRowColumn>
                                    <TableRowColumn><FontIcon  onClick={() => alert("well it's not working ;)")} className="material-icons copy_icon">content_copy</FontIcon> 0x0046adE103035E8d9B1E8143Ec077F7cfcB47c2f</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <h2>Contract parameters:</h2>
                    </div>
                </div>

                <div className="row">
                    <Tabs>
                        <Tab label="Parameters">
                            <div className="col-xs-12 contract_parameters">
                                <TextField floatingLabelText="cliff duration" className="contract_parameter"
                                           value="1 year" disabled={true}/>
                                <TextField floatingLabelText="vesting duration" className="contract_parameter"
                                           value="4 years" disabled={true}/>
                                <TextField floatingLabelText="max fadeout promille" className="contract_parameter"
                                           value="20%" disabled={true}/>
                                <TextField floatingLabelText="exit bonus promille" className="contract_parameter"
                                           value="25%" disabled={true}/>
                                <TextField floatingLabelText="new employee pool promille" className="contract_parameter"
                                           value="10%" disabled={true}/>
                                <TextField floatingLabelText="total options" className="contract_parameter"
                                           value="1 000 000" disabled={true}/>
                            </div>
                        </Tab>
                        <Tab label="Visualisation">
                            <div className="col-xs-12">
                                <img className="contract_chart" src={chart}/>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <h2>Contract stats:</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <h2>Employees:</h2>
                    </div>
                </div>



                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <h2>Short introduction</h2>
                    <p>So generally it should be something short with link to our github page where user will find long detailed description</p>
                    <p><a href="https://github.com/Neufund/ESOP">This is link click me</a></p>
                </Dialog>
            </div>
        )
    }
};