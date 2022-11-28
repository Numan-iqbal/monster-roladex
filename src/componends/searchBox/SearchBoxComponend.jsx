import { Component } from "react";
import "../searchBox/SearchStyle.css";
class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          input="serach"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
