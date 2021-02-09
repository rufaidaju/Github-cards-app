import React from 'react';
const axios = require('axios');


class Form extends React.Component {
    state = {
        userName: ''
    }

    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
            const profile = response.data;
            this.props.onSubmit(profile);
            this.setState({ userName: '' })
        } catch (error) {
            console.log('Oooops error', error)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Gitub user name"
                    value={this.state.userName}
                    onChange={(event) => { this.setState({ userName: event.target.value }) }}
                    required
                />
                <button style={{ marginLeft: '5px' }}>Add Card</button>
            </form>
        )
    }
}
export default Form;