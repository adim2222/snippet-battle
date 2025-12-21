import './Mainbar.css';
import globalToken from '../../Hooks/globalToken';

const Mainbar = () => {
	return (
		<div className='Mainbar'>
			<h1>What is snippet-battle?</h1>
			<p>
				Snippet Battle is a mapping-focused take on the popular Build Battle
				minigame from Minecraft, adapted for the world of osu! mapping. In each
				round, participants compete by creating a beatmap for the same short
				song snippet within a limited time frame. The goal is to showcase
				creativity, musical interpretation, flow, and overall mapping quality
				under equal conditions. At the start of every round, there is a vote to
				decide which mapper will be used as a reference. The selected mapper’s
				style serves as a guideline and inspiration for that round — not to be
				copied directly, but interpreted in each participant’s own way. Once the
				mapping time is over, all submissions are reviewed and voted on, and the
				best map of the round is chosen by the players. Snippet Battle is
				designed as both a competitive and educational experience, encouraging
				mappers to experiment, adapt to different styles, and improve through
				direct comparison.
			</p>
			<p>elo</p>
		</div>
	);
};

export default Mainbar;
