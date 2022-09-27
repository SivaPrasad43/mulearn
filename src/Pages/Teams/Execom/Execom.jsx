import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import styles from "./Execom.module.css";

import MentorCard from "../../../Components/MentorCard/MentorCard";
import execom from "./data/execom";

const Execom = () => {
	return (
		<>
			<Navbar />
			<div className={styles.firstviewmain_container}>
				<div className={styles.firstview_container}>
					<div className={styles.first_view}>
						<div className={styles.fv_texts}>
							<p className={styles.fv_heading}>
								<span>Executive</span> Committee
							</p>
							<p className={styles.fv_tagline}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.team_collection}>
				<div className={styles.team_list}>
					{execom.map((member) => {
						return (
							<MentorCard
								key={member.name}
								name={member.name}
								designation={member.position}
								image={member.image}
								linkedIn={member.linkedin ? member.linkedin : ""}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Execom;
