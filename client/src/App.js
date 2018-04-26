// /* @flow */
// import React, { Component } from 'react';
// import Header from './app/views/common/Header';
// import { ExampleComponent, MessageList } from './app/components/button.component';

// import './sass/App.scss';

// class App extends Component {
//   static getPasswords() {
//     // Get the passwords and store them in state
//     // fetch('/api/passwords')
//     //   .then(res => res.json())
//     //   .then(passwords => this.setState({ passwords }));
//   }
//   // Initialize state
//   constructor(props) {
//     super(props);
//     this.state = { passwords: [] };
//   }

//   // Fetch passwords after first mount
//   componentDidMount() {
//     // this.getPasswords();
//   }

//   render() {
//     const { passwords } = this.state;

//     <span style="background-color: #ffff00;">handleSubmit = () => { console.log("this is a test") }</span>

//     return (
//       <div className="App">
//         <Header />

//         {/* Render the passwords if we have them */}

//         <MessageList />

//         {passwords.length ? (
//           <div>
//             <h1>5 Passwords.</h1>
//             <ul className="passwords">
//               {passwords.map(password =>
//                 (
//                   <li>
//                     { password }
//                   </li>
//                 )
//               )}
//             </ul>
//             <button className="more" onClick={ this.getPasswords }>
//               Get More
//             </button>
//           </div>
//         ) : (
//           // Render a helpful message otherwise
//           <div>
//             <h1>No passwords :(</h1>
//             <button className="more" onClick={ this.getPasswords }>
//               Try Again?
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import {render} from "react-dom";
import {Route, Switch, withRouter} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import {mapDispatchToProps} from "./app/redux/stores/Store";
import Header from "./app/components/Header";
import FrontPage from "./FrontPage";

const NotFound = () => <h1>404 error..., page not found</h1>;

class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    // this.props.
  }

  render() {
    const {location, history} = this.props;

    return (
      <div>
        <Header />
        <TransitionGroup className="page-wrapper">
          <CSSTransition
          in={true}
          key={location.key}
          timeout={300}>
            <Switch location={location}>
              <Route exact path="/" component={FrontPage} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));