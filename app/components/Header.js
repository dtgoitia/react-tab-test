const React = require('react');

class Header extends React.Component {
    render(){
        return (
            <ul className='header'>
                <li onClick={this.props.changeTab.bind(null,'Tab1')}>Tab 1</li>
                <li onClick={this.props.changeTab.bind(null,'Tab2')}>Tab 2</li>
                <li onClick={this.props.changeTab.bind(null,'Tab3')}>Tab 3</li>
            </ul>
        )
    }
}

module.exports = Header;