import React from 'react' ;
import { Card, CardContent, Typography, Grid} from '@material-ui/core' ;
import CountUp from 'react-countup' ;
import styles from './Cards.module.css' ;
import cx from 'classnames';

const Cards = ({data : {total_values, state_wise}, state_name}) => {


    if(!total_values) {
        return "Loading..." ;
    }else {
        var res ;
        if(state_name) {
            res = state_wise[state_name] ;
        }else {
            res = total_values ;
        }
    }


    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center" >
                <Grid item component = {Card} xs = {12} md = {2} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                      <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                      <Typography  variant = "h5">
                          <CountUp start = {0} end = {res.confirmed} duration = {1.0} seperator = ","/>
                      </Typography>
                      <Typography color = "textSecondary">{ (res.lastupdatedtime)}</Typography>
                      <Typography variant = "body2"> Number of infected cases of COVID-19</Typography>
                   </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {2} className = {cx(styles.card, styles.active)}>
                <CardContent>
                  <Typography color = "textSecondary" gutterBottom>Active</Typography>
                  <Typography  variant = "h5">
                      <CountUp start = {0} end = {res.active} duration = {1.0} seperator = ","/>
                  </Typography>
                  <Typography color = "textSecondary">{(res.lastupdatedtime)}</Typography>
                  <Typography variant = "body2">Number of active cases of COVID-19</Typography>
               </CardContent>
               </Grid>
                <Grid item component = {Card} xs = {12} md = {2} className = {cx(styles.card, styles.recovered)}>
                <CardContent>
                       <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                       <Typography  variant = "h5">
                            <CountUp start = {0} end = {res.recovered} duration = {1.0} seperator = ","/>
                       </Typography>
                       <Typography color = "textSecondary">{(res.lastupdatedtime)}</Typography>
                       <Typography variant = "body2">Number of recoveries from COVID-19</Typography>
                </CardContent>
                </Grid>
               <Grid item component = {Card} xs = {12} md = {2} className = {cx(styles.card, styles.deaths)}>
               <CardContent>
                      <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                      <Typography  variant = "h5">
                            <CountUp start = {0} end = {res.deaths} duration = {1.0} seperator = ","/>
                      </Typography>
                      <Typography color = "textSecondary">{(res.lastupdatedtime)}</Typography>
                      <Typography variant = "body2">Number of deaths caused by COVID-19</Typography>
               </CardContent>
               </Grid>
            </Grid>
        </div>
    )

}
export default Cards ;