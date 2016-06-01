import React  from 'react'


class ListButton extends React.Component {

  makeid(){
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }

  handleClick(e){
    e.preventDefault();
    if(this.props.listValue === "one"){
      this.props.itemsCount(this.makeid())
    }
    else if(this.props.listValue === "two"){
      this.props.anotherItemsCount(this.makeid())
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default ListButton;
