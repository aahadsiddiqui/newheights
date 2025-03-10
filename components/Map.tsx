import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '300px'
  };

  const center = {
    lat: 43.653225,  // Toronto coordinates
    lng: -79.383186
  };

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ color: "#d6e2e6" }]
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [{ color: "#4b6878" }]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }]
      },
      {
        featureType: "water",
        stylers: [{ color: "#a3ccff" }]
      }
    ]
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
          options={mapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <p className="text-center text-gray-600 mt-2">
        Serving the Greater Toronto Area
      </p>
    </div>
  );
};

export default Map; 