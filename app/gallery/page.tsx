"use client"

type ImageProps = {
  alt: string
  src: string
  size: "full" | "half"
}
const Image: React.FC<ImageProps> = ({ src, alt, size }) => {
  const widthClass = size === "full" ? "w-full" : "w-1/2"

  return (
    <div className={`${widthClass} p-1 md:p-2`}>
      <img alt={alt} className="block h-full w-full object-cover object-center" src={src} />
    </div>
  )
}

const GalleryPage: React.FC = () => (
  <div className=" bg-primary-yellow md:mt-20 sm:mt-12 mt-10">
    <div className="teamcoverPage flex flex-col md:gap-10 gap-6">
      <div className="flex justify-center">
        <img src="/Logo/488 gallery.png" alt="logo" className="xl:w-[300px] md:w-[250px] w-[180px] object-cover" />
      </div>

      <div className="container mx-auto px-5 pb-20 lg:px-32 lg:pb-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div>
            <Image src="Building front_ed.png" alt="gallery" size="full" />
          </div>
          <div className="flex w-1/2 flex-wrap">
            <Image src="kitchen.png" alt="gallery" size="half" />
            <Image src="Bathroom image.png" alt="gallery" size="half" />
            <Image src="bar_upstairs.png" alt="gallery" size="full" />
          </div>
          <div className="flex w-1/2 flex-wrap">
            <Image src="living_Room.png" alt="gallery" size="full" />
            <Image src="Mask Group 6.png" alt="gallery" size="half" />
            <Image src="Mask Group 13.png" alt="gallery" size="half" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default GalleryPage
