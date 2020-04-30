import React, {useState, useEffect} from 'react' ;
import styles from './Charts.module.css' ;
import { fetchDailyData } from '../../api' ;
import { Line } from 'react-chartjs-2';

const Charts = () => {

    const [dailyData, setDailyData] = useState([]) ;

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData()) ;
        }

        fetchAPI() ;
    },[]) ;


    const lineChart = (
        dailyData.length 
            ? (
                <Line 
                    data = {{
                        labels : dailyData.map(({date}) => date.slice(0, 10)),
                        datasets : [{
                            data : dailyData.map(({confirmed}) => confirmed),
                            label : 'Infected',
                            borderColor : '#3333ff',
                            fill : true,
                        }, {
                            data : dailyData.map(({recovered}) => recovered),
                            label : 'Recovered',
                            borderColor : '#008000',
                            fill : true,
                        }, {
                            data : dailyData.map(({deaths}) => deaths),
                            label : 'Deaths',
                            borderColor : '#8B0000',
                            fill : true,
                        }],
                    }}
                />
            ) : null 
    );


    return (
        <div className = {styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts ;