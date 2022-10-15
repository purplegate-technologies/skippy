import './circle.css'

const CircularBar = () => {

    const circle: Element | null | any = document.querySelector(".progress-circle");
    const loading: Element | null | any = document.querySelector(".loading");

    const fakeUploadPercentage = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];
    let i = 0;

    const circumference: Element | null | any = circle.getTotalLength();

    const interval: any | Element | null = setInterval(() => {
        circle.style.strokeDashoffset =
            circumference - (fakeUploadPercentage[i] / 100) * circumference;
        loading.innerHTML = fakeUploadPercentage[i] + "%";
        i++;
        if (i === fakeUploadPercentage.length) {
            clearInterval(interval);
            loading.innerHTML = "Ok :)";
        }
    }, 1000);

    return (
        <div>
            <svg className="progress" width="100" height="100">
                <circle className="progress-circle" cx="50" cy="50" stroke="blue" r="30" fill="transparent" stroke-width="5" />
                <text className="loading" fill="blue" x="50" y="50" alignment-baseline="middle" text-anchor="middle"></text>
            </svg>
            <span className=" loading"></span>
        </div>
    )
}

export default CircularBar
