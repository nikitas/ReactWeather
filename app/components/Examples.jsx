var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
    return (
        <div>
            <h2 className="page-title">Examples</h2>
            <p>Here are few example locations to try out:</p>
            <ul className="no-bullet">
                <li>
                    <Link to="/?location=Izmail">Izmail</Link>
                </li>
                <li>
                    <Link to="/?location=Barcelona">Barcelona</Link>
                </li>
            </ul>
        </div>
    )
};

module.exports = Examples;