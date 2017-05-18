import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import FooterComponent from './components/footer';
import Wrapper from './components/wrapper';
import {SideNav, SideNavItem, NavItem, Navbar, Button, Icon} from 'react-materialize';


class Main extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			title:'Cowboy Bebop',
			total_episode: 'total_episodes',
			image_url_lge: 'http://anilist.co/img/dir/anime/reg/1.jpg',
			image_url_banner: 'http://anilist.co/img/dir/anime/banner/1.jpg',
			description: 'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive. While traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?'
		};

		this.showInfo = this.showInfo.bind(this);
	}
	showInfo (data) {
		this.setState ({
			title: data.title_romaji,
			total_episode: data.total_episodes,
			image_url_lge: data.image_url_lge,
			image_url_banner: data.image_url_banner,
			description: data.description
		});
	};


	render () {
		return (
			<div>
				<Header />
				<Wrapper onSubmit={this.showInfo}  dataValue={this.state}/>
				<FooterComponent />
			</div>
		);
	}
}

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);