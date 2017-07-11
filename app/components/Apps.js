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

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab){
    this.setState({ activeTab: tab })
    console.log('tab:', tab);
    console.log('this.state:', this.state);
    
  }
  render() {
    return (
        <div>
          <Header changeTab={this.changeTab} />
          { this.state.activeTab === 'Tab1' ? <Tab1 /> : null}
          { this.state.activeTab === 'Tab2' ? <Tab2 /> : null}
          { this.state.activeTab === 'Tab3' ? <Tab3 /> : null}
        </div>
    )
  }
}
 
module.exports = App;