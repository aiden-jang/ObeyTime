import React from 'react'; 
import Footer from './footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="home-page">
                <p>This will be my main</p>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }; 
}

export default Home;