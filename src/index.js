require("./styles/main.scss");
var React = require('react');
var ReactDOM = require('react-dom');
import ChannelFeed from './components/channelFeed.jsx';

ReactDOM.render(<ChannelFeed channelId='1'/>, document.getElementById('channelFeed'));
