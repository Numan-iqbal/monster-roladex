import { Component } from "react";
import CardList from "./componends/cardList/CardListComponends";
import "./App.css";
import SearchBox from "./componends/searchBox/SearchBoxComponend";
class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   name: "Abdul Rehman",
    //   age: "21",
    // };
    // **************************
    // for
    // mappppppppp
    // method
    // *******************
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
          className="monster-search-box"
        />
        {/* {filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>Hi {monster.name}</h1>
            </div>
          );
        })} */}
        <CardList monsters={filterMonsters} />
        {/* <h1>Hi {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState(
              () => {
                return {
                  name: "Numan",
                };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          Click me For my age
        </button> */}
      </div>
    );
  }
}

// buttonChangeHandler = () => {
//   console.log(this.state);
// };

export default App;
