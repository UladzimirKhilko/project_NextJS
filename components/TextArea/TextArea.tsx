import { ForwardedRef, forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';


// eslint-disable-next-line react/display-name
export const TextArea  = forwardRef( ({ className, error, ...props }:TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(styles.textareaWrapper, className)}>
			<textarea className={cn(styles.textarea, {
				[styles.error]: error
			})} ref={ref} {...props}/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});
