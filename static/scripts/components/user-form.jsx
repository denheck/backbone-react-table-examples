var React = require('react');

module.exports = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var firstName = this.refs.first_name.getDOMNode().value.trim();
        var lastName = this.refs.last_name.getDOMNode().value.trim();
        var email = this.refs.email.getDOMNode().value.trim();
        var country = this.refs.country.getDOMNode().value.trim();

        if (!firstName || !lastName || !email || !country) {
            return;
        }

        var users = this.props.users;

        users.create({
            first_name: firstName,
            last_name: lastName,
            email: email,
            country: country
        });

        this.refs.first_name.getDOMNode().value = '';
        this.refs.last_name.getDOMNode().value = '';
        this.refs.email.getDOMNode().value = '';
        this.refs.country.getDOMNode().value = '';
    },
    render: function () {
        return (
            <form className="bearForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Yogi" ref="first_name" />
                <input type="text" placeholder="Bear" ref="last_name" />
                <input type="text" placeholder="yogi.bear@gmail.com" ref="email" />
                <input type="text" placeholder="USA" ref="country" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});
