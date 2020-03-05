import Create from '../components/Create';
import { connect } from 'react-redux';

export default connect(
    null,
    function(dispatch) {
        return {
            onSubmit: function(title, desc) {
                //console.log(title, desc);
                dispatch({type:'CREATE_PROC', title, desc});     // title:title, desc:desc
            }
        }
    }
)(Create);