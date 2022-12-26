import React from 'react';
import axios from 'axios';
export default function Home() {
    // function getWeather(lat, lon, timezone) {
    //     return axios.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=Asia%2FBangkok", {
    //         params: {
    //             latitude: lat,
    //             longitude: lon,
    //             timezone,
    //         }
    //     })
    //     // return fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=Asia%2FBangkok")
    // }
    // const [fa, setFa] = React.useState("");
    // React.useEffect(() => {
    //     getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timezone).then(res => {
    //         setFa(res.data);
    //         console.log(res.data)
    //         console.log('fa', fa)
    //     })
    //         .catch(error => {
    //             console.table(error);
    //         })}
    //     , [])

    return (
        <div
            style={{
                color: "red"
            }}
        >
            {/* {JSON.stringify(fa)} */}
            Home
        </div>
    )
}
