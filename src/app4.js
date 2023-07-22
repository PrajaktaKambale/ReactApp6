class SampleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);

    this.state = {
      counter: 0,
    };

    console.log("inside constructor..");
  }

  onIncrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  onDecrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  }

  // //component is going to happend   -->deprecated
  // componentWillMount() {
  //   console.log("component will mount");
  // }

  //cmponent is about to get added to memory
  //will get called at the begining of the lifecycle
  componentDidMount() {
    console.log("component did mount");

    // if present load the previous value from the local storage
    //NOTE: local storage value is always in the form of string,so convert it to integer by using parseint
    this.setState({
      counter: localStorage["counter"]
        ? parseInt(localStorage["counter"], 10)
        : 0,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(this.state);
    if (prevState.counter != this.state.counter) {
      //persist the state -->store the state
      //localstorage:way to store the data on browser side
      localStorage.setItem("counter", this.state.counter);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>Counter App</h1>
          <p>Counter:{this.state.counter}</p>
        </div>
        <div className="title">
          <button onClick={this.onIncrement} className="btn btn-warning">
            +1
          </button>
          <button onClick={this.onDecrement} className="btn btn-warning">
            -1
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<SampleComponent />, document.getElementById("app"));
