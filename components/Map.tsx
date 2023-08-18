"use client"

import React, { useCallback, useRef, useState } from "react"
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api"
import { mapStyles, markers } from "../constants/map"
import styles from "../styles"

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
    <div className={`${styles.paddings}`}>
      <div className="flex lg:flex-row flex-col justify-center items-center 2xl:gap-32 xl:gap-24 lg:gap-14 md:gap-10 gap-6">
        {/* map */}
        <div className="xl:w-[1000px] xl:h-[1000px] lg:w-[800px] lg:h-[800px] md:w-[600px] md:h-[600px] sm:w-[550px] sm:h-[550px] w-[360px] h-[360px]">
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
              {markers.map(
                ({ address, lat, lng, icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png", iconSize = { width: 40, height: 60 } }, ind) => (
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
                )
              )}
            </GoogleMap>
          )}
        </div>

        {/* text */}
        <div className="flex lg:flex-col flex-row lg:gap-0 sm:gap-10 gap-4 text-secondary-white">
          <div className="lg:text-base sm:text-xs text-[8px]">
            <span className="font-bold underline">SPORTS & LEISURE </span>
            <br />
            01. Manningham Templestowe Leisure Centre <br />
            02.Westerfolds Sport Centre <br />
            03.Rosanna Golf Course <br />
            04.The Aquarena Aquatic and Leisure Centre <br />
            05.Eastern Golf Club <br />
            <br />
            <span className="font-bold underline">SOMETHING GREEN</span> <br />
            21.Westerfolds Park
            <br />
            22.Koonung Creek Reserve <br />
            23.Finns Reserve <br />
            24.Templestowe Reserve <br /> 25.Main Yarra Trail
            <br /> 26. Ruffey Creek Linear Park <br />
            <br />
          </div>

          <div className="lg:text-base sm:text-xs text-[8px]">
            <span className="font-bold underline">SHOPPING</span> <br />
            11.Templestowe Village SC <br />
            12.The Pines Shopping Centre
            <br /> 13.Westfield Doncaster <br />
            14.Macedon Plaza
            <br />
            <br /> <span className="font-bold underline">BUS ROUTE </span>
            <br /> 309: City - Donvale <br />
            281: Templestowe - Deakin University
            <br /> 282: Templestowe Village SC, Doncaster SC
            <br /> 280: Tunstall Square SC, Doncaster <br />
            <br />
            <span className="font-bold underline">QUALITY SCHOOLS </span>
            <br />
            31.St Kevin's Primary school
            <br /> 32.Templestowe Valley Primary School <br />
            33.Templestowe HeightsPrimary School
            <br />
            34.St Gregory The Great Primary
            <br /> 35.Templestowe College
            <br />
            <br /> <span className="font-bold underline">MEDICAL CENTRES</span> <br />
            41.Foote Street Medical Centre
            <br /> 42.Doncaster-Templestowe Medical Centre <br />
            43.Manningham Medical Centre
            <br /> 44.Macedon Medical Centre
          </div>
        </div>
      </div>
    </div>
  )
}
