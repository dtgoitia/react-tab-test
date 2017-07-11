const React = require('react');

class Header extends React.Component {
    render(){
        return (
            <ul className='header'>
                <li>Tab 1</li>
                <li>Tab 2</li>
                <li>Tab 3</li>
            </ul>
        )
    }
}

module.exports = Header;