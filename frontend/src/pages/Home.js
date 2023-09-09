const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
        </div>
    )
}

export default function Home() {
    const [users, setUsers] = useState([]);
}

// useEffect(() => {
//     fetch(`http://${config.server_host}:${config.server_port}/`)
//             .then(res => res.json())
//             .then(resJson => setUsers(resJson));
// })