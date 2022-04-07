import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';

export default class ForgetPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSelect:false,
            signUpDisabled:false,
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
   
   SignUpDisabled = () => {
       let email = document.getElementById('signUpEmail').value;
       if(email.length > 0){
           this.setState(() => ({
               signUpDisabled: true
           }))
       }else{
           this.setState({signUpDisabled:false})
       }
   }
   signUpValidate = (e) => {
    this.state.signUpDisabled 
    ? 
        this.setState(() => ({
            redirect: true
        }))
    : 
        this.setState(() => ({
            redirect: false
        }))
   }
    render() {
        if (this.state.redirect){
            return <Redirect to='/verify-otp' />
        }
        return (
            <div style={{height:'100%',background:'#E5E5E5'}} className='d-flex align-items-center justify-content-center'>
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
                                
                                
                                <button type='submit' disabled={this.state.signUpDisabled ? '' : 'disabled'} style={{fontSize:'24px',background:this.state.signUpDisabled ? '#575EFF' : '#E2E3FF',cursor:this.state.signUpDisabled ? 'pointer' : 'not-allowed',transition:'0.2s',borderRadius:'5px',color:'#fff',border:'none',width:'300px',height:'56px',marginTop:'40px',padding:'10px'}} className='d-flex align-items-center justify-content-center'>
                                    Send E-mail
                                </button>
                                <div style={{margin:'30px auto'}} className='d-flex'>
                                    <span style={{marginRight:'5px'}}>
                                        Remember? 
                                    </span>
                                    <Link to='/verify-otp' style={{color:'#00A3FF',textDecoration:'none'}}>
                                        Sign in
                                    </Link>
                                </div>
                        </div>
                    </form>
                </div>
        )
    }
}
