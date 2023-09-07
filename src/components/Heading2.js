import React from 'react'
import './componentCss/Heading2Css.css'

export default function Heading2() {
  return (
    <>
    <div className="container">
        <h2>Maintain your pending tasks with innoTask.</h2>
        <p>innoTask provides you the best services to manage your tasks whether it be a buisness meeting or getting groceries.</p>
        {/* <div className="containerBtns">
            <button className="containerBtn" id="completedList">completed tasks</button>
            <button className="containerBtn" id="pendingList">pending tasks</button>
        </div> */}
    </div>
    </>
  )
}
