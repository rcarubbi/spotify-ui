import MadeForYouItem from "./madeForYouItem";

export default function MadeForYou({ userName }: { userName: string }) {
    return (
        <>
            <h1 className="font-semibold text-2xl mt-10">Made for {userName}</h1>
            <div className="grid grid-cols-8 gap-4 mt-4">
                <MadeForYouItem playListTitle="Heavy Metal" artistNames="Iron Maiden, Metallica, Guns'n Roses" playlistImageName="Iron Maiden - Fear of the dark" />
                <MadeForYouItem playListTitle="Heavy Metal" artistNames="Iron Maiden, Metallica, Guns'n Roses" playlistImageName="Iron Maiden - Fear of the dark" />
                <MadeForYouItem playListTitle="Heavy Metal" artistNames="Iron Maiden, Metallica, Guns'n Roses" playlistImageName="Iron Maiden - Fear of the dark" />
                <MadeForYouItem playListTitle="Heavy Metal" artistNames="Iron Maiden, Metallica, Guns'n Roses" playlistImageName="Iron Maiden - Fear of the dark" />
                <MadeForYouItem playListTitle="Heavy Metal" artistNames="Iron Maiden, Metallica, Guns'n Roses" playlistImageName="Iron Maiden - Fear of the dark" />
            </div>
        </>
    )
}
