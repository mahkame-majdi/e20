import "./style.css";

export default function MovieBox(props) {
    return(
        <div className="movie-box">
            <img src={props.image} alt={props.title}/>
            <h2 className="title">{props.title}</h2>
        </div>
    );
}