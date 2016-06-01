/*===============================================
                ITEM ONE CONTAINER
              **Smart Component**
=================================================*/
import React  from 'react'
import { connect } from 'react-redux'
import { testAction } from '../../actions/Actions'
import ListButton  from '../views/ListButton'
import { ListItemsOne } from '../views/ListItemsOne'


class ItemOneContainer extends React.Component {

  componentWillMount() {
    // console.log('Item one conatiner WILL mount....');
  }

  componentDidMount() {
    // console.log('Item one conatiner DID mount....');
  }

  render() {

    const { items } = this.props

    return (
      <div>
        <ListItemsOne {...this.props} />
        <ListButton listValue="one" label="List One" {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    items: state.ReducerOne.items
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    itemsCount: function(items) {
      dispatch(testAction(items))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemOneContainer);
