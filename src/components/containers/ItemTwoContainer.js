/*===============================================
                ITEM TWO CONTAINER
              **Smart Component**
=================================================*/
import React  from 'react'
import { connect } from 'react-redux'
import { anotherTestAction } from '../../actions/Actions'
import ListButton  from '../views/ListButton'
import { ListItemsTwo } from '../views/ListItemsTwo'


class ItemTwoContainer extends React.Component {

  componentWillMount() {
    // console.log('Item two conatiner WILL mount....');
  }

  componentDidMount() {
     // console.log('Item two conatiner DID mount....');
  }

  render() {

    const { items } = this.props

    return (
      <div>
        <ListItemsTwo {...this.props} />
        <ListButton listValue="two" label="List Two" {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    items: state.ReducerTwo.items
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    anotherItemsCount: function(items) {
      dispatch(anotherTestAction(items))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTwoContainer);
