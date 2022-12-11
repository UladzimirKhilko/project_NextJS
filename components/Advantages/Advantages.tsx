import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './check.svg';


import cn from 'classnames';
import styles from './Advantages.module.css';
import { priceRu } from '../../helpers/helpers';


export const Advantages  = ({advantages}: AdvantagesProps): JSX.Element => {
	return (
		<div>
			{advantages?.map(a => (
				<div key={a._id} className={styles.advantage}>
					<CheckIcon/>
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vline} />
					<div className={styles.description}>{a.description}</div>

				</div>
			))}
		</div>
	);
		
};
