import React, { Component } from 'react';

export class Control extends Component {
    render() {
        return (
            <div>
                <hr/>
                <button onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('CREATE');
                }.bind(this)}>생성</button>&nbsp;
                <button onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('UPDATE');
                }.bind(this)}>수정</button>&nbsp;
                <input type="button" value="삭제" onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('DELETE_PROC');
                }.bind(this)}/>
                <br/><hr/>
            </div>
        );
    }
}

export default Control;
