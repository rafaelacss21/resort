import React, { Component } from "react";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    greeting: "welcome to beach resort",
    name: "john"
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
