/*===============================================
            PRIMARY LAYOUT WRAPPER
=================================================*/
import React  from 'react'
import Home  from '../pages/Home'


const MainLayout = (props) => {
  return (
  <div>
    <header>
    </header>
    <main>
      <Home />
    </main>
  </div>
  );
}

export default MainLayout;
