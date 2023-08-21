import topSecret from '../assets/topSecret.png'

const WinPart2 = (props) => {

  return (
    <div className="modalWin2">
        <div className='sorryWeCant'>
          <h1 id="missioncompleted">Sorry!</h1>
          <h2 id="youWin">We can't post your name, because this mission is</h2>
        </div>
        <img id="topSecretEnd" src={topSecret} alt="Top Secret"/>
        <button id="closeButton" className="btn" onClick={props.btnClicked}>x</button>
      </div>
  )
}

export default WinPart2

