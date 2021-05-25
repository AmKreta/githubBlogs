import React, { useMemo, useCallback } from 'react';
import './steps.styles.scss';

//importing reusable components
import Button from '../../../../../../reusableComponents/button/button.component';
import ProgressBar from '../../../../../../reusableComponents/progressBar/progressBar.component';


const StepsCard = ({ title, content, link, goTo }) => {
    const redirect = useCallback(() => {
        goTo(link);
    }, [goTo, link]);

    return (
        <div className="step" onClick={redirect}>
            <h2 className="title">{title}</h2>
            <div className="content">{content}</div>
            <Button label={link} />
        </div>
    );
}

const Steps = ({ currentStage, setCurrentStage, goTo }) => {

    const cards = useMemo(() => [
        { title: 'Create', link: 'editor' },
        { title: 'Preview', link: 'preview' },
        { title: 'Seo', link: 'seo' },
        { title: 'Publish', link: 'publish' }
    ], []);

    return (
        <div className="stepsContainer">
            <div className="steps">
                <StepsCard title={cards[currentStage]['title']} link={cards[currentStage]['link']} goTo={goTo} />
            </div>
            <ProgressBar steps={['create', 'preview', 'seo', 'publish']} />
        </div>
    );
}

export default Steps;