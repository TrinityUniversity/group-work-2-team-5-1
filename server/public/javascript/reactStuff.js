
const ce = React.createElement

class Hello extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ce('div', null, `Hello ${this.props.toWhat}`);        
    }
}

class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {toggle: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState(state => ({
            toggle: !state.toggle
        }));
    }

    render() {

        if(this.state.toggle) {
            return ce('div', null, ce('button',{onClick: (e) => this.handleClick(e)}, `Toggle ${this.state.toggle}`), ce(Hello, {toWhat: "World"}, null));
        } else {
            return ce('button',{onClick: (e) => this.handleClick(e)}, `Toggle ${this.state.toggle}`);
        }
        
    }
}

ReactDOM.render(
    ce(Toggle,null,null),
    document.getElementById("react-root")
);