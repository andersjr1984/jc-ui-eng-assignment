import { connect } from 'react-redux';
import * as R from 'ramda';

import UserTable from './UserTable';
import { fetchUsers, getUsers, getUsersPending } from './userSlice';

const mapStateToProps = R.applySpec({
  users: getUsers,
  usersPending: getUsersPending,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
