import Search from '../../components/SearchBox/SearchBox';
import Slider from '../../components/Slider/Slider';

function Home() {
    return (
        <div className="home-container">
            <Search stays={true} />
            <Slider/>
        </div>
    );
}

export default Home;
