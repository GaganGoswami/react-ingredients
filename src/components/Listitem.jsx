var React = require('react');

var Listitem = React.createClass({
	render: function() {
		return (
			<li>
				<h4>{this.props.text}</h4>
			</li>
		);
	}
});

module.exports = Listitem;
