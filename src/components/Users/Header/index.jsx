import { connect } from 'react-redux';
import * as R from 'ramda';

import Header from './Header';
import { setDrawerOpen } from '../store/drawerSlice';
import { getFilterBy, getFilterTerm, setFilterBy, setFilterTerm } from '../store/filterSlice';

const mapStateToProps = R.applySpec({
  filterBy: getFilterBy,
  filterTerm: getFilterTerm,
});

const mapDispatchToProps = {
  setDrawerOpen,
  setFilterBy,
  setFilterTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
