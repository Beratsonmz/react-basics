import { getImageUrl } from "./utils"
interface Person {
    name: string,
    imageId: string,
    size: string,
}

function Profile(props: Person) {
    return <img
        src={getImageUrl(props.imageId)}
        alt={props.name }
        width={props.size}
        height={props.size}
    />
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile name="Berat" imageId='1bX5QH6' size="100" />
            <Profile name="Ayşenur" imageId='OKS67lh' size="200" />

        </section>
    );
}