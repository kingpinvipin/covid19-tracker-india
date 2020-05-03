import React from 'react' ;
import styles from './Charts.module.css' ;
import { Bar } from 'react-chartjs-2';


const BarCharts = ({data : {total_values, state_wise}, state_name}) => {


    if(total_values) {
        var res = state_wise ;
        var items = Object.keys(state_wise) ;
        var text = 'No of Infected Peoples in Indian States' ;
        if(state_name) {
            if(state_wise[state_name].confirmed !== "0") {
                res = state_wise[state_name].district ;
                items = Object.keys(res) ;
                text = 'No of Infected Peoples in different locations of ' + state_name ;
            }else { return null ;}
        }
    }else {
        return 'Loading...';
    }

    var bgColor = ['rgba(139, 0, 0, 1'] ;
    for(var i = 0 ; i < items.length ; i++)  bgColor.push('rgba(139, 0, 0, 1') ;


    const barChart = (
        <Bar 
            data = {{
                labels : items,
                datasets : [{
                    label : 'People',
                    backgroundColor : bgColor,
                    data : items.map((key) => res[key].confirmed)
                }]
            }}
            options = {{
                legend : {display : false},
                title : {display :true, text : text },
            }}
        />
    );

    return (
        <div className = {styles.container}>
            {barChart}
        </div>
    )
}

export default BarCharts ;
