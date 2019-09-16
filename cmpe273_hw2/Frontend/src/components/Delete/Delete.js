import React, {Component} from 'react';
import axios from 'axios';

class Delete extends Component{

    //call the constructor method
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            id : ""
        }
        //Bind the handlers to this class
        this.getBookID = this.getBookID.bind(this);
        this.submitDelete = this.submitDelete.bind(this);
    }

    getBookID = (e) => {
        this.setState({
            id : e.target.value
        })
    }

    submitDelete = () => {

        axios.delete('http://localhost:3001/delete/' + this.state.id)
            .then(response => {
                console.log("Status Code : ",response.status);
            });
    }


    render(){
        return(
            <div class="container">
                <form>
                    <div style={{width: "50%",float: "left"}} class="form-group">
                        <input type="text" onChange = {this.getBookID} class="form-control" name="BookID" placeholder="Search a Book by Book ID"/>
                    </div>
                    <div style={{width: "50%", float: "right"}}>
                            <button onClick = {this.submitDelete} class="btn btn-success" type="submit">Delete</button>
                    </div> 
                </form>
            </div>
        )
    }
}

export default Delete;