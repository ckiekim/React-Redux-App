import Update from '../components/Update';
import { connect } from 'react-redux';

export default connect(
    function(state) {
        let id, title, desc;
        for (let item of state.contents) {
            if (item.id === state.selected_id) {
                id = item.id;
                title = item.title;
                desc = item.desc;
                break;
            }
        }
        return({id, title, desc})   // id:id, title:title, desc:desc
    },
    function(dispatch) {
        return {
            onSubmit: function(id, title, desc) {
                //console.log(id, title, desc);
                dispatch({type:'UPDATE_PROC', id, title, desc});     // id:id, title:title, desc:desc
            }
        }
    }
)(Update);