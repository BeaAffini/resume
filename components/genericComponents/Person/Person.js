import React, { Component } from "react";
import css from "./Person.module.scss"; /* scss is more powerful and easier to use than css, we are allowed to use it via next.js */
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default class Person extends Component {

	constructor(props) { /*first thing that's being executed*/
		super(props);
	}

	render() { /*what is used to show a person*/
		return ( 
			<> 
				<div {...storyblokEditable(this.props.blok)} className={css["wrapper"]}>
					<div className={css["content"]/* we are using the 'content' class avaiable in the file 'css' imported from ./Person.module.scss*/}> 
						<div className={[css["box"], css["head"]].join(" ")}>
							<h1>Resume {this.props.blok.title} {this.props.blok.lastname} {this.props.blok.firstname}</h1>
						</div>
						<div className={[css["box"], css["sidebar"]].join(" ")}>
							<div className={css["personalimage"]}><img src={this.props.blok.photo.filename} /></div>
							<div className={css["personaldetails"]}>
								<div className={css["personaldetailitem"]}>{this.props.blok.title} {this.props.blok.firstname} {this.props.blok.lastname}</div>
								<div className={css["personaldetailitem"]}>{this.props.blok.dateofbirth}</div>
								<div className={css["personaldetailitem"]}>{this.props.blok.location}</div>
							</div>
						</div>
						<div className={[css["box"], css["experience"]].join(" ")}>
							<h2>Experience</h2>
							{this.props.blok.experiences.map((nestedBlok) => ( /* for every thing inside of 'experiences' it's going to load a storyblok component and we are going to hand it in the nestedblok. This is possible thanks to 'pages' files _app.js, [[...slug]].js*/
								<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
							))}
						</div>
						<div className={[css["box"], css["foot"]].join(" ")}>
							<div>&copy; {this.props.blok.firstname} {this.props.blok.lastname} {new Date().getFullYear()}</div>
						</div>
					</div>
				</div>
			</>
		);
		
	}
}