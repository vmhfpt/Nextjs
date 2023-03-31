import LayoutTemp from "./components/templayout";
import { useEffect, useState } from "react";
const sleep = (ms) => {
    return new Promise(res => setTimeout(res, ms));
}
const Demo = () => {
    const [data, setData] = useState(false);
    const [isLoad, setIsLoad] = useState(true);
    useEffect(() => {
       sleep(5000).then(() => {
          setData({title : 'demo client-side-fetching', 'page' : 2});
          setIsLoad(false);
       })
    }, []);
    if(!data){
        return <h1>Page is not data yet</h1>;
    }
    if(isLoad){
        return <h1>Page is loading</h1>;
    }

    return (<>
    <LayoutTemp home={data}>
        <h1>client side fetching page</h1>
    </LayoutTemp>
    
    </>);
}
export default Demo;