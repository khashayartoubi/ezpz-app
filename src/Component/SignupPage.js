import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import toast, { Toaster } from 'react-hot-toast';

export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSelect:false,
            inputSelectPas:false,
            inputSelectRepeatPas:false,
            signUpDisabled:false,
            passwordType: 'password',
        }
    }
   componentDidMount() {
       this.SignUpDisabled();
   }

   inputSelectUserName = (e) => {
         if(e.target.value == ''){
           this.setState(() => ({
               inputSelectUserName: true
           }))
         }else{
           this.setState(() => ({
               inputSelectUserName: true
           }))
         }
   }
   inputSelectPas = (e) => {
       if(e.target.value == ''){
           this.setState(() => ({
               inputSelectPas: true
           }))
         }else{
           this.setState(() => ({
               inputSelectPas: true
           }))
         }
   }
   inputSelectRepeatPas = (e) => {
    if(e.target.value == ''){
        this.setState(() => ({
            inputSelectRepeatPas: true
        }))
      }else{
        this.setState(() => ({
            inputSelectRepeatPas: true
        }))
      }
}
   InputNotSelectUserName = (e) => {
         if(e.target.value == ''){
           this.setState(() => ({
               inputSelectUserName: false
           }))
         }else{
           this.setState(() => ({
               inputSelectUserName: true
           }))
         }
   }
   InputNotSelectPas = (e) => {
         if(e.target.value == ''){
           this.setState(() => ({
               inputSelectPas: false
           }))
         }else{
           this.setState(() => ({
               inputSelectPas: true
           }))
         }
   }
   InputNotSelectRepeatPas = (e) => {
    if(e.target.value == ''){
      this.setState(() => ({
        inputSelectRepeatPas: false
      }))
    }else{
      this.setState(() => ({
        inputSelectRepeatPas: true
      }))
    }
}
   signUpValidate = (e) =>  {
       console.log(e);
   }
   SignUpDisabled = () => {
       let password = document.getElementById('signUpPassword').value;
       let Repeatpassword = document.getElementById('signUpRepeatPassword').value;
       let email = document.getElementById('signUpEmail').value;

       if(password.length > 0 && email.length > 0 && Repeatpassword.length > 0){
           this.setState(() => ({
               signUpDisabled: true
           }))
           console.log(this.state.signUpDisabled);
       }else{
           this.setState({signUpDisabled:false})
       }
       
   }
   
   ChangePasswordType = () => {
       
       this.setState({ passwordType: this.state.passwordType == 'text' ? 'password' : 'text' }, () => {                              
           //callback
           console.log(this.state.passwordType) 
         });

   }

   render() {
       
       return (
                <div style={{height:'100%',background:'#E5E5E5'}} className='d-flex align-items-center justify-content-center'>
                    <Toaster />
                    <form autoComplete="off" onInput={this.SignUpDisabled} onSubmit={this.props.formHandler} style={{height:'95%'}}>
                        <div style={{height:'100%',borderRadius:'5px',boxShadow:'1px 2px 10px rgba(0,0,0,0.1)',width:'350px',background:'#fff',padding:'80px 0 60px 0',margin:'50px auto'}} className='d-flex flex-column justify-content-center align-items-center'>
                            <div style={{width:'380px',height:'100px'}} className='d-flex justify-content-center align-items-center'>
                                <svg
                                    width={120}
                                    height={290}
                                    viewBox="0 0 123 141"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M52.442 127.811l-35.2-26.27a3.385 3.385 0 00-3.53-.32l-11.83 5.89a3.38 3.38 0 000 6.06l54.82 27.28a3.392 3.392 0 003 0l60.91-30.31-.91-.46-64.3 18.66a3.393 3.393 0 01-2.96-.53z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M51.002 101.281l-23.78-36.95a3.38 3.38 0 00-3.22-1.54l-13.12 1.36a3.39 3.39 0 00-2.13 5.68l41.76 44.78a3.43 3.43 0 002.83 1.06l67.67-7-.7-.75-66.75-5.09a3.372 3.372 0 01-2.56-1.55z"
                                        fill="#575EFF"
                                    />
                                    <path
                                        d="M58.892 75.92L49.622 33a3.41 3.41 0 00-2.45-2.56l-12.79-3.35a3.38 3.38 0 00-4 4.56l23.41 56.59a3.39 3.39 0 002.27 2l65.83 17.191-.39-.94-60.72-28.22a3.378 3.378 0 01-1.89-2.35z"
                                        fill="#FFC700"
                                    />
                                    <path
                                        d="M118.412 35.17L69.402.62a3.38 3.38 0 00-5.33 2.88l2 59.85a6.09 6.09 0 002.58 4.78l48.94 34.501a3.395 3.395 0 004.89-1.081c.314-.547.47-1.169.45-1.8l-2-59.93a5.914 5.914 0 00-2.52-4.65z"
                                        fill="#575EFF"
                                    />
                                </svg>
                            </div>
                           <p style={{margin:'30px 0 50px 0',fontSize:'35px',fontWeight:'bold'}}>
                               EzPz    
                           </p>                        
                           
                           <div style={{position: 'relative'}}>
                               <label>
                                   <span style={{display:this.state.inputSelectUserName ? 'block' : 'none',position:'absolute',zIndex:'2',left:'10px',top:this.state.inputSelectUserName ? '0px' : '18px',transition:'0.2s',fontSize:this.state.inputSelectUserName ? '12px' : '7px',background:this.state.inputSelectUserName ? '#fff' : 'none'}}>
                                       E-mail
                                   </span>
                               </label>
                               <input autoComplete='off' id='signUpEmail' onFocus={this.inputSelectUserName} onBlur={this.InputNotSelectUserName} style={{margin:'10px 0',padding:'10px 10px',border:this.state.inputSelectUserName ? '1px solid #575EFF' : '1px solid #ddd',borderRadius:'5px',width:'300px',height:'56px',transition:'0.2s'}} type="text" onInput={this.props.inputMail} value={this.props.email} placeholder={this.state.inputSelectUserName ? '' : 'E-mail'} />

                           </div>
                           
                           <div style={{position: 'relative'}}>
                               <label>
                               <div onClick={this.ChangePasswordType}>
                               {this.state.passwordType && this.state.passwordType == 'password' 
                                
                                ?
                                    <svg
                                        style={{position:'absolute',zIndex:'2',right:'10px',top:'30px',transition:'0.2s',cursor:'pointer'}}
                                        width={28}
                                        height={17}
                                        viewBox="0 0 28 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M1 8.436S6.897 1 13.949 1C21 1 26.897 8.436 26.897 8.436M1 8.564S6.897 16 13.949 16C21 16 26.897 8.564 26.897 8.564"
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                        />
                                        <circle
                                            cx={13.8205}
                                            cy={8.30769}
                                            r={3.86538}
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                        />
                                    </svg>
                                        
                                :

                                    <svg
                                        style={{position:'absolute',zIndex:'2',right:'10px',top:'30px',transition:'0.2s',cursor:'pointer'}}
                                        width={28}
                                        height={17}
                                        viewBox="0 0 29 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M1.616 1s5.75 7.25 12.625 7.25S26.866 1 26.866 1"
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M14.866 9L14.866 11.5"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M21.3905 6.77453L22.6405 8.93959"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M25.616 2.98837L27.3838 4.75614"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M7.98737 7.31067L6.2196 9.07843"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M3.18959 3.77452L1.02453 5.02452"
                                        />
                                        </svg>
                                }
                               </div>
                                   <span style={{display:this.state.inputSelectPas ? 'block' : 'none',position:'absolute',zIndex:'2',left:'10px',top:this.state.inputSelectPas ? '0px' : '18px',transition:'0.2s',fontSize:this.state.inputSelectPas ? '12px' : '7px',background:this.state.inputSelectPas ? '#fff' : 'none'}}>
                                       Password
                                   </span>
                               </label>
                               <input autoComplete='off' id='signUpPassword' onFocus={this.inputSelectPas} onBlur={this.InputNotSelectPas} style={{position:'relative',margin:'10px 0',padding:'10px 10px',border:this.state.inputSelectPas ? '1px solid #575EFF' : '1px solid #ddd',borderRadius:'5px',borderRadius:'5px',width:'300px',height:'56px',transition:'0.2s'}} type={this.state.passwordType} onInput={this.props.inputPsd} value={this.props.password} placeholder={this.state.inputSelectPas ? '' :'Password'} />                    
                           </div>
                           <div style={{position: 'relative'}}>
                               <label>
                               <div onClick={this.ChangePasswordType}>
                               {this.state.passwordType && this.state.passwordType == 'password' 
                                
                                ?
                                    <svg
                                        style={{position:'absolute',zIndex:'2',right:'10px',top:'30px',transition:'0.2s',cursor:'pointer'}}
                                        width={28}
                                        height={17}
                                        viewBox="0 0 28 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M1 8.436S6.897 1 13.949 1C21 1 26.897 8.436 26.897 8.436M1 8.564S6.897 16 13.949 16C21 16 26.897 8.564 26.897 8.564"
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                        />
                                        <circle
                                            cx={13.8205}
                                            cy={8.30769}
                                            r={3.86538}
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                        />
                                    </svg>
                                        
                                :

                                    <svg
                                        style={{position:'absolute',zIndex:'2',right:'10px',top:'30px',transition:'0.2s',cursor:'pointer'}}
                                        width={28}
                                        height={17}
                                        viewBox="0 0 29 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M1.616 1s5.75 7.25 12.625 7.25S26.866 1 26.866 1"
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M14.866 9L14.866 11.5"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M21.3905 6.77453L22.6405 8.93959"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M25.616 2.98837L27.3838 4.75614"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M7.98737 7.31067L6.2196 9.07843"
                                        />
                                        <path
                                            stroke="#7C7C7C"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            d="M3.18959 3.77452L1.02453 5.02452"
                                        />
                                        </svg>
                                }
                               </div>
                                   <span style={{display:this.state.inputSelectRepeatPas ? 'block' : 'none',position:'absolute',zIndex:'2',left:'10px',top:this.state.inputSelectRepeatPas ? '0px' : '18px',transition:'0.2s',fontSize:this.state.inputSelectRepeatPas ? '12px' : '7px',background:this.state.inputSelectRepeatPas ? '#fff' : 'none'}}>
                                       Repeat Password
                                   </span>
                               </label>
                               <input autoComplete='off' id='signUpRepeatPassword' onFocus={this.inputSelectRepeatPas} onBlur={this.InputNotSelectRepeatPas} style={{position:'relative',margin:'10px 0',padding:'10px 10px',border:this.state.inputSelectRepeatPas ? '1px solid #575EFF' : '1px solid #ddd',borderRadius:'5px',borderRadius:'5px',width:'300px',height:'56px',transition:'0.2s'}} type={this.state.passwordType} onInput={this.props.inputRepeatPsd} value={this.props.Repeatpassword} placeholder={this.state.inputSelectRepeatPas ? '' :'Repeat Password'} />                    
                           </div>
                           <button type='submit' disabled={this.state.signUpDisabled ? '' : 'disabled'} style={{fontSize:'24px',background:this.state.signUpDisabled ? '#575EFF' : '#E2E3FF',cursor:this.state.signUpDisabled ? 'pointer' : 'not-allowed',transition:'0.2s',borderRadius:'5px',color:'#fff',border:'none',width:'300px',height:'56px',marginTop:'30px'}} className='d-flex align-items-center justify-content-center'>
                               Sign up
                           </button>
                           <div style={{margin:'30px auto'}} className='d-flex'>
                               <span style={{marginRight:'5px'}}>
                                   No account? 
                               </span>
                               <Link to='/login' style={{color:'#00A3FF',textDecoration:'none'}}>
                                   Log in
                               </Link>
                           </div>
                   </div>
               </form>
           </div>
        )
    }
}
