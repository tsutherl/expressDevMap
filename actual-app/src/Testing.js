import React from 'react';
import axios from 'axios';


export default class Testing extends React.Component{

    //each node should be hoverable. on hover, a window comes up with the route
    //path and verb. if it's a post or put route, there should be a way to pass the route data. 

    constructor(){
        super()
    }

    render(){
        console.log("testing component")
        return(
            <button className="btn btn-default btn-circle" value="decrease" onClick={(e)=> {
                e.preventDefault();
                testRoute('route', 'get');
            }}>-</button>
        )
    }

}



const testRoute = (route, verb) => {
    verb = 'put';
    // if(verb === 'put'){
        console.log('IN TEST ROUTE')
        console.log('axios?', axios[verb]);
        axios[verb]('/backend-tree/routes')
            .then(res => console.log(res.data))
            .catch(console.error)
    // }
}