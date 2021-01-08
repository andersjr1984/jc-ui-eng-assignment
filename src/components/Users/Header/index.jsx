import { connect } from 'react-redux';

import Header from './Header';
import { setDrawerOpen } from '../store/drawerSlice';

const mapDispatchToProps = {
  setDrawerOpen,
};

export default connect(null, mapDispatchToProps)(Header);
