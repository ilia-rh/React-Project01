import React from "react";
import Counter from "./Components/Counter/Counter";
import Button from "./Components/Button/Button";
import "./App.css";


// Class Base Component-----------------------

class App extends React.Component {
  state = {
    count: 0,
  };

  changeCountHandeler1 = () => {
    let count = this.state.count;
    count += 5;
    this.setState({
      count: count,
    })
  };

  changeCountHandeler2 = () => {
    let count = this.state.count;
    count += 10;
    this.setState({
      count: count,
    })
  };

  changeCountHandeler3 = () => {
    let count = this.state.count;
    count += 15;
    this.setState({
      count: count
    })
  };
  changeCountHandeler4 = () => {
    let count = this.state.count;
    count += 20;
    this.setState({
      count: count
    })
  };

  render() {
    return (
      <div className="container">
        <Counter text={this.state.count} />
        <button className="btn-add" onClick={this.changeCountHandeler1}>Add +1</button>
        <button className="btn-add" onClick={this.changeCountHandeler2}>Add +5</button>
        <button className="btn-add" onClick={this.changeCountHandeler3}>Add +10</button>
        <button className="btn-add" onClick={this.changeCountHandeler4}>Add +20</button>
      </div>
    )
  }
};


// class App extends React.Component {
//   state = {
//     count: 0,
//   };

//   changeCountHandeler1 = () => {
//     let count = this.state.count;
//     count += 5;
//     this.setState({
//       count: count,
//     })
//   };

//   changeCountHandeler2 = () => {
//     let count = this.state.count;
//     count += 10;
//     this.setState({
//       count: count,
//     })
//   };

//   changeCountHandeler3 = () => {
//     let count = this.state.count;
//     count += 15;
//     this.setState({
//       count: count
//     })
//   };
//   changeCountHandeler4 = () => {
//     let count = this.state.count;
//     count += 20;
//     this.setState({
//       count: count
//     })
//   };

//   render() {
//     return (
//       <div className="container">
//         <Counter text={this.state.count} />
//         {/* <button onClick={this.changeCountHandeler1}>Add +1</button>
//         <button onClick={this.changeCountHandeler2}>Add +5</button>
//         <button onClick={this.changeCountHandeler3}>Add +10</button>
//         <button onClick={this.changeCountHandeler4}>Add +20</button> */}
//         <Button text="Add +5" click={this.changeCountHandeler1} />
//         <Button text="Add +10" click={this.changeCountHandeler2} />
//         <Button text="Add +15" click={this.changeCountHandeler3} />
//         <Button text="Add +20" click={this.changeCountHandeler4} />
//       </div>
//     )
//   }
// };


// Function Base Component-----------------------

// const App = (props) => {
//   const [counterState, setCounter] = useState({
//     count: 0,
//   })

//   const changeCountHandeler1 = () => {
//     let count = counterState.count;
//     count += 5;
//     setCounter({
//       count: count
//     })
//   }
//   const changeCountHandeler2 = () => {
//     let count = counterState.count;
//     count += 10;
//     setCounter({
//       count: count
//     })
//   }
//   const changeCountHandeler3 = () => {
//     let count = counterState.count;
//     count += 15;
//     setCounter({
//       count: count
//     })
//   }
//   const changeCountHandeler4 = () => {
//     let count = counterState.count;
//     count += 20;
//     setCounter({
//       count: count
//     })
//   }

//   return (
//     <div className="container">
//       <Counter text={counterState.count} />
//       <button onClick={changeCountHandeler1}>Add +5</button>
//       <button onClick={changeCountHandeler2}>Add +10</button>
//       <button onClick={changeCountHandeler3}>Add +15</button>
//       <button onClick={changeCountHandeler4}>Add +20</button>
//     </div>
//   )

// }

export default App;