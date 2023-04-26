import React, { Component } from 'react';
import './App.css'
import Circle from './components/Circle';
import Lives from './components/Lives';

// Images imports
import img007 from './assets/007.png'
import twoShooting from './assets/twoShooting.png'
import fromRussia from './assets/fromRussia.webp'
import twoStanding from './assets/twoStanding.png'
import topSecret from './assets/topSecret.png'

class App extends Component {

  state={
    circles: [1,2,3,4],
    lives_images: [1,2,3],
    buttons_switcher: true, // switches Start and Abort buttons
    circlesClickPreventer: false,
    lives_left: 3,
    score: 0,
    activeCircle: 0,
    activeClass: 'circle',
    pace: 1300
  }

  timerAim
  timerShot

  newRound = () => {
    if (this.state.lives_left === 0) {
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
      this.setState({
        activeClass: 'circle shot'
      })
    }, this.state.pace)
  }

  deadState = () => {
    this.setState({
      circlesClickPreventer: true,
      lives_left: this.state.lives_left - 1,
      pace: this.state.pace - 30
    })

    setTimeout(() => {
      this.setState({
        activeClass: 'circle'
      })
      this.newRound()
    }, 1000)
  }
  
  startGame = () => {
    this.setState({
      buttons_switcher: !this.state.buttons_switcher,
    })
    
    this.newRound()
  }

  stopGame = () => {
    clearTimeout(this.timerAim)
    clearTimeout(this.timerShot)
    this.setState({
      circlesClickPreventer: true
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
                  <input id="musicButton" type="checkbox"/>
                  <span className="slider"></span>
                </label>
              </div>
              <div id="sounds">
                Sounds:{'\u00A0'}
                <label className="switch">
                  <input id="soundButton" type="checkbox" defaultChecked/>
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
                />
              } else {
                return <Circle
                  key={circle}
                  classes = 'circle'
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
      </div>
    );
  }
}

export default App;
