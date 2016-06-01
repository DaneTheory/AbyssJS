import React  from 'react'
import ItemOneContainer  from '../containers/ItemOneContainer'
import ItemTwoContainer  from '../containers/ItemTwoContainer'


const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>Welcome To The Abyss</h1>
        <div>
          <ItemOneContainer />
        </div>
        <div>
          <ItemTwoContainer />
        </div>
      </div>
    );
  }
});

export default Home;
