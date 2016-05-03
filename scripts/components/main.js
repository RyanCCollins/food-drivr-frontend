import React from 'react';
import { Header, Footer } from './reusable-components.jsx';
import classNames from 'classnames/bind';



export default class App extends React.Component {
    render() {
    	var containerClass = classNames({
	      container: true,
	      'blue-background': window.location.pathname === '/',
	      'red-background': window.location.pathname === '/signup' || window.location.pathname === '/signin',
	      'lightgrey-background': window.location.pathname === '/donation'
	    });
        return (
            <div className={containerClass}>
            	<Header />
              	{this.props.children}
                <Footer />
            </div>
        );
    }
}

module.exports = App;
