import {useEffect, useState} from "react";
import Header from "./Header"
import Hero from "./Hero"
import Main from "./Main"
import Footer from "./Footer"
function Layout() {
    // const [data,setData]=useState([]);
    // const getData=()=>{
    //     fetch('data/data.json'
    //         ,{
    //             headers : {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function(response){
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson);
    //             setData(myJson)
    //         });
    // }

    useEffect(() => {
        window.feather.replace()
        //getData()
    },[])
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}

export default Layout;