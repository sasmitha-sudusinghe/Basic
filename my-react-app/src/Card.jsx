import profilepic from "./assets/image1.png"

function Card(){
    return(
    <div className="card">
        <img className="card-image" src={profilepic} alt="Profile Picture"></img>
        <h2 className="card-title">Sasmitha Sudusinghe</h2>
        <p>UG in University of Vavuniya</p>
    </div>
    );
}
export default Card