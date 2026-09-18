import profilepic from "./assets/image1.png"

function Card(){
    return(
    <div className="card">
        <img src={profilepic} alt="Profile Picture"></img>
        <h2>Sasmitha Sudusinghe</h2>
        <p>UG in University of Vavuniya</p>
    </div>
    );
}
export default Card