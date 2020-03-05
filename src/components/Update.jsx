import React, { Component } from 'react';

export default class Update extends Component {
    state = {
        id: this.props.id,
        title: this.props.title,
        desc: this.props.desc,
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={function(e){
                e.preventDefault();
                let id = e.target.id.value;
                let title = e.target.title.value;
                let desc = e.target.desc.value;
                this.props.onSubmit(parseInt(id), title, desc);
            }.bind(this)}>
                <input type="hidden" name="id" defaultValue={this.props.id}/>
                <p><input type="text" name="title" onChange={this.onChangeHandler.bind(this)} 
                            defaultValue={this.props.title}/></p>
                <p><textarea name="desc" cols="40" rows="4" onChange={this.onChangeHandler.bind(this)} 
                            defaultValue={this.props.desc}></textarea></p>
                <p><input type="submit" value="수정"/></p>
            </form>
        );
    }
}

// 다음과 같이 코딩해도 돌아는 감
/* export default class Update extends Component {
    render() {
        return (
            <form onSubmit={function(e){
                e.preventDefault();
                let id = e.target.id.value;
                let title = e.target.title.value;
                let desc = e.target.desc.value;
                this.props.onSubmit(parseInt(id), title, desc);
            }.bind(this)}>
                <input type="hidden" name="id" defaultValue={this.props.id}/>
                <p><input type="text" name="title" defaultValue={this.props.title}/></p>
                <p><textarea name="desc" cols="40" rows="4" defaultValue={this.props.desc}></textarea></p>
                <p><input type="submit"/></p>
            </form>
        );
    }
} */