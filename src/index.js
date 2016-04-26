require("./styles/main.scss");
var React = require('react');
var ReactDOM = require('react-dom');
import ChannelFeed from './components/channelFeed.jsx';
var data = require("./data/channel.json");

ReactDOM.render(<ChannelFeed data={JSON.parse(data)}/>, document.getElementById('channelFeed'));
