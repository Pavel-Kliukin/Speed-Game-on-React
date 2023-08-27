import './css/WinPart1.css';

import winGif from '../assets/win.gif'
import leftClapingHands from '../assets/LClapingHands.gif'
import rightClapingHands from '../assets/RClapingHands.gif'

const WinPart1 = (props) => {

  return (
    <div className="WinPart1">
      <div className='congrats'>
        <h2 id="missioncompleted">Mission completed!</h2>
        <h2 id="youWin">You win!</h2>
      </div>
      <img id="winGif" src={winGif} alt="WinGif"/>
      <div className='buttomBox'>
        <img className='hands' id="leftClapingHands" src={leftClapingHands} alt="leftClapingHands"/>
        <form onSubmit={props.submitClicked}>
            <label>Enter your name:</label>
            <input type="text" required></input>
          <button>Submit</button>
        </form>
        <img className='hands' id="rightClapingHands" src={rightClapingHands} alt="rightClapingHands"/>
      </div>
      <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
    </div>
  )
}

export default WinPart1

