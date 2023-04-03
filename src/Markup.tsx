
const today = new Date();

function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

export default function MarkUpExample() {
    const person = {
        avatarUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        name: "Hedy Lamarr"
    }


    return (
        <div>
            <h1>Hedy Lamarr's Todos for {formatDate(today)}</h1>
            <img
                src={person.avatarUrl}
                alt={person.name + "'s picture"}
                className="photo"
            />
            <ul style={{
                backgroundColor: 'black',
                color: 'pink'
            }}>
                <li> {person.name} Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
    );
}