import { useEffect, useState } from "react";
import Header from "../components/Header"
import NewsItem from "../components/NewsItem";

const NewsList = () => {
    const API_KEY = import.meta.env.VITE_API_KEY
    const [sucheingabe, setSucheingabe] = useState()
    const [sprache, setSprache] = useState("de")
    const urlAPI = `http://newsapi.org/v2/everything?q=${sucheingabe}&language=${sprache}&apiKey=${API_KEY}`
    const req = new Request(urlAPI);
    const [newsData, setNewsData] = useState()

    useEffect(() => {
        fetch(req)
        .then((res) => res.json())
        .then((newsData) => setNewsData(newsData.articles))
        .catch((err) => console.log(`Fehler: ${err}`))
    },[sucheingabe, sprache])

    return ( 
        <>
        <Header/>
        <input type="text" onChange={(e) => setSucheingabe(e.target.value)}/>
        <select onChange={(e) => setSprache(e.target.value)}>
            <option value="de">Deutsch</option>
            <option value="ar">Arabisch</option>
            <option value="zh">Chinesisch</option>
            <option value="en">Englisch</option>
            <option value="fr">Französisch</option>
            <option value="he">Hebräisch</option>
            <option value="it">Italienisch</option>
            <option value="nl">Niederländisch</option>
            <option value="no">Norwegisch</option>
            <option value="pt">Portugiesisch</option>
            <option value="ru">Russisch</option>
            <option value="sv">Schwedisch</option>
            <option value="es">Spanisch</option>
          </select>
        <section>
            {newsData?.map((newsitem, index) => {return <NewsItem newsitem={newsitem} key={index} />})}
        </section>
        </>
     );
}

export default NewsList;