"use client"

import React, { useState } from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"

const mapStyles = [
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
]

const googleMapsApiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey || "",
  })
  const center = useMemo(() => ({ lat: -37.756959, lng: 145.11248 }), [])

  return (
    <div className="flex justify-center items-center mt-40">
      <div className="App w-[1100px] h-[1034px] ml-40">
        {" "}
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap mapContainerClassName="map-container" center={center} zoom={16} options={{ styles: mapStyles }}>
            <Marker position={{ lat: -37.756959, lng: 145.11248 }} />
          </GoogleMap>
        )}
      </div>
      <div className="flex-1 ml-40 mr-40 w-[542px] h-[1034px]">
        <p className="text-[18px]" style={{ color: "#DCD5C6" }}>
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>SPORTS & LEISURE </span>
          <br />
          01. Manningham Templestowe Leisure Centre <br />
          02.Westerfolds Sport Centre <br />
          03.Rosanna Golf Course <br />
          04.The Aquarena Aquatic and Leisure Centre <br />
          05.Eastern Golf Club <br />
          <br />
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>SOMETHING GREEN</span> <br />
          21.Westerfolds Park
          <br />
          22.Koonung Creek Reserve <br />
          23.Finns Reserve <br />
          24.Templestowe Reserve <br /> 25.Main Yarra Trail
          <br /> 26. Ruffey Creek Linear Park <br />
          <br />
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>SHOPPING</span> <br />
          11.Templestowe Village SC <br />
          12.The Pines Shopping Centre
          <br /> 13.Westfield Doncaster <br />
          14.Macedon Plaza
          <br />
          <br /> <span style={{ fontWeight: "bold", textDecoration: "underline" }}>BUS ROUTE </span>
          <br /> 309: City - Donvale <br />
          281: Templestowe - Deakin University
          <br /> 282: Templestowe Village SC, Doncaster SC
          <br /> 280: Tunstall Square SC, Doncaster <br />
          <br />
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>QUALITY SCHOOLS </span>
          <br />
          31.St Kevin’s Primary school
          <br /> 32.Templestowe Valley Primary School <br />
          33.Templestowe HeightsPrimary School
          <br />
          34.St Gregory The Great Primary
          <br /> 35.Templestowe College
          <br />
          <br /> <span style={{ fontWeight: "bold", textDecoration: "underline" }}>MEDICAL CENTRES</span> <br />
          41.Foote Street Medical Centre
          <br /> 42.Doncaster-Templestowe Medical Centre <br />
          43.Manningham Medical Centre
          <br /> 44.Macedon Medical Centre
        </p>
      </div>
    </div>
  )
}
