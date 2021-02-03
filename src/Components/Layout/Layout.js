import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import React, {Component} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar'
import Drawer from '../Drawer/SideDrawer'


class Layout extends Component  {

  state = {
      showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () =>{
      this.setState((prevState) =>{
          return {showSideDrawer: !prevState.showSideDrawer};
      });
  }


render(){
  return(
          <Auxiliary>
              <Toolbar drawerToggleClicked ={this.sideDrawerToggleHandler}/>
              <Drawer 
              closed = {this.sideDrawerClosedHandler} 
              open = {this.state.showSideDrawer}/>
              <main className = {classes.Content}>
                  {this.props.children}
              </main>
          </Auxiliary>
      )
  };

}

export default Layout;













// const Layout = (props) => (

//   <Auxiliary>
//     <div>Toolbar, sideDrawers</div>
//     <main>{props.children}</main>
//   </Auxiliary>

// )

// export default Layout

