import {useEffect, useRef} from "react";

function init(canvas, color) {

    let width = window.innerWidth
    let height = window.innerHeight
    window.onresize = () => {
        width = window.innerWidth
        height = window.innerHeight
        canvas.width = width
        canvas.height = height

    };
    canvas.width = width
    canvas.height = height

    var c = canvas.getContext("2d");

//create te container that will hold the boincing balls.
    var container = {
        x: 0,
        y: 0,
        width: width,
        height: height
    };

    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

//create the array of circles that will be animated
    var circles = new Array(12).fill(0).map((item) => ({
        x: randomIntFromInterval(1, width),
        y: randomIntFromInterval(1, height),
        r: randomIntFromInterval(1, 20),
        vx: randomIntFromInterval(1, 4) / 2,
        vy: randomIntFromInterval(1, 4) / 2,
        color: 1
    }));

    function animate() {
        //draw the container
        c.fillStyle = color;
        c.fillRect(container.x, container.y, width, height);

        //loop throughj the circles array
        for (var i = 0; i < circles.length; i++) {
            //draw the circles
            c.fillStyle = 'rgba(0,0,0,1)'
            c.beginPath();
            c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
            c.fill()

            //time to animate our circles ladies and gentlemen.
            if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + width) {
                circles[i].vx = -circles[i].vx;
            }

            if (circles[i].y + circles[i].r + circles[i].vy > container.y + height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
                circles[i].vy = -circles[i].vy;
            }

            circles[i].x += circles[i].vx
            circles[i].y += circles[i].vy
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}


const FloatingCircles = ({style, color }) => {
    const canvas = useRef(null);
    useEffect(() => {
        init(canvas.current, color);
    }, []);
    return (<canvas style={style} ref={canvas} id="canvas"></canvas>);
}

export default FloatingCircles;
