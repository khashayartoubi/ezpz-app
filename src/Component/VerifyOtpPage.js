import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class VerifyOtpPage extends Component {
    /* componentDidMount(){
        $(".inputs").keyup(function () {
            if (this.value.length == this.maxLength) {
              $(this).next('.inputs').select(); 
              
            }
    });
    } */

    state = {
        changeVeify1: '',
        changeVeify2: '',
        changeVeify3: '',
        changeVeify4: '',
        changeVeify5: ''

    }
    SignUpDisabled = () => {
        $(".inputs").keyup(function () {
            if (this.value.length == this.maxLength) {
              $(this).next('.inputs').select(); 
              
            }
        });
        $(".inputs").keyup(function () {
            if (this.value.length == 0) {
              $(this).prev('.inputs').select(); 
              console.log(11);
              
            }
        });
            let value1 = document.getElementById('verify-1').value;
            let value2 = document.getElementById('verify-2').value;
            let value3 = document.getElementById('verify-3').value;
            let value4 = document.getElementById('verify-4').value;
            let value5 = document.getElementById('verify-5').value;
            if(value1 && value2 && value3 && value4 && value5){
                this.signUpValidate()
            }
    }
    signUpValidate = () => {
        // when all inputs compeleted execut this code that here
        console.log('fetching');
    }

    changeVeify1 = (e) => {
        e.target.value 
        ? 
        this.setState(() => ({
            changeVeify1: true
        }))
        :
        this.setState(() => ({
            changeVeify1: false
        }))
    }
    changeVeify2 = (e) => {
        e.target.value 
        ? 
        this.setState(() => ({
            changeVeify2: true
        }))
        :
        this.setState(() => ({
            changeVeify2: false
        }))
    }
    changeVeify3 = (e) => {
        e.target.value 
        ? 
        this.setState(() => ({
            changeVeify3: true
        }))
        :
        this.setState(() => ({
            changeVeify3: false
        }))
    }
    changeVeify4 = (e) => {
        e.target.value 
        ? 
        this.setState(() => ({
            changeVeify4: true
        }))
        :
        this.setState(() => ({
            changeVeify4: false
        }))
    }
    changeVeify5 = (e) => {
        e.target.value 
        ? 
        this.setState(() => ({
            changeVeify5: true
        }))
        :
        this.setState(() => ({
            changeVeify5: false
        }))
    }


    render() {
        return (
                <div style={{height:'100%',background:'#E5E5E5'}} className='d-flex align-items-center justify-content-center'>
                    <form autoComplete="off" onInput={this.SignUpDisabled} onSubmit={this.signUpValidate} style={{height:'95%'}}>
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
                                
                                
                                
                                
                                <div style={{width:'300px'}}>
                                    <p style={{color:'#7c7c7c'}} className='text-center'>
                                        2btoubi2b@gmail.com
                                    </p>
                                    <p style={{color:'#232323'}} className='text-center mt-4'>
                                        The code you received via E-mail
                                    </p>
                                </div>
                                <div style={{width:'300px',height:'100px'}} className='d-flex justify-content-between align-items-center'>
                                    <input id='verify-1' className='inputs' onInput={this.changeVeify1} style={{width:'56px',padding:'0 20px',fontSize:'18px',height:'56px',borderRadius:'5px',border:`1px solid ${this.state.changeVeify1 ?'#575EFF':'#7c7c7c'}`}} type='text' maxLength="1" pattern="[0-9]*" inputMode="numeric"  />
                                    <input id='verify-2' className='inputs' onInput={this.changeVeify2} style={{width:'56px',padding:'0 20px',fontSize:'18px',height:'56px',borderRadius:'5px',border:`1px solid ${this.state.changeVeify2 ?'#575EFF':'#7c7c7c'}`}} type='text' maxLength="1" pattern="[0-9]*" inputMode="numeric" />
                                    <input id='verify-3' className='inputs' onInput={this.changeVeify3} style={{width:'56px',padding:'0 20px',fontSize:'18px',height:'56px',borderRadius:'5px',border:`1px solid ${this.state.changeVeify3 ?'#575EFF':'#7c7c7c'}`}} type='text' maxLength="1" pattern="[0-9]*" inputMode="numeric" />
                                    <input id='verify-4' className='inputs' onInput={this.changeVeify4} style={{width:'56px',padding:'0 20px',fontSize:'18px',height:'56px',borderRadius:'5px',border:`1px solid ${this.state.changeVeify4 ?'#575EFF':'#7c7c7c'}`}} type='text' maxLength="1" pattern="[0-9]*" inputMode="numeric" />
                                    <input id='verify-5' className='inputs' onInput={this.changeVeify5} style={{width:'56px',padding:'0 20px',fontSize:'18px',height:'56px',borderRadius:'5px',border:`1px solid ${this.state.changeVeify5 ?'#575EFF':'#7c7c7c'}`}} type='text' maxLength="1" pattern="[0-9]*" inputMode="numeric" />
                                </div>

                                <div style={{margin:'30px auto'}} className='d-flex'>
                                    <span style={{marginRight:'5px'}}>
                                        Wrong E-mail? 
                                    </span>
                                    <Link to='/signup' style={{color:'#00A3FF',textDecoration:'none'}}>
                                        Change
                                    </Link>
                                </div>
                        </div>
                    </form> 
                </div>
        )
    }
}
