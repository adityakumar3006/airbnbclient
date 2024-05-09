export default function PlaceImg({ place, index = 0, className = null }) {
    if (!place.photos?.length) {
        return null; // Return null instead of empty string
    }
    if (!className) {
        className = 'object-cover';
    }
    // const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';
    const backendUrl = "https://air-bnb-clone-mern.onrender.com"// Use the environment variable or default to localhost
    return (
        // <img className={className} src={`${backendUrl}/uploads/${place.photos[index]}`} />
        <img className={className} src={`https://air-bnb-clone-mern.onrender.com/uploads/${place.photos[index]}`} />

    );
}
