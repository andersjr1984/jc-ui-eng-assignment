import { connect } from 'react-redux';
import * as R from 'ramda';

import UserDrawer from './UserDrawer';
import {
  fetchIndividualUser,
  getDrawerOpen,
  getUserId,
  resetDrawerData,
  setDrawerOpen,
} from '../store/drawerSlice';

const mapStateToProps = R.applySpec({
  userId: getUserId,
  drawerOpen: getDrawerOpen,
});

const mapDispatchToProps = {
  fetchIndividualUser,
  resetDrawerData,
  setDrawerOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDrawer);
