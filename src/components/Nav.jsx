import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        let tags = [];
        for (let item of this.props.data) {
            tags.push(<li key={item.id}><a href="#" data-id={item.id} onClick={
                function(e) {
                    e.preventDefault();
                    this.props.onClick(parseInt(e.target.dataset.id));
                }.bind(this)
            }>{item.title}</a></li>)
        }
        //console.log(tags);
        return (
            <nav>
                <ol>
                    {tags}
                </ol> 
            </nav>
        );
    }
}