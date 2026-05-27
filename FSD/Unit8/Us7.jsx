// write react component and an img by clicking on button image changes randomly from a given array of images
import { useState } from "react";
import img1 from './assets/hero.png';
import img2 from './assets/pr.jpg';
import img3 from './assets/im2.jpg';
import img4 from './assets/im.jpg';
import img5 from './assets/images.jpg';


function Us7() {
    const images = [img1, img2, img3, img4, img5];
    const [img, setimg] = useState(images[0]);

    function showing() {
        const random = Math.floor(Math.random() * images.length);
        setimg(images[random]);
    }

    return (
        <div>
            <button onClick={showing}>change</button>
            <br></br>
            <br></br>
            <img src={img}/>
        </div>
    );
}

export default Us7;
