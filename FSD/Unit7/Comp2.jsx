// write react code to render a component with following data
// 1. a para with green color, font size 30px and bold style. use external css for this para and use class selection
// 2. render an image hero.png given in assets folder
// 3. the current time and current date in pink color and alignment should be center

import './Comp2.css';
import heroImage from './assets/hero.png';

function Comp2() {
    const currentDateTime = new Date().toLocaleString();

    return (
        <div>
            <br></br>
            <p className="green-bold-text">
                This is a styled paragraph.
            </p>
            <br></br>
            <img src={heroImage} alt="Hero" />
            <div style={{ color: 'pink', textAlign: 'center' }}>
                {currentDateTime}
            </div>
        </div>
    );
}

export default Comp2