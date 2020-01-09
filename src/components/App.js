import React from "react";
import "../stylesheets/App.scss";
import "../stylesheets/layout/design.scss";
import "../stylesheets/layout/fill.scss";
import "../stylesheets/layout/share.scss";
import { fetchCard } from '../services/FetchCard';
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CollapsibleContainer from "./CollapsibleContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paletteChecked: 1,
      name: "",
      job: "",
      file: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      isFormValid: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
  }

  validateForm() {
    const email = this.state.email;
    const phone = this.state.phone;

    const newState = {
      ...this.state, phone: phone.match(/^[0-9]{9}/), email: email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    };

    if (newState.name && newState.job && newState.file && newState.phone && newState.email && newState.linkedin && newState.github) {
      this.setState({
        isFormValid: true
      })
    } else {
      this.setState({
        isFormValid: false
      })
    }
  };

  handleInput(data) {
    const name = data.inputName;
    const value = data.inputValue;
    this.setState(
      { [name]: value },
      () => {
        this.validateForm();
      });
  }

  handlePalette(paletteChecked) {
    this.setState({
      paletteChecked: paletteChecked
    })
  }
  render() {
    return (
      <div className="App">
        <Header />

        <main className="cards">
          <Card
            info={this.state}
            file={this.state.file}

          />
          <CollapsibleContainer
            handleInput={this.handleInput}
            handlePalette={this.handlePalette}
            file={this.state.file}
            isFormValid={this.state.isFormValid}

          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
