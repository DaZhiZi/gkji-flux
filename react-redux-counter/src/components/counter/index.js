import React, { PropTypes } from 'react'
import actionType from '../../action/actionTypes'
// TODO impoert 解包时没有创建变量
const {increase, decrease} = actionType

const App = ({ current, onClickCounter }) => {
    
    return (
      <div>
          <div>Current: {current}</div>
          <button onClick={e => {onClickCounter(increase, current)}}>+1</button>
          <button onClick={e => {onClickCounter(decrease, current)}}>-1</button>
          {/*<button onClick={e => onClickCounter('sq', current)}>Sq</button>*/}
      </div>
    )
}

App.propsType = {
    current: PropTypes.string.isRequired,
    onClickCounter: PropTypes.func
}

export default App