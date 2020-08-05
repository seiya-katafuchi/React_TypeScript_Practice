import React from "react";
import "./App.css";
import Button from "./component/Button/Button";
import Counter from "./component/Counter/Countter";
import PublicPage from "./component/Pages/PublicPage";
import PrivatePage from "./component/Pages/Private";

interface Props {
  num: number
}

interface CommentFormat {
  id: number;
  text: string;
}

interface State {
  loading: boolean,
  data: {}
}

// const App = () => {
//   const comment: CommentFormat[] = [
//     { id: 1, text: "おはよう" },
//     { id: 2, text: "こんにちは" },
//   ];

//   const commentItems = comment.map((com, index) => {
//     return <li key={index}>{com.text}</li>
//   });

//   return (
//     <div>
//       <ul>{commentItems}</ul>
//     </div>
//   );
// }

// class App extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       data: comment
//     }
//   }

//   commentItems = () => {
//     return comment.map((comment) => <li>{comment.text}</li>);
//   }

//   render() {
//     return (
//       <div>
//         <ul>{this.commentItems}</ul>
//       </div>
//     );
//   }
// }

// class App extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       pageFlag: true
//     }
//   }

//   login = () => {
//     this.setState({
//       pageFlag: true
//     });
//   }

//   logout = () => {
//     this.setState({
//       pageFlag: false
//     });
//     console.log(5);
//   }

//   render() {
//     if (this.state.pageFlag) {
//       return (
//         <div>
//           <PublicPage text={"ログインページ"}></PublicPage>
//           {/* <span onClick={this.logout}>
//             <Button text={"ログアウト"}></Button>
//           </span> */}
//           <button onClick={this.logout}>ログアウト</button>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <PrivatePage text={"ロ"}></PrivatePage>
//         <span onClick={this.login}>
//           <Button text={"ログイン"}></Button>
//         </span>
//       </div>
//     );


//   }
// }
let allData;
class App extends React.Component<Props, State> {
  private _quizData: null[] = [];
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      data: {}
    }
  }

  componentDidMount() {
    this.requestData();
  }

  requestData = async (): Promise<void> => {
    this.setState({ loading: true });

    let firstQuizData;

    try {
      const API_URL: string = "https://www.googleapis.com/books/v1/volumes?q=isbn:4582824773";
      const data = await fetch(API_URL);
      const data2 = await data.json();
      firstQuizData = await data2.results;
    } catch {
    }
    this.setState({
      data: firstQuizData,
      loading: false
    });
  }

  render() {
    return (
      <div>
        {this.renderData()}
        {this.renderRequestButton()}
      </div>
    );
  }

  renderData = () => {
    if (this.state.loading) {
      return <p>データ取得中...</p>
    } else if (!this.state.loading && this.state.data === null) {
      return <p>データなし</p>
    } else if (!this.state.loading && this.state.data) {
      const component = this.state.data.map((components, index) => {
        return (
          <li key={index}>
            <p>Q{index + 1}:{components}</p>
            <p>{components}</p>
          </li>
        );
      });
      //jsonのデータを取得
      return (
        <ul>{component}</ul>
      );
    }
  }

  renderRequestButton = () => {
    if (this.state.loading) {
      return <button disabled={true}>データ取得中</button>
    }
    else {
      return <button onClick={this.requestData}>データを取得する</button>
    }
  }
}

export default App;
