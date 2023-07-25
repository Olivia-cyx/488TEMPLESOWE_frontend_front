"use client"

import React, { useCallback, useRef, useState } from "react"
import styles from "../styles"
import { motion } from "framer-motion"
import { navVariants } from "../utils/motion"
import { GoogleMap, InfoWindow, Marker, useJsApiLoader, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"
import { mapStyles, markers } from "../constants/map"

type MarkerData = {
  id: number
  address: string
}

const googleMapsApiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey || "",
  })
  const defaultCenter = { lat: -37.756959, lng: 145.11248 }
  const [mapRef, setMapRef] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [infoWindowData, setInfoWindowData] = useState<MarkerData | undefined>()
  const mapRefe = useRef<google.maps.Map | null>(null)
  const onMapLoad = useCallback((map: any) => {
    setMapRef(map)
    const bounds = new google.maps.LatLngBounds()
    markers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }))
    map.setCenter(defaultCenter)
  }, [])

  const handleMarkerClick = (id: number, lat: number, lng: number, address: string) => {
    if (mapRefe.current) {
      const maps = window.google.maps
      mapRefe.current.panTo(new maps.LatLng(lat, lng))
    }
    setInfoWindowData({ id, address })
    setIsOpen(true)
  }

  return (
    <div className="xl:flex justify-center items-center xl:mt-20 xl:ml-40 xl:pl-30 xl:pt-10 md:mt-40 pt-40 pl-5 pr-5">
      <div className=" xl:w-[1000px] xl:h-[1000px] xl:ml-40 md:w-[360px] md:[360px] ">
        {" "}
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            id="map"
            mapContainerClassName="map-container"
            center={defaultCenter}
            zoom={16}
            onLoad={onMapLoad}
            onClick={() => setIsOpen(false)}
            options={{
              styles: mapStyles,
              minZoom: 15.5, // the furthest the user can zoom out
              maxZoom: 20,
            }}
          >
            {markers.map(({ address, lat, lng, icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png", iconSize = { width: 40, height: 60 } }, ind) => (
              <Marker
                key={ind}
                position={{ lat, lng }}
                icon={{
                  url: icon,
                  scaledSize: new window.google.maps.Size(iconSize.width, iconSize.height),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(0, 0),
                }}
                onClick={() => {
                  handleMarkerClick(ind, lat, lng, address)
                }}
              >
                {isOpen && infoWindowData?.id === ind && (
                  <InfoWindow
                    onCloseClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    <h3>{infoWindowData.address}</h3>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        )}
      </div>
      <div className="flex-1 xl:ml-40 xl:mr-10 xl:w-[600px] xl:h-[1034px] pl-20 pt-12 xl:mb-0 md:mb-50 pb-50">
        <div className="md:grid xl:grid-cols-1 md:grid-cols-2 gap-4 xl:text-[18px] md:text-[6px]" style={{ color: "#DCD5C6" }}>
          <p className="md:col-span-1 xl:col-span-full">
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
          </p>
          <p className="md:col-span-1 xl:col-span-full">
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
            31.St Kevin's Primary school
            <br /> 32.Templestowe Valley Primary School <br />
            33.Templestowe HeightsPrimary School
            <br />
            34.St Gregory The Great Primary
            <br /> 35.Templestowe College
            <br />
            <br />{" "}
            <span className="mb-30 pb-30" style={{ fontWeight: "bold", textDecoration: "underline" }}>
              MEDICAL CENTRES
            </span>{" "}
            <br />
            41.Foote Street Medical Centre
            <br /> 42.Doncaster-Templestowe Medical Centre <br />
            43.Manningham Medical Centre
            <br /> 44.Macedon Medical Centre
          </p>
        </div>
      </div>
    </div>
  )
}
