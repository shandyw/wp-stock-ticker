 import React, {Component} from 'react';


const API = 'https://cors-anywhere.herokuapp.com/https://clientapi.gcs-web.com/data/bc496b81-f16c-4e1f-b700-d1f4bd7690d3/Quotes?inc=exchange,symbol,lastTrade,changeNumber,changePercent';
const apiKey = 'bc496b81-f16c-4e1f-b700-d1f4bd7690d3';




class App extends React.Component {
   constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
       error: null,
      isLoaded: false,
    
    };
  }




    fetchQuotes() {
       

        fetch(API + '?api_key=' + apiKey,{
             method: 'GET',
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              

        }) 

        .then(response =>  response.json())
    
            .then(resData => {
               
               this.setState({ 
                    isLoaded: true,
                    hits: resData.data 
                }); //this is an asynchronous function
            },
          
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }

        )
            
        
    }


  componentDidMount() {
    this.fetchQuotes();
  }


  render() {
    
    const { hits, error, isLoaded } = this.state;

    if (error) {

        return <div>Error: {error.message}</div>;
    } 
        else if (!isLoaded) {
            return <div></div>;
    } 
    else {
 
        return (
       
            <div>

               { 
                  this.state.hits.map((hit) => {
      

                    return <div key={hit.symbol} className={hit.symbol}>
                    Nasdaq {hit.symbol} <span className={'arrow' +  (hit.changePercent > 0 ? "up" : "down")}>${hit.lastTrade}</span> <span className={'space number' +  (hit.changePercent > 0 ? "plus" : "minus")}>{hit.changeNumber}</span> (<span className={'percent' +  (hit.changePercent > 0 ? "plus" : "minus")}>{hit.changePercent}</span>)
                    </div>
                  })
                }
           
            </div>

        );
    }
  }
}

export default App;