import React from 'react';
import { Link } from 'react-router';
import auth from '../../utils/auth.js';

class UserMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userRole: parseInt(localStorage.getItem('role'), 10) ? 1 : 0
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    auth.logout()
      .then(() => {
        console.log('You have been logged out!');
        localStorage.clear();
        auth.onChange(false);
        this.context.router.push('/');
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <nav refs="userMenu" className="header-menu bg-white text-black text-right">
        <div className="header-menu__arrow bg-white" />
        <Link to="/" className="header-menu__item">Dashboard</Link>
        {this.state.userRole === 1 ? '' : <Link to="/donation" className="header-menu__item">Donate</Link>}
        <Link to="/profile" className="header-menu__item">Settings</Link>
        <a className="header-menu__logout pointer-cursor" onClick={this.handleLogout}>Logout</a>
     </nav>
    );
  }
}

UserMenu.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = UserMenu;
