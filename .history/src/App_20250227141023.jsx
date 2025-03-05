import {useState} from "react";

const Card = ({ title }) => {
    const [hasLiked, setHasLiked] = useState(false)

    return (
        <div className="card">
            <h2>{title}</h2>

            <button onClick={() => setHasLiked(true)}>
                {hasLiked ? "Liked" : "Like"}
            </button>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Card title="Star Wars" />
            <Card title="Avatar" />
            <Card title="The Lion King" />
        </div>
    )
}


export default App
