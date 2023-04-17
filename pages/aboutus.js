import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <h1>About api</h1>
    </div>
  )
}


export async function getServerSideProps(){
    console.log("hello from the server");
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://flight-fare-search.p.rapidapi.com/v1/flight/search?query=stockholm',
  params: {
    from: 'Stockholm ',
    to: 'Malaga',
    date: '2023-03-08',
    currency: 'USD',
    type: 'Economy',
    adult: '1',
    child: '0',
    infant: '0'
  },
  headers: {
    'X-RapidAPI-Key': '36782acf59msh891212e1db79aa6p1b632fjsnb3e09490f54e',
    'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    
    return {
        props:{
            hello:"Hello world"
        }
    }
}
