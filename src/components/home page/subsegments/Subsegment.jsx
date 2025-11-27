import './Subsegments.scss';

const Subsegment = ({ mainText, subtext, component }) => {
    // console.log('item in subsegment:');
    // console.log(mainText);
    // console.log(subtext);
    // console.log(component);
    return (
        <div className='segment'>
            <div className='segment-text'>
                <h1>{mainText}</h1>
                <h2>{subtext}</h2>
            </div>
            {component}
        </div>
    );
};

export default Subsegment;