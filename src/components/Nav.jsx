import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return `
            <nav>
                <ol>
                    <li><a href="html">HTML</a></li>
                    <li><a href="css">CSS</a></li>
                    <li><a href="js">JavaScript</a></li>
                </ol> 
            </nav>
        `;
    }
}