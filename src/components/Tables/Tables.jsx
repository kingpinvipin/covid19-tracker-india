import React from 'react' ;

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './Tables.module.css' ;

const Tables = ({data : {total_values, state_wise}, state_name}) => {


    if(!total_values) {return "Loading..." ;}
    else {
      var items = Object.keys(state_wise) ;
      var res = state_wise ;
      if(state_name) {
        if(state_wise[state_name].confirmed !== "0") {
          const d = state_wise[state_name] ;
          items = Object.keys(d.district) ;
          res = d.district ;
        }else {
          return null ;
        }
      }
    }


    return (
        <div className = {styles.container}>
             <TableContainer component={Paper} >
             <Table aria-label="simple table">
               <TableHead>
                 <TableRow >
                   <TableCell id = {styles.headcell}>State</TableCell>
                   <TableCell align="right" id = {styles.headcell}>Infected</TableCell>
                   <TableCell align="right" id = {styles.headcell}>Active&nbsp;</TableCell>
                   <TableCell align="right" id = {styles.headcell}>Recovered&nbsp;</TableCell>
                   <TableCell align="right" id = {styles.headcell}>Deaths&nbsp;</TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
              {items.map((key) => (
                <TableRow key={key} >
                    <TableCell id = {styles.items} component="th" scope="row" >{key}</TableCell>
                    <TableCell id = {styles.items} align="right">{res[key].confirmed}</TableCell>
                    <TableCell id = {styles.items} align="right">{res[key].active}</TableCell>
                    <TableCell id = {styles.items} align="right">{res[key].recovered}</TableCell>
                    <TableCell id = {styles.items} align="right">{res[key].confirmed - res[key].active - res[key].recovered}</TableCell>
                </TableRow>
                ))}
               </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default Tables ;