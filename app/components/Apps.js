const React = require('react');
const Header = require('./Header');
const Tab1 = require('./Tab1');
const Tab2 = require('./Tab2');
const Tab3 = require('./Tab3');
 
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: 'Tab1'
    }
  }

  render() {
    return (
        <div>
          <Header />
          <Tab1 />
          <Tab2 />
          <Tab3 />
        </div>
    )
  }
}
 
module.exports = App;