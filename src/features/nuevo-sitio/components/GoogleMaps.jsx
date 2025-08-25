import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

export const GoogleMaps = () => {
    // const { coords } = useMap();

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if (!isLoaded) return <p>Cargando mapa...</p>;

    const coords = { lat: -34.6037, lng: -58.3816 }

    return (
        <GoogleMap
            zoom={11}
            center={{ lat: -34.6037, lng: -58.3816 }} // Buenos Aires por default
            mapContainerStyle={{ width: "50rem", height: "auto", borderRadius: '1rem' }}
        >
            {coords && <Marker position={coords} />}
        </GoogleMap>

    );
}

