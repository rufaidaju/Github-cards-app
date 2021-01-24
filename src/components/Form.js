import React from 'react'


class Form extends React.Component {
    userNameInput = React.createRef();
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.userNameInput.current.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                placeholder="Gitub user name" 
                ref={this.userNameInput}
                required
                />
                <button>Add Card</button>
            </form>
        )
    }
}
export default Form;