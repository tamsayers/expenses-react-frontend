var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className={this.props.block + "__" + this.props.name}>
        <label htmlFor={this.props.name}>{this.props.children}</label>
        <input type="text" name={this.props.name} value={this.props.value}/>
      </div>
    );
  }
});
