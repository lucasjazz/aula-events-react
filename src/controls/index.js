
export default function Controls({ audioRef }) {
    function handlePause() {
        audioRef.current.pause();
    };
    function handlePlay() {
        audioRef.current.play();
    };
    function handleStop() {
        audioRef.current.load();
    };
    return (
        <div>
            <button onClick={() => handlePlay()}>Play</button>
            <button onClick={() => handlePause()}>Pause</button>
            <button onClick={() => handleStop()}>Stop</button>
        </div>
    )
}