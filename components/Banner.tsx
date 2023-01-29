import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"

interface Props {
  netflixOriginals: Movie[]
}


function Banner({netflixOriginals}: Props) {
  
  const [movie,setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  },[netflixOriginals])
 
  return (
    <div>
      <div className='absolute top-0 left-0 h-[95vh] w-screen'>
        <Image 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          fill
          style={{objectFit: 'contain'}}
          alt="/"
        />  
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{movie?.title || movie?.name || movie?.original_name}</h1>
      <p>{movie?.overview}</p>
    </div>
  )
}

export default Banner