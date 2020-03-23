import React from 'react';
import '../css/user.css';
import UserProp from './userprops';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <UserProp user_id={this.props.match.params['id']} />

        )
    }

}

export default User;
