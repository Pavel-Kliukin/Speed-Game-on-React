import React, { Component } from 'react';
import './App.css'
import Circle from './components/Circle';
import Lives from './components/Lives';
import img007 from './assets/007.png'
import twoShooting from './assets/twoShooting.png'
import fromRussia from './assets/fromRussia.webp'
import twoStanding from './assets/twoStanding.png'
import topSecret from './assets/topSecret.png'

class App extends Component {

  state={
    circles: [1,2,3,4],
    lives_images: [1,2,3],
    lives_left: 3,
    score: 0,
    hlCircleNumber: 0,
    pace: 1300
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
          Score:{'\u00A0'} {/* \u00A0 is for a space like &nbsp */}
          <span id="scoreIs">0</span>
        </div>
        <div className="verticalLine"></div>
        <div id="soundsControl">
          <div id="music">
            Music:{'\u00A0'}
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
        {this.state.circles.map((circle)=>
        <Circle
          key={circle}
          number={circle}
        />
        )}
      </div>
      <div id="start_stop_button_block">
        <button id="startButton">Start mission</button>
        <button id="stopButton" className="hidenButton">Abort mission</button>
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
      </div>
    );
  }
}

export default App;
