import React from 'react';

// Material UI
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';

// Styles
import './Team.css';

import zinoHofmann from './profile-pics/zino_hofmann.jpg';
import arianBabori from './profile-pics/arian_babori.jpg';
import marcoPierreFernandezBurgos from './profile-pics/marco_pierre_fernandez_burgos.jpg';
import kristinaShoyleva from './profile-pics/kristina_shoyleva.jpg';

const Team = () => {
	return (
		<section className="card-wrapper">
			<Card className="card">
				<CardTitle title="Meet the Team" subtitle="Our team for the Computational Thinking project assignment" />
				<CardText>
					<section className="team-member">
						<img src={zinoHofmann} className="team-member__avatar" alt="Zino Hofmann" />
						<Subheader className="team-member__name">Zino Hofmann</Subheader>
						<p className="team-member__description">Zino helped to design the Algorithm, implemented the Algorithm, made the Website, and made the Keynote presentation.</p>
					</section>
					<section className="team-member">
						<img src={arianBabori} className="team-member__avatar" alt="Arian Babori" />
						<Subheader className="team-member__name">Arian Babori</Subheader>
						<p className="team-member__description">Arian helped to design the Algorithm, and gave the presentation.</p>
					</section>
					<section className="team-member">
						<img src={marcoPierreFernandezBurgos} className="team-member__avatar" alt="Marco Pierre Fernandez Burgos" />
						<Subheader className="team-member__name">Marco Pierre Fernandez Burgos</Subheader>
						<p className="team-member__description">Marco helped to design the Algorithm, helped to imporve the Algorithm, and wrote about the resreach on the Wiki.</p>
					</section>
					<section className="team-member">
						<img src={kristinaShoyleva} className="team-member__avatar" alt="Kristina Shoyleva" />
						<Subheader className="team-member__name">Kristina Shoyleva</Subheader>
						<p className="team-member__description">Kristina helped to design the Algorithm, and wrote on the Wiki.</p>
					</section>
				</CardText>
			</Card>
		</section>
	);
};

export default Team;
