var InputText = React.createClass({
  render: function() {
    var name = this.props.name;
    var className = "expense__" + name;
    return (
      <div className={className}>
        <label htmlFor={name}>{this.props.children}</label>
        <input type="text" name={name} value={this.props.value}/>
      </div>
    );
  }
});

module.exports = InputText;