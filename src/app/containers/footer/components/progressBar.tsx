import moment from 'moment';
export default function ProgressBar({ timeElapsed, totalTime }: { timeElapsed: string, totalTime: string }) {
    const timeElapsedDateTime: moment.Moment = moment(timeElapsed, 'mm:ss');
    const totalTimeDateTime: moment.Moment = moment(totalTime, 'mm:ss');
    const timeElapsedInSeconds = timeElapsedDateTime.seconds() + timeElapsedDateTime.minutes() * 60;
    const totalTimeInSeconds = totalTimeDateTime.seconds() + totalTimeDateTime.minutes() * 60;
    const percent = timeElapsedInSeconds / totalTimeInSeconds;
    const totalPixels = 384;
    const elapsedPixels = totalPixels * percent;

    return (
        <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">{timeElapsed}</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div style={{ width: `${elapsedPixels}px` }} className={`h-1 rounded-full bg-zinc-200`}></div>
            </div>
            <span className="text-xs text-zinc-400">{totalTime}</span>
        </div >
    )
}
