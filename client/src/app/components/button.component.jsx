import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button style={{ background: this.props.color }}>
        {this.props.children}
      </button>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    const color = "purple";
    const children = this.props.messages.map(message =>
      <Message text={message.text} color={color} />);
    return <div>{children}</div>;
  }
}

class ExampleComponent extends React.Component {
  render() {
    <span style="background-color: #ffff00;">const { handleSubmit } = this.props</span>;

    return (
      <div>
        <button onClick={ <span style="background-color: #ffff00;">handleSubmit</span> }>Click Me!</button>
      </div>
    );
  }
}

export default {
  Button, Message, MessageList, ExampleComponent
};
