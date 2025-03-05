import {useState} from "react";



const Card = ( { title } ) => {
    return (
        <div className ="card">
            <h2>{title}</h2>

            <button onClick={() => setHasLiked(true)} >
                {hasLiked ? 'Liked' : 'Like'}
            </button>
        </div>
    )
}

const App = () => {
    const [hasLiked, setHasLiked] = useState(false);

    return (
        <div className="card-container">
        <Card title = "Star Wars" rating={5} isCool={true} ></Card>
        <Card title = "Avatar" ></Card>
        <Card title = "The Lion King" ></Card>
        </div>
    )
}

export default App
