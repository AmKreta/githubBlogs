import React, { useMemo } from 'react';
import './steps.styles.scss';

//importing reusable components
import Button from '../../../../../../reusableComponents/button/button.component';
import ProgressBar from '../../../../../../reusableComponents/progressBar/progressBar.component';


const StepsCard = ({ title, content, goTo }) => {
    return (
        <div className="step" onClick={goTo}>
            <h2 className="title">{title}</h2>
            <div className="content">{content}</div>
            <Button label={title} />
        </div>
    );
}

const Steps = ({ currentStage, setCurrentStage, goTo }) => {
    const cards = useMemo(() => [
        { title: 'Create' },
        { title: 'Preview' },
        { title: 'Seo' },
        { title: 'Publish' }
    ], []);

    return (
        <div className="stepsContainer">
            <div className="steps">
                <StepsCard title={cards[currentStage]['title']} goTo={goTo} />
            </div>
            <ProgressBar steps={['create', 'preview', 'seo', 'publish']} />
        </div>
    );
}

export default Steps;