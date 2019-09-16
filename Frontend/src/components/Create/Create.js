import React, {Component} from 'react';
import axios from 'axios';

class Create extends Component{

     //call the constructor method
     constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            id : "",
            title: "",
            author: ""
        }
        //Bind the handlers to this class
        this.getBookID = this.getBookID.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getAuthor = this.getAuthor.bind(this);
        this.submitCreate = this.submitCreate.bind(this);
    }

    getBookID = (e) => {
        this.setState({
            id : e.target.value
        })
    }

    getTitle = (e) => {
        this.setState({
            title : e.target.value
        })
    }

    getAuthor = (e) => {
        this.setState({
            author : e.target.value
        })
    }

    submitCreate = () => {

        const data = {
            id : this.state.id,
            title : this.state.title,
            author : this.state.author
        }
        axios.post('http://localhost:3001/create', data)
            .then(response => {
                console.log("Status Code : ",response.status);
            });
    }

    render(){
        return(
            <div>
                <br/>
                <div class="container">
                    <form>
                        <div style={{width: '30%'}} class="form-group">
                            <input  type="text" onChange = {this.getBookID} class="form-control" name="BookID" placeholder="Book ID"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input  type="text" onChange = {this.getTitle} class="form-control" name="Title" placeholder="Book Title"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}} class="form-group">
                                <input type="text" onChange = {this.getAuthor} class="form-control" name="Author" placeholder="Book Author"/>
                        </div>
                        <br/>
                        <div style={{width: '30%'}}>
                            <button onClick = {this.submitCreate} class="btn btn-success" type="submit">Create</button>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}

export default Create;