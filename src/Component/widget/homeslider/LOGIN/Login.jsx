import React,{ Component } from 'react'
import styles from '../LOGIN/login.css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange=(event)=>{
        this.setState({Passvalue: event.target.value});
    }

    validate=(event)=>{
        let pass = event.target.value;
        let reg = [/\W/];
        let test = reg.test(pass);
        if (test) {
            alert('pass');
        } else{
            alert('fail');
        }
    }

    handleSubmit=(event)=>{
        if(this.state.value.length < 8) {
            return false;
        }

        alert('A password was submitted that was ' + this.state.Passvalue.length + '    characters long.');
        event.preventDefault();
    }

    render() {
        return (
            <div className={styles.loginbox}>
            <form onSubmit={this.handleSubmit}>
                <label>
                    User name:
                    <input type='text' value={this.state.username} placeholder='Enter username' />
                </label>
              <div>
                <label>
                    Password:
                    <input type="password" value={this.state.Passvalue} placeholder='Enter Password' onChange={this.handleChange} onInput={this.validate}/>
                </label>
                </div>
                <input className={styles.button} type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Login;
