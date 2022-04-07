import React, { Component } from 'react';
import SignupPage from '../Component/SignupPage';
import $ from 'jquery';
import toast, { Toaster } from 'react-hot-toast';

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
         email : '' ,
         password: '' ,
         Repeatpassword: '' ,
         formerr : '' ,
         inputtype : 'password',
         LoadingShow:false,
         LoadingHeight:'',
        }
      }

      componentDidMount(){
        window.scrollTo(0,0)
        document.title = 'EzPz'
  
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

    inputRepeatPsd = (e) => {
        this.setState({Repeatpassword: e.target.value});
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

         if (this.state.password.length < 8){
            toast.error('پسورد باید شامل حداقل ۸ کاراکتر باشد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else if (this.state.Repeatpassword === 0){
            toast.error('تایید پسورد خود را دوباره وارد کنید', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else if ( !this.state.password.match(strongPasswordLowerCase)){
            toast.error('پسورد باید شامل حداقل یک عبارت کوچک باشد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else if ( !this.state.password.match(strongPasswordUpperCase)){
            toast.error('پسورد باید شامل حداقل یک عبارت بزرگ باشد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else if ( !this.state.password.match(strongPasswordNumber)){
            toast.error('پسورد باید شامل حداقل یک عدد باشد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else if ( this.state.Repeatpassword !== this.state.password){
                toast.error('رمز های عبور با یکدیگر هم خوانی ندارند', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } /* else if ( !this.state.privacyCheck){
                toast.error('برای ثبت نام پذیرفتن قوانین لازم است', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } */
        }
    render() {
        return (
            <div>
                <Toaster />
                <SignupPage 
                    formHandler={this.formHandler}
                    inputMail={this.inputMail}
                    inputPsd={this.inputPsd}
                    inputRepeatPsd={this.inputRepeatPsd}
                    email={this.state.email}
                    password={this.state.password}
                    Repeatpassword={this.state.Repeatpassword}
                />
            </div>
        )
    }
}
