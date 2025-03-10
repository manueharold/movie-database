import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ title }) => {
    const [hasLiked, setHasLiked] = useState(false)

    return (
        <div className="card">
            <h2>{title}</h2>

            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? "Liked" : "Like"}
            </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="card-container">
            <Card title="Star Wars" rating={5} isCool={true} />
            <Card title="Avatar" />
            <Card title="The Lion King" />
        </div>
    )
}


export default App
