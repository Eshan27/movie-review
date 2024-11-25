import React from 'react';
import './SignUp.css'
import Image from 'next/image';

function SignUpCarousal() {
  const moviePosters = [
    '/posters/12thFail.jpg',
    '/posters/darkKnight.jpg',
    '/posters/GOW.jpeg',
    '/posters/interstellar.jpg',
    '/posters/maharaja.jpg',
    '/posters/myNameIsKhan.jpg',
    '/posters/oppenheimer.jpg',
    '/posters/parasite.jpg',
    '/posters/seven.jpg',
    '/posters/shawshank.jpeg',
  ];
  return (
    <div className="carousal-container">
      <div className="carousel">
        <div className="carousel-track">
          {moviePosters.map((poster, index) => (
            <Image
              key={index}
              src={poster}
              alt={`Movie Poster ${index + 1}`}
              className="carousel-poster"
              width={1000}
              height={1000}
              // fill={true}
            />
          ))}
          {/* Duplicate posters for infinite scrolling */}
          {moviePosters.map((poster, index) => (
            <Image
              key={`duplicate-${index}`}
              src={poster}
              alt={`Duplicate Poster ${index + 1}`}
              className="carousel-poster"
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
      <div className='subtitle'> 
        Welcome to Worth-a-Share, your go-to destination
        for in-depth movie reviews, ratings, and discussions!
        <br />
        <br />
        Here, you&apos;ll find a community of fellow movie lovers, all<br />
        eager to explore, discuss, and share their perspectives<br />
        on the latest releases and timeless classics.
        <br />
        <br />
        By signing up, you&apos;ll unlock personalized <br />
        recommendations, access to exclusive content, and the<br />
        opportunity to contribute your own reviews and ratings.
        <br/>
        <br />
        <b>
          Get ready to dive into the world of cinema-your next<br />
          favourite movie awaits!
        </b>
      </div>
    </div>
  )
}

export default SignUpCarousal