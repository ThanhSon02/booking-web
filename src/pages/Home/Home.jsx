import Search from '../../components/SearchBox/SearchBox';

function Home() {
    return (
        <div className="home-container">
            <Search stays={true} />
        </div>
    );
}

export default Home;
