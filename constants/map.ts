export const markers = [
  { address: "488 Templestowe", lat: -37.756959, lng: 145.11248, icon: "/map/Component 15 – 1.png" },
  { address: "01. Manningham Templestowe Leisure Centre", lat: -37.75, lng: 145.128, icon: "/Logo/golf.png" },
  { address: "02.Westerfolds Sport Centre", lat: -37.756985, lng: 145.123924, icon: "/Logo/golf.png" },
  { address: "03.Rosanna Golf Course", lat: -37.746985, lng: 145.103595, icon: "/Logo/golf.png" },
  { address: "04.The Aquarena Aquatic and Leisure Centre", lat: -37.774003, lng: 145.124338 },
  { address: "05.Eastern Golf Club", lat: -37.774003, lng: 145.22802 },
  { address: "05.Eastern Golf Club", lat: -37.747711, lng: 145.138501 },
]

export const mapStyles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#2D3747" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#E5D1BA" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#F6F1E6" }],
  },
  {
    featureType: "water",
    stylers: [
      {
        color: "#1994bf",
      },
      {
        saturation: -69,
      },
      {
        gamma: 0.99,
      },
      {
        lightness: 43,
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#BAB393" }], // Change to the color you want for reserves
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
]
