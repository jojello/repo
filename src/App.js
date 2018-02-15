import React, { Component } from "react";
import Header from "./Header";
import Article from "./Article";
import Loader from "./Loader";
import Search from "./Search";
// import DefaultImg from "./DefaultImg";
import { fetchABC, fetchDigg, fetchMash } from "./Fetchapi";
import "./css/App.css";
import "./css/html5bp.css";
import "./css/normalize.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      showSearch: false,
      showLoader: true,
      showArticles: [],
      failedFetch: false,
      sourceDisplayed: "digg",
      popupOpen: "none",
      popupInfo: {}
    };

    this.togglePopup = this.togglePopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  componentDidMount() {
    Promise.all([fetchDigg(), fetchMash(), fetchABC()])
      .then(articles => console.log(articles))
      .catch(reason => {
        this.setState({
          failedFetch: true,
          showLoader: false
        });
      });
  }

  togglePopup(title, description, url) {
    this.setState({
      popupOpen: true,
      popupInfo: {
        title,
        description,
        url
      }
    });
  }

  closePopup() {
    this.setState({
      popupOpen: "none",
      showLoader: false
    });
  }

  render() {
    if (this.state.failedFetch) {
      console.log("FAIL - ERROR");
      return (
        <div>
          <Header />
          <Search showSearch={this.state.showSearch} />
          <Loader showLoader={this.state.showLoader} />
          <section id="main" className="container">
            <div>
              <h2>ERROR: Sorry no news is good news right?</h2>
            </div>
          </section>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Search showSearch={this.state.showSearch} />

          <section id="main" className="container">
            {this.state.articles.map(article => {
              return (
                <Article
                  title={article.title}
                  category={article.description}
                  urlImage={article.image}
                  url={article.url}
                  impressions={article.score}
                  onPopup={this.togglePopup}
                  key={article.title}
                />
              );
            })}
          </section>
          <div className="popUp" style={{ display: this.state.popupOpen }}>
            <button
              type="button"
              className="closePopUp"
              onClick={this.closePopup}
            >
              X
            </button>
            <div className="container">
              <h2>{this.state.popupInfo.title}</h2>
              <h4>{this.state.popupInfo.description}</h4>
              <a
                href={this.state.popupInfo.url}
                className="popUpAction"
                target="_blank"
              >
                Read more from source
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
