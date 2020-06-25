import React from 'react';
import Cards  from './components/Cards/Cards';
import Chart  from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';


class App extends React.Component {
    render() {
        return (
            <div className={ styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}
export default App;