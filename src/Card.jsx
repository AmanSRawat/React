import profilePic from './assets/Img.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"  />
            <h2 className='card-title'>Aman Singh Rawat</h2>
            <p className='card-text'>I am BTech Student in Graphic Era Hill University</p>
        </div>
    );
}

export default Card