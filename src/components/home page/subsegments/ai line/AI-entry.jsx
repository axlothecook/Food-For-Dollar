import './AI-entry.scss';
import AIIcon from './svgs/components/AiIcon';
import HatIcon from './svgs/components/HatIcon';

const TalkToChef = () => {
    return (
        <div className='ai-homepage-wrapper'>
            <div>
                <HatIcon />
                <AIIcon />
            </div>
        </div>
    );
};

export default TalkToChef;