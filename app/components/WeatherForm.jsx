var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) { // why arrow function doesnt work
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location); //What is on search?
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;