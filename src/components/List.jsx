var React = require('react');
var Listitem = require('./Listitem.jsx');

var List = React.createClass({
	render: function() {

		var createItem = function(text,index){
			return <Listitem key={index+text} text={text}/>;
		};

		return (
			<ul>{this.props.items.map(createItem)}</ul>
		);
	}
});

module.exports = List;
