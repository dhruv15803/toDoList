import React from 'react'
import './componentCss/Heading1Css.css'

export default function Heading1() {

  let companyHeading = document.getElementById('heading');
  if(companyHeading!==null){
  companyHeading.addEventListener('click',()=>{
    window.location = '/';
  });
  }

  return (
    <>
    <div className="companyHeading" id='heading'>
        <h1>innoTask</h1>
    </div>
    </>
  )
}
