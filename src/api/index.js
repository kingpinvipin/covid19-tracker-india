import axios from 'axios' ;

const url = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india';
const urldaily = 'https://api.covid19api.com/total/dayone/country/india';


export const fetchData = async () => {
    try {
        const {data : {total_values, state_wise}} = await axios(url, {
            "method" : "GET",
            "headers" : {
                "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
                "x-rapidapi-key": "e332c122d8msh9e8290ca8ebc510p1fdd71jsnd3d1bba921d2"
             }
        });
        return {total_values, state_wise} ;
    }catch(error) {
        console.log(error) ;
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(urldaily) ;
        
        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.Confirmed,
            recovered : dailyData.Recovered,
            deaths : dailyData.Deaths,
            date : dailyData.Date ,
        }));

        return modifiedData ;

    } catch (error) {
        console.log(error) ;
    }
}