// import all required dependencies

import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import Gallery from "./Components/Gallery";
import NotFound from "./Components/notFound";
import apiKey from "./config";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// create class and declare state

class App extends Component {
  state = {
    images: [],
    query: " ",
    loading: true
  };

// calling search on load

  componentDidMount() {
    this.performSearch(" ");
  }

// fetching data

  performSearch = query => {
    this.setState({
      loading: true
    });
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({
          query: query,
          images: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

// rendering component

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/search/hello" />
          <Route
            path="/search/:tag"
            render={props => (
              <div className="container">
                <SearchForm
                  onSearch={this.performSearch}
                  history={props.history}
                />
                <Nav onSearch={this.performSearch} />
                {
                (this.state.loading)
                ? <p>Loading......</p>
                : <Gallery
                  searchTag={props.match.params.tag}
                  title={`${this.state.query}`}
                  data={this.state.images}
                />
              }
              </div>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// export component

export default App;
