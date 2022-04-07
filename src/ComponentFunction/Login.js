import React, { Component } from 'react';
import LoginPage from '../Component/LoginPage';
import $ from 'jquery';
import toast, { Toaster } from 'react-hot-toast';

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
         email : '' ,
         password: '' ,
         formerr : '' ,
         inputtype : 'password',
         LoadingShow:false,
         LoadingHeight:'',
        }
      }

      componentDidMount(){
        window.scrollTo(0,0)
        document.title = 'وینو-اکس | پنل کاربری'
  
    }

    inputMail = (e) => {
        this.setState({email : e.target.value});
        localStorage.removeItem("info_email");
        localStorage.setItem("info_email",e.target.value);
    }
    

    inputPsd = (e) => {
        this.setState({password: e.target.value});
        /* var Num = e.target.value
        var str = Num.toString();
        this.setState({password: str.replace(/[+ ÷ ؟ _  * & ^ ! | : ? ژؤآإأءًٌٍَُِّ ْ ؤ ك ٌ ئ ٓ ٍ ي  ً إ ٰ ُ أ ‌ ِ آ ٔ َ ة ء » ّ « : ٬ ، ٫ ﷼ ٪ ؛ ـ × = ض ص ث ق ف غ ع ه خ ح ج چ گ ک م ن ت ا ل ب ی س ش ظ ط ز ر ذ د پ و -]/g, "")}) */
    }


    formHandler = (e) => {
        this.setState({LoadingHeight: $('.generalBtn').outerHeight()}); 
        e.preventDefault();
        var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var mobileReg = /^0?9[0-9]{9}$/;
        const strongPasswordLowerCase =/^.*[a-z].*/
        const strongPasswordUpperCase =/^.*[A-Z].*/
        const strongPasswordNumber =/^.*[0-9].*/

        if (this.state.email.length > 0){
            if ((this.state.email).match(mailformat)){
                var type = 'EMAIL'
                var firstIndex = 'email'
            }
            if ((this.state.email).match(mobileReg)){
                var type = 'MOBILE'
                var firstIndex = 'mobile'
            }
        }
            
        if (this.state.email.length === 0){
            toast.error('لطفا نام کاربری خود را وارد کنید', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }else if(!type){
                toast.error('لطفا نام کاربری خود درست را وارد کنید', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
        } else if (this.state.password === 0){
            toast.error('لطفا پسورد خود را وارد کنید', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else if (this.state.password.length < 8){
            toast.error('لطفا پسورد خود را به درستی وارد کنید', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else if ( !this.state.password.match(strongPasswordLowerCase)){
                toast.error('لطفا پسورد خود را به درستی وارد کنید', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } else if (!this.state.password.match(strongPasswordUpperCase)){
                toast.error('لطفا پسورد خود را به درستی وارد کنید', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } else if (!this.state.password.match(strongPasswordNumber)){
                toast.error('لطفا پسورد خود را به درستی وارد کنید', {
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
                <LoginPage 
                    formHandler={this.formHandler}
                    inputMail={this.inputMail}
                    inputPsd={this.inputPsd}
                    email={this.state.email}
                    password={this.state.password}
                />
            </div>
        )
    }
}
