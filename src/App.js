import React, { Component } from 'react';
import './App.css'
import Circle from './components/Circle';
import Lives from './components/Lives';
import Modal from './components/Modal';

// Images imports
import img007 from './assets/007.png'
import twoShooting from './assets/twoShooting.png'
import fromRussia from './assets/fromRussia.webp'
import twoStanding from './assets/twoStanding.png'
import topSecret from './assets/topSecret.png'

// Sounds imports
import JamesBondTheme from './assets/Sounds/JamesBondTheme.mp3'
import silentShot from './assets/Sounds/SilentShot.mp3'
import shot from './assets/Sounds/shot.mp3'

const music = new Audio(JamesBondTheme)
const silentShotSound = new Audio(silentShot)
const shotSound = new Audio(shot)

let musicOn = false

class App extends Component {

  state={
    circles: [1,2,3,4],
    lives_images: [1,2,3],
    soundsSwitcher: true,
    buttons_switcher: true, // switches Start and Abort buttons
    circlesClickPreventer: false,
    lives_left: 3,
    score: 0,
    activeCircle: 0, //active circle's number
    activeClass: 'circle', // switches classes of circles in css
    pace: 1300, // round's duration time
    modalShow: false //shows at the end of the game
  }

  musicOn = false
  timerAim
  timerShot

  //MUSIC AND SOUNDS
  musicHandler = () => {
    musicOn = !musicOn
    if (musicOn) {
      music.play()
      music.volume = 0.05
    } else {
      music.pause()
    }

  }
  soundsHandler = () => {
    this.setState({
      soundsSwitcher: !this.state.soundsSwitcher
    })
  }
  
  //GAME START (starts by Start button)
  startGame = () => {
    this.setState({
      buttons_switcher: !this.state.buttons_switcher
    })
    
    this.newRound()
  }
  
  // NEW ROUND
  newRound = () => {
    if (this.state.lives_left <= 0) {
      return this.stopGame()
    }

    let randomNumber
    do {randomNumber = Math.floor(Math.random() * this.state.circles.length + 1)}
    while (this.state.activeCircle === randomNumber)

    this.setState({
      circlesClickPreventer: false,
      activeCircle: randomNumber,
      activeClass: 'circle stand'
    })

    this.timerAim = setTimeout(() => {
      this.setState({
        activeClass: 'circle aim'
      })
    }, this.state.pace / 2)

    this.timerShot = setTimeout(() => {
      this.deadState()
    }, this.state.pace)
  }

  //CIRCLE CLICKED
  clickHandler = (clircleNumber) => {

    clearTimeout(this.timerAim)
    clearTimeout(this.timerShot)

    if (this.state.soundsSwitcher) {
      silentShotSound.play()
      silentShotSound.volume = 0.05

      // the code below might be usefull in cases where the sound is long enough and the user clicks the button before the sound ends:
     
      // if (silentShotSound.paused) {
      //   silentShotSound.play()
      // } else {
      //   silentShotSound.currentTime = 0;
      // }
    }

    if (clircleNumber === this.state.activeCircle) {
      setTimeout(() => {
        this.newRound()
      }, 500) 
      return (
        this.setState({
          circlesClickPreventer: true,
          score: this.state.score + 1,
          activeClass: 'circle enemyKilled',
          pace: this.state.pace - 30
        })
      )
    } else {
      return (
        this.deadState()
      )
    }
  }

  //DEAD STATE
  deadState = () => {

    if (this.state.soundsSwitcher) {
      shotSound.play()
      shotSound.volume = 0.05
    }

    this.setState({
      circlesClickPreventer: true,
      lives_left: this.state.lives_left - 1,
      activeClass: 'circle shot',
      pace: this.state.pace - 30
    })

    setTimeout(() => {
      this.setState({
        activeClass: 'circle'
      })
      this.newRound()
    }, 1000)
  }

  stopGame = () => {

    clearTimeout(this.timerAim)
    clearTimeout(this.timerShot)

    this.setState({
      modalShow: true
    })
  }

  // GAME RESET
  modalButtonHandler = () => {
    this.setState({
      buttons_switcher: true, // switches Start and Abort buttons
      circlesClickPreventer: false,
      lives_left: 3,
      score: 0,
      activeCircle: 0, //active circle's number
      activeClass: 'circle', // switches classes of circles in css
      pace: 1300, // round's duration time
      modalShow: false //shows at the end of the game
    })

  }
  
  render() {
    return (
      <div className='body'>
        <header>
          <div id="headerContenet">
            <img id="i007" className="headerImg" src={img007} alt="007"/>
            <h1>Speed Game</h1>
            <img id="twoShooting" className="headerImg" src={twoShooting} alt="Two shooting"/>
          </div>
        </header>
        <main>
          <img id="fromRussia" src={fromRussia} alt="From Russia"/>
          <div id="controlPanel">
            <div id="livesBox">
              LIVES
              <div id="livesDisplay">
                {this.state.lives_images.map((live_img_number)=>
                  <Lives
                    key={live_img_number}
                    alive_status={ this.state.lives_images.length-live_img_number < this.state.lives_left }
                  />
                )}
              </div>
            </div>
            <div className="verticalLine"></div>
            <div id="score">
              Score: {this.state.score}
            </div>
            <div className="verticalLine"></div>
            <div id="soundsControl">
              <div id="music">
                Music:{'\u00A0'} {/* \u00A0 is for a space like &nbsp */}
                <label className="switch">
                  <input id="musicButton" type="checkbox" onChange={this.musicHandler}/>
                  <span className="slider"></span>
                </label>
              </div>
              <div id="sounds">
                Sounds:{'\u00A0'}
                <label className="switch">
                  <input id="soundButton" type="checkbox" onChange={this.soundsHandler} defaultChecked/>
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div id="circles_block">
            {this.state.circles.map((circle)=> {
              if (circle === this.state.activeCircle) {
                return <Circle
                  key={circle}
                  classes = {this.state.activeClass}
                  circleClicked = {() => this.clickHandler(circle)}
                />
              } else {
                return <Circle
                  key={circle}
                  classes = 'circle'
                  circleClicked = {() => this.clickHandler(circle)}
                />
              }   
            })}
          </div>
          <div id="start_stop_button_block">
            {this.state.buttons_switcher ? <button onClick={this.startGame}>Start mission</button> : <button onClick={this.stopGame}>Abort mission</button>}
          </div>
        </main>
        <footer>
          <div id="footerContenet">
            <div id="leftImgCover">
              <img id="twoStanding" className="footerImg" src={twoStanding} alt="Two standing"/>
            </div>
            <div id="footerTextCover">
              <p id="footerText">Copyright © Made by Pavel Kliukin</p>
            </div>
            <div id="rightImgCover">
              <img id="topSecret" className="footerImg" src={topSecret} alt="Top Secret"/>
            </div>
          </div>
        </footer>
        {this.state.circlesClickPreventer && <div className="circlesClickPreventer"></div>}
        {this.state.modalShow && <Modal 
          score={this.state.score}
          btnClicked={this.modalButtonHandler}/>}
      </div>
    );
  }
}

export default App;
