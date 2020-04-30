import React from 'react' ;
import { NativeSelect, FormControl } from '@material-ui/core' ;

import styles from './StatePicker.module.css';

const StatePicker = ({ data : { total_values, state_wise}, handleState}) => {

    if(!state_wise) {
        return null ;
    }

    const states = Object.keys(state_wise);


    return (
        <FormControl className = {styles.FormControl}>
            <NativeSelect defaultValue = '' onChange = {(e) => { handleState(e.target.value) }}>
                <option value = "" >India</option>
                {states.map((state, i) => ( <option key = {i} value = {state}>{state}</option> ))}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker ;