import { connect } from 'react-redux';
import * as R from 'ramda';

import UserDrawer from './UserDrawer';
import {
  addUser,
  fetchIndividualUser,
  getDrawerOpen,
  getUserData,
  getUserDataPending,
  getUserId,
  resetDrawerData,
  setDrawerOpen,
  updateUser,
} from '../store/drawerSlice';

const mapStateToProps = R.applySpec({
  userId: getUserId,
  drawerOpen: getDrawerOpen,
  userData: getUserData,
  userDataPending: getUserDataPending,
});

const mapDispatchToProps = {
  addUser,
  updateUser,
  fetchIndividualUser,
  resetDrawerData,
  setDrawerOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDrawer);
