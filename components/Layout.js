import Background from './Background';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}){
    return(
        <div>
            <Background/>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}