import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    state = { lat: null, errMessage: '' };

    componentDidMount() {

        //Geolocation API contain two callbacks, first of it is success function and second is error
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errMessage && !this.state.lat) {
            return <div>Err: {this.state.errMessage}</div>
        }

        if (this.state.lat && !this.state.errMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message='Please accept the location request.' />
    }

    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));