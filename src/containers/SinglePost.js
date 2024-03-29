import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getSinglePost, addComment, delPost, updatePost } from '../actions'
import SinglePost from '../components/SinglePost';

const mapStateToProps = (state) => ({
  activePost: state.activePost,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getSinglePost,
  addComment,
  delPost,
  updatePost,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SinglePost)
