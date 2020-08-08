import React from "react";
import "./App.css";
import Button from "./component/Button/Button";
import SetUp from "./component/SetUp/SetUp";

interface Props {

}

interface State {
  nextPageFlag: boolean
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nextPageFlag: false
    }
  }

  pageSwitch = () => {
    const flag = !this.state.nextPageFlag ? true : false;
    this.setState({
      nextPageFlag: flag
    });
  }


  render() {
    if (!this.state.nextPageFlag) {
      return (
        <div>
          <div className="App">
            <SetUp pageNext={this.pageSwitch}></SetUp>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          ページが切り替わりました
          <span onClick={this.pageSwitch}>
            <Button>戻る</Button>
          </span>
        </div>
      );
    }
  }
}

export default App;
