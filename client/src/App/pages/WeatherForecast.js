import React, { Component } from 'react';


class WeatherForecast extends Component {
  // Initialize the state
  constructor(props){
    super(props)
    this.state = {
          country:"",
          city:"",
          list:[]
        
        };
    

    
  }
  onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
        e.preventDefault()
        // get our form data out of state
        let {country, city} = this.state


        fetch('/weather/forecast', {
       method: 'post',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
            "country": country,
            "city":city
       })
    }) .then((response) => response.json())
   .then((response) => {
     console.log(response.list)

     

     this.setState({"list":response.list})
   })
   .catch((error) => {
     alert("Non-existant city or country.")
   })
  }


 

   render() {
    
    const {country, city, list} = this.state
    return (
      <div className="App">
        <h1>Weather forecast</h1>


        {list.length>0 ? (
          <div class="row">
            
            {list.map((item) => {
              return(
              <div class="column box">
                <p>Date: {item.dt}</p>
                <div class="row">
                  <p><sup>Minimum Temperature: {item.temp.min} degrees Celcius</sup></p>            
                  <p>Day Temperature: {item.temp.day} degrees Celcius</p>
                </div>
                <div class="row">
                  <p>Night Temperature: {item.temp.night} degrees Celcius</p>
                  <p><sub>Maximum Temperature: {item.temp.max} degrees Celcius</sub></p>
                </div>
                <p>Weather: {item.weather[0].description}</p>
                

              </div>
                
              )
            })}
            
          </div>
        ) : (
          <div>
           
          </div>
        )
      }

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

export default WeatherForecast;