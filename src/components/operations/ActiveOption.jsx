import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import './activeOptions.css' 

function ActiveOption() {
    const [viewState, setViewState] = useState({
      activeView: null,
      views: [
        {
          id: 1,
          title: 'PREDICT'
        },
        {
          id: 2,
          title: 'ANALYTICS VIEW'
        },
        {
          id: 3,
          title: 'ADVANCE SEARCH'
        }
      ]
    });

function toggleActive(index) {
  setViewState({...viewState, activeView: viewState.views[index]})
}

function toggleActiveStyle(index) {
  if(viewState.views[index] === viewState.activeView) 
    return "option__container active";
  else return "option__container";
}
  return (
    <div>
    <ul>{viewState.views.map((view, index) => { 
        return (
          <li className={toggleActiveStyle(index)} onClick={()=>{
            toggleActive(index);
          }} key={index}><Button style={{ color: '#fff' }}>{view.title}</Button></li>)})}
    </ul>
    </div>
  )
}

export default ActiveOption