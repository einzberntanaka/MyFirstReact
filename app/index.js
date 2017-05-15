import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class Button extends React.Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick () {
		this.props.onClick(this.props.incrementValue);
	};
	render () {
		return (
			<button onClick={this.handleClick}>
				{this.props.incrementValue}
			</button>
		);
	}
}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Can not apply event in this function
/*function Button (props) {
	handleClick () {
		props.onClick(props.incrementValue);
	};

	return (
		<button onClick={props.onClick}>
			{props.incrementValue}
		</button>
	);
}*/

class Main extends React.Component {
	constructor (props) {
		super(props);
		this.state = { counter:2 };

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick (incrementValue) {
		this.setState (prevState => ({
			counter: prevState.counter + incrementValue
		}));
	};
	render () {
		return (
			<div>
				<Welcome name="First User"/>
				<Button incrementValue={1} onClick={this.handleClick} />
				<Button incrementValue={5} onClick={this.handleClick} />
				<Button incrementValue={10} onClick={this.handleClick} />
				<Button incrementValue={20} onClick={this.handleClick} />
				<h1>{this.state.counter}</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);