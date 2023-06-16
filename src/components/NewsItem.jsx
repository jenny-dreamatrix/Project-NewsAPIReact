const NewsItem = (props) => {
    return ( 
        <article>
            <h2>{props.newsitem.title}</h2>
            <p>{props.newsitem.description}</p>
            <a target="_blank" href={props.newsitem.url}>Read more</a>
        </article>
     );
}

export default NewsItem;