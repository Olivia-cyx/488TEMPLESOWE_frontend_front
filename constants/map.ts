export const markers = [
  { address: "488 Templestowe", lat: -37.756959, lng: 145.11248, icon: "/Logo/488onMap.png", iconSize: { width: 70, height: 70 } },
  { address: "01. Manningham Templestowe Leisure Centre", lat: -37.75, lng: 145.128, icon: "/Logo/golf.png", iconSize: { width: 20, height: 30 } },
  { address: "02.Westerfolds Sport Centre", lat: -37.756985, lng: 145.123924, icon: "/Logo/golf.png", iconSize: { width: 20, height: 30 } },
  { address: "03.Rosanna Golf Course", lat: -37.746985, lng: 145.103595, icon: "/Logo/golf.png", iconSize: { width: 20, height: 30 } },
  { address: "04.The Aquarena Aquatic and Leisure Centre", lat: -37.774003, lng: 145.124338, icon: "/Logo/golf.png", iconSize: { width: 20, height: 30 } },
  { address: "05.Eastern Golf Club", lat: -37.774003, lng: 145.22802, icon: "/Logo/golf.png", iconSize: { width: 20, height: 30 } },
  { address: "21.Westerfolds Park", lat: -37.747711, lng: 145.138501, icon: "/Logo/park.png", iconSize: { width: 20, height: 30 } },
  { address: "22.Koonung Creek Reserve", lat: -37.780711, lng: 145.0945544, icon: "/Logo/park.png", iconSize: { width: 20, height: 30 } },
  { address: "23.Finns Reserve", lat: -37.75562026769183, lng: 145.1140129377171, icon: "/Logo/park.png", iconSize: { width: 20, height: 30 } },
  { address: "24.Templestowe Reserve", lat: -37.780711, lng: 145.0945544, icon: "/Logo/park.png", iconSize: { width: 20, height: 30 } },
  { address: "25.Main Yarra Trail", lat: -37.754948, lng: 145.137684, icon: "/Logo/park.png", iconSize: { width: 20, height: 30 } },
  { address: "26.Ruffey Creek Linear Park", lat: -37.760711, lng: 145.123393, icon: "/Logo/park.png", iconSize: { width: 20, height: 30 } },
  { address: "11.Templestowe Village SC", lat: -37.756816, lng: 145.121293, icon: "/Logo/shopping.png", iconSize: { width: 20, height: 30 } },
  { address: "12.The Pines Shopping Centre", lat: -37.763711, lng: 145.1672, icon: "/Logo/shopping.png", iconSize: { width: 20, height: 30 } },
  { address: "13.Westfield Doncaster", lat: -37.786398, lng: 145.124393, icon: "/Logo/shopping.png", iconSize: { width: 20, height: 30 } },
  { address: "14.Macedon Plaza", lat: -37.774239, lng: 145.113492, icon: "/Logo/shopping.png", iconSize: { width: 25, height: 30 } },
  { address: "309: City - Donvale", lat: -37.758051, lng: 145.1129393, icon: "/Logo/busstop.png", iconSize: { width: 25, height: 30 } },
  { address: "281: Templestowe - Deakin University", lat: -37.760711, lng: 145.119393, icon: "/Logo/busstop.png", iconSize: { width: 25, height: 30 } },
  { address: "282: Templestowe Village SC, Doncaster SC", lat: -37.756711, lng: 145.110238, icon: "/Logo/busstop.png", iconSize: { width: 25, height: 30 } },
  { address: "280: Tunstall Square SC, Doncaster", lat: -37.756711, lng: 145.11697, icon: "/Logo/park.png", iconSize: { width: 20, height: 30 } },
  { address: "31.St Kevin’s Primary school", lat: -37.761, lng: 145.121821, icon: "/Logo/education.png", iconSize: { width: 30, height: 30 } },
  { address: "32.Templestowe Valley Primary School", lat: -37.759711, lng: 145.108529, icon: "/Logo/education.png", iconSize: { width: 30, height: 30 } },
  { address: "33.Templestowe HeightsPrimary School", lat: -37.766562, lng: 145.119647, icon: "/Logo/education.png", iconSize: { width: 30, height: 30 } },
  { address: "34.St Gregory The Great Primary", lat: -37.780047, lng: 145.12319, icon: "/Logo/education.png", iconSize: { width: 30, height: 30 } },
  { address: "35.Templestowe College", lat: -37.767614, lng: 145.123396, icon: "/Logo/education.png", iconSize: { width: 30, height: 30 } },
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
