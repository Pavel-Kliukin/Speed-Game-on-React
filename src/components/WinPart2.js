import './WinPart2.css';
import topSecret from '../assets/topSecret.png'
import queen from '../assets/queen.png'
import bye from '../assets/bye.png'

const WinPart2 = (props) => {

  return (
    <div className="WinPart2">
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
        <div className='sorryWeCant'>
          <h1 id="Sorry">Sorry!</h1>
          <h2 id="weCant">We can't post your name, because this mission is</h2>
        </div>
        <div className='topSecretEndBox'>
          <img id="topSecretEnd" src={topSecret} alt="Top Secret"/>
        </div>
        <div className='queenBox'>
          <div className='byeBox'>
            <img id="bye" src={bye} alt="Bye"/>
          </div>
          <div className='queenBox2'>
            <img id="queen" src={queen} alt="Queen"/>
          </div>
        </div>
      </div>
  )
}

export default WinPart2

