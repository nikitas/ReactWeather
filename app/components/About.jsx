var React = require('react');

var About = (props) => {
    return (
        <div>
            <h2 className="page-title">Reactive weather </h2>
            <p>App that shows temperature in every city!</p>
            <p>Weather information is gathered by Santa <a href="http://openweathermap.org">(Open weather map)</a></p>

            <h3>Cool JS developers:</h3>
            <ul className="no-bullet">
                <li><a href="https://www.linkedin.com/in/nikitat">Nikita Tkachenko</a></li>
                <li><a href="https://ua.linkedin.com/in/oleksandr-nechai-7948918">Sasha Nechai</a></li>
            </ul>

        </div>

    )
};

module.exports = About;