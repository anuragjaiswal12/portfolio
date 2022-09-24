import {useState} from 'react';
import Navbar from './Navbar';
import Home from './Component/Home';
import Footer from './Footer';
import Resume from './Component/Resume';
import About from './Component/About';
import Project from './Component/Project';

export const Main = () => {
    const [value, setValue] = useState();    
    if(value=='project'){
        return(
            <>
                <Navbar setValue={setValue} />
                <Project />
                <Footer />
            </>
        );
    }
    else if(value == 'home'){
        return(
            <>
                <Navbar setValue={setValue} />
                <Home />
                <Footer />
            </>
        );
    }
    else if(value == 'resume'){
        return(
            <>
                <Navbar setValue={setValue} />
                <Resume />
                <Footer />
            </>
        );
    }
    else if(value == 'about'){
        return(
            <>
                <Navbar setValue={setValue} />
                <About />
                <Footer />
            </>
        );
    }
    else{
        return(
            <>
                <Navbar setValue={setValue} />
                <Home />    
                <Footer />
            </>
        );
    }
}