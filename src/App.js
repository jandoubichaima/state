import C from './Profile/Profilee';
import React from 'react';


class App extends React.Component {
    constructor() {
        super();
        this.state = { bool: true, };
    }
    test = () => this.setState({ bool:!this.state.bool });
    componentDidMount()
    {console.log("mount")}
    componentDidUpdate()
    {console.log("update")}
    componentWillUnmount()
    {console.log("unmount")}

    render() {

        return (
            <div>
                <button onClick={this.test}>{this.state.bool ? "hide" : "show"}</button>
                { this.state.boll ? <C /> : null }
            </div>
        );
    }
}
export default App;