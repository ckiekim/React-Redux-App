import React, { Component } from 'react';

export class Create extends Component {
    render() {
        return (
            <form onSubmit={function(e){
                e.preventDefault();
                let title = e.target.title.value;
                let desc = e.target.desc.value;
                this.props.onSubmit(title, desc);
            }.bind(this)}>
                <p><input type="text" name="title" placeholder="제목"/></p>
                <p><textarea name="desc" placeholder="내용" cols="40" rows="4"></textarea></p>
                <p><input type="submit"/></p>
            </form>
        );
    }
}

export default Create;
