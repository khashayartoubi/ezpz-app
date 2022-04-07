import React, { Component } from 'react'
import ForgetPasswordPage from '../Component/ForgetPasswordPage';
import $ from 'jquery';
import toast, { Toaster } from 'react-hot-toast';


export default class ForgetPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
         email : '' ,
         password: '' ,
         formerr : '' ,
         inputtype : 'password',
        
        }
      }

    inputMail = (e) => {
        this.setState({email : e.target.value});
        localStorage.removeItem("info_email");
        localStorage.setItem("info_email",e.target.value);    
    }
    
    formHandler = (e) => {
        this.setState({LoadingHeight: $('.generalBtn').outerHeight()}); 
        e.preventDefault();
        var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (!this.state.email.length == 0 && !this.state.email.match(mailformat)){
                toast.error('لطفا ایمیل خود را به درستی وارد کنید', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
        } 
            
        } 
    render() {
        return (
            <div>
                <Toaster />
                <ForgetPasswordPage 
                    formHandler={this.formHandler}
                    inputMail={this.inputMail}
                    email={this.state.email}
                />
            </div>
        )
    }
}
