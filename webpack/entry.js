'use strict';
/**
 * entry.js
 * Main React Loader
 * @flow
 */

import ProjectList from './components/ProjectList';
import FadeInList from './components/FadeInList';

import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';

import FontAwesome from 'react-fontawesome';

class App extends Component {
  state: {
    scene: string,
  };

  constructor(props) {
    super(props);
    this.state = {scene: 'intro'};
    console.log('%cWelcome!', 'color: #fff; text-shadow: 1px 1px 2px black, 0 0 25px #00B3E3, 0 0 5px #0093a3; font-size: 28px;');
    console.log('The full source code is available here:');
    console.log('%chttps://github.com/hgkim999/page', 'color: #00B3E3;');
    console.log('Please use email button if you have any question!');
  }

  _onClickMainWrapper(event) {
    this.setState({scene: 'main'});
  }
  _onScrollMainWrapper(event) {
    if (this.state.scene === 'intro') {
      event.preventDefault();
      this._onClickMainWrapper(event);
    }
  }

  componentDidMount() {
    ReactDom.findDOMNode(this).addEventListener('wheel', this._onScrollMainWrapper.bind(this));
  }

  render() {
    let {scene} = this.state;

    return (
      <div
        className={`main-wrapper ${scene}`}
        onClick={this._onClickMainWrapper.bind(this)}
        onScroll={this._onScrollMainWrapper.bind(this)}>
        <div className="main-backdrop"/>
        <div className="full-name">
          SAMUEL KIM
        </div>
        <div className="job-title">
          Frontend Developer, UI/UX Engineer
        </div>
        <div className="click-guide">
          <FontAwesome name="arrows-v" />
          Click or Scroll to expand
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/samuelhgkim/" target="_blank">
            <FontAwesome name="linkedin" size="2x"/>
          </a>
          <a href="https://github.com/hgkim999" target="_blank">
            <FontAwesome name="github" size="2x"/>
          </a>
          <a href="mailto:contact@samuelkim.me" target="_blank">
            <FontAwesome name="envelope" size="2x"/>
          </a>
        </div>

        <div className="inner-box">
          <div className="leftColumn">
            <div className="section experiences">
              <div className="title">EXPERIENCES</div>
              <FadeInList name="experiences">
                <li>
                  <div className="position">Software Engineer 2</div>
                  <div className="company">Nordstrom</div>
                  <div className="time">[10. 17. ~ Present]</div>
                </li>
                <li>
                  <div className="position">Frontend Developer - Lead Software Engineer</div>
                  <div className="company">Carpool Digital</div>
                  <div className="time">[07. 16. ~ 10. 17.]</div>
                </li>
                <li>
                  <div className="position">Frontend, Native App Developer - Software Engineer</div>
                  <div className="company">Carpool Digital</div>
                  <div className="time">[03. 15. ~ 06. 16.]</div>
                </li>
                <li>
                  <div className="position">Tactical Web Server/Network Manager, Sergeant</div>
                  <div className="company">Republic of Korea Army</div>
                  <div className="time">[03. 09. ~ 01. 11.]</div>
                </li>
              </FadeInList>
            </div>

            <div className="section skills">
              <div className="title">SKILLS</div>
              <FadeInList name="skills">
                <li>
                  <span className="detail">React, Redux, React Native, NodeJS, ES6/ES7, BackboneJS, etc.</span>
                  <span className="category">Javascript</span>
                </li>
                <li>
                  <span className="detail">AWS Lambda/EC2/S3, GraphQL, PHP, HTML5, CSS3/SSAS/LESS</span>
                  <span className="category">Web</span>
                </li>
                <li>
                  <span className="detail">Java, C#, C++</span>
                  <span className="category">Native</span>
                </li>
                <li>
                  <span className="detail">Unity3D, Unreal Engine</span>
                  <span className="category">Game Engines</span>
                </li>
                <li>
                  <span className="detail">Photoshop, Sketch, Origami, Blender</span>
                  <span className="category">Design/Prototyping</span>
                </li>

              </FadeInList>
            </div>

            <div className="section education">
              <div className="title">EDUCATION</div>
              <FadeInList name="education">
                <li>
                  <div className="major">Bachelor's in Computer Science and Software Engineering</div>
                  <div className="school">University of Washington Bothell</div>
                  <div className="time">[09. 13. ~ 06. 15.]</div>
                </li>
              </FadeInList>
            </div>

          </div>

          <div className="rightColumn">
            <div className="projectsListWrapper">
              <ProjectList />
            </div>
          </div>
        </div>
      </div>
          );
          }
          }

          render(
          <App/>, document.getElementById('react-app'));
