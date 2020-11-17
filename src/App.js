import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }

  GET=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      this.setState({isLoaded:true,
                      items:response.data,
                      flag:1
                    })
    })
    .catch(error => {
      alert("error");
      console.log(error);
    })
  }

POST=()=>{
  console.log('Console Testing');
  var dict = { userId: document.getElementById('name').value,
               body:document.getElementById('age').value, 
               title: document.getElementById('email').value };
  axios.post('https://jsonplaceholder.typicode.com/posts',dict)
  .then(response => {
    console.log(response)
    this.setState({isLoaded:true,
                    flag:2
                  })
  })
  .catch(error => {
    alert(error);
    console.log(error);
  })

}
check=()=>{
  this.setState({isLoaded:true,
    flag:15
  })
}

  render() {

    const { error, isLoaded, items } = this.state;

    if (this.state.flag==1){

    return(
      <div>

      <button onClick={this.GET}>
      GET API CALL
      </button>

      <button onClick={this.check}>
      POST API CALL
      </button>

      <h1> GET API RESULTS AFTER BUTTON CLICK </h1>

      <ul>
           {items.map(item => (
             <li key={item.name}>
               {item.id} {item.title}
             </li>
           ))}
      </ul>

      </div>

      );


    }else if (this.state.flag==2){

      return(
      <div>
      <button onClick={this.GET}>
      GET API CALL
      </button>

      <button onClick={this.check}>
      POST API CALL
      </button>
      <h1> Post Request Submitted Successfully</h1>

      </div>

      );


    }
    else if (this.state.flag==15)
    {
      return(
        <div>
          <input id='name' type='text'></input>Name <br></br>
          <input id='age' type='text'></input>Age<br></br>
          <input id='email' type='text'></input>Email<br></br>
          <button onClick={this.POST}>
            Submit
          </button>
        </div>
      )
    }
    else{

      return(
      <div>

      <button onClick={this.GET}>
      GET API CALL
      </button>

      <button onClick={this.check}>
      POST API CALL
      </button>

      </div>

      );

    }

  }

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      this.setState({isLoaded:true,
                      items:response.data})
    })
    .catch(error => {
      alert("error");
      console.log(error);
    })
    }
}

export default App;