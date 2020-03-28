import React, { Component } from 'react';

class CurrentWeather extends Component {

  constructor(props){
    super(props)
    this.state = {
          country:"",
          city:"",
          temperature:""
        
        };
    

    
  }
  onChange = (e) => {
     
        this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
        e.preventDefault()

        let {country, city} = this.state


        fetch('/weather/current', {
       method: 'post',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
            "country": country,
            "city":city
       })
    }) .then((response) => response.json())
   .then((response) => {
     console.log(response)

     document.getElementById("temperature").innerHTML=response.main.temp+" degrees Celcius"
   })
   .catch((error) => {
     alert("Non-existant city or country.")
   })
  }


 

   render() {
    
    const {country, city} = this.state
    return (
      <div className="App">
      <p id="temperature"></p>
        <h2>Search location.</h2>


        <form onSubmit={this.onSubmit}>
          <label for="city">Enter city.
          <input type="text" name="city" value={city} required onChange={this.onChange}/>
          </label>
          <label for="country">Enter country.
          <input type="text" name="country" value={country} required onChange={this.onChange}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>


    );
  }
}

export default CurrentWeather;
