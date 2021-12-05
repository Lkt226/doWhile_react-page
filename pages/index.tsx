import type { NextPage } from 'next'
import Aside from '../components/partials/Aside'
import Header from '../components/partials/Header'
import Main from '../components/partials/Main'
import Footer from '../components/partials/Footer'


const Home: NextPage = () => {
    return (
        <div id="body">
            <Aside/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home