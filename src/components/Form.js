import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             comment: '',
             gender:'Male',
        }
    }
    handleNameChange = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    handleCommentChange = (e) =>{
        this.setState({
            comment:e.target.value
        })
    }

    handleSelectChange = (e) =>{
        this.setState({
            gender:e.target.value
        })
    }

    handleSubmit = (e) =>{
        alert(`${this.state.name} ${this.state.comment} ${this.state.gender}`)
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                     From Component<br></br>
                <label>Name: </label>
                <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                </div>

                <div>
                    <label>Comments: </label>
                    <textarea  type='text' value={this.state.comment} onChange={this.handleCommentChange} />
                </div>
                <div>
                    <label>Gender: </label>
                    <select onChange={this.handleSelectChange}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
            
        )
    }
}

export default Form
