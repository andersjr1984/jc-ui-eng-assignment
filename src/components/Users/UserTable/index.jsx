import { connect } from 'react-redux';
import * as R from 'ramda';

import UserTable from './UserTable';
import { fetchUsers, getUsers, getUsersPending } from '../store/userSlice';
import { setDrawerOpen, setUserId } from '../store/drawerSlice';

const mapStateToProps = R.applySpec({
  users: getUsers,
  usersPending: getUsersPending,
});

const mapDispatchToProps = {
  fetchUsers,
  setDrawerOpen,
  setUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
