import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { yelpSearch, setLocation } from '../../util/yelp_api_util';

const mapStateToProps = ( { entities } ) => {

  const { location } = entities;
  return {
    location
  }
};

const mapDispatchToProps = dispatch => ({
  yelpSearch: (searchInfo) => dispatch(yelpSearch(searchInfo)),
  setLocation: (location) => dispatch(setLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
