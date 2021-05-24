import React from 'react';
import './progressBar.styles.scss';

const ProgressBar = ({ steps = [], currentPosition = 0 }) => {
    return (
        <div className='progressBar'>
            {
                steps.map((item, index) => (
                    <div
                        key={index}
                        className={`progress contained disabled ${currentPosition > index && 'active'}`}
                        style={{ width: `${100 / steps.length}%` }}
                        index={index}
                        title={item}
                    >
                        <span
                            style={{ opacity: currentPosition > index ? 1 : .6 }}
                            className={`${currentPosition > index ? 'active' : 'disabled'} text`}
                        >
                            {item}
                        </span>
                    </div>
                ))
            }
            <div className={`finalProgressPoint contained ${currentPosition === steps.length ? 'active' : 'disabled'}`}>
                {steps.length}
            </div>
        </div>
    );
}

export default React.memo(ProgressBar, (prevProps, nextProps) => {
    return prevProps.currentPosition === nextProps.currentPosition
});
