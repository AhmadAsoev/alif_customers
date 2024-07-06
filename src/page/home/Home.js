import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Main from "../../component/main/Main";
import "./home.css"

function Home() {
    return (
        <div className="home-page">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;