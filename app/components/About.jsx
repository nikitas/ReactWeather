var React = require('react');

var About = (props) => {
    return (
        <div>
            <h2>Reactive weather </h2>
            <p>App that shows temperature in every city!</p>
            <p>Weather information is gathered by Santa (Open weather map):</p>
            <a href="http://openweathermap.org">Open weather map</a>
        </div>

    )
};

module.exports = About;