/*Here we created an object 'Local_Forecast' in which we also created 
three objects 'today', 'tommorow' and 'yesterday' */

const Local_Forecast = {
    today: {
        low: 23,
        high: 33
    },
    yesterday: {
        low: 20,
        high: 31
    },
    tommorow: {
        low: 18,
        high: 26
    }
}

// console.log(Local_Forecast);

console.log(Local_Forecast.yesterday.high)

//this is the conventional way to print details inside object