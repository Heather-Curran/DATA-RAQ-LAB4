import React from "react";
//Import books component so it can be imbedded
import { Books } from "./books";
import axios from "axios";

//Inherite from React.Component
export class Read extends React.Component{

    //Component lifecycle hook
    componentDidMount() {
        //Asynchronous call
        //Http Get method - goes to this URL
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then((response)=>{  //Arrow function - Http response
            this.setState({  //Call back funtion
                books: response.data
            })
        }) 
        .catch(function(error){  //Call back funtion
            console.log(error);
        });
    }

    //State holds data related to component
    //Create books array and fill with book objects (json)
    state = {
        books:[ ]
                
    }
        render(){
            return( 
                <div>
                    <h3>Hello from my Read Component</h3>
                    {/* Imbed books.js component in read.js component */}
                    {/* Taken data from state */}
                    <Books books={this.state.books}></Books>
                </div>
            );
        }    
}