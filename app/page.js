'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isMessageRevealed, setIsMessageRevealed] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const audioRef = useRef(null);

  const cards = [
    'start',
    'how-it-started',
    'how-its-going',
    'i-promise',
    'you-and-me',
    'special-message',
    'thank-you'
  ];

  const carouselImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
  ];

  const handleStart = () => {
    setIsStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    }
    setTimeout(() => setCurrentCard(1), 500);
  };

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsMessageRevealed(false); // Reset message reveal when changing cards
    }
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsMessageRevealed(false); // Reset message reveal when changing cards
    }
  };

  const handleReplay = () => {
    setCurrentCard(0);
    setIsStarted(false);
    setIsMessageRevealed(false);
    setCarouselIndex(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleCarouselNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    if (isStarted && audioRef.current) {
      audioRef.current.loop = true;
    }
  }, [isStarted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE5D4] to-[#FFD6E8] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 md:opacity-30" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/song/Preet Re  Dhadak 2  Siddhant Chaturvedi, Triptii Dimri  Darshan R, Jonita G, Rochak K, Gurpreet S.mp3"
        loop
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8 py-8 md:py-12">
        <div className="w-full max-w-2xl mx-auto">
          {/* Card Container */}
          <div className="relative">
            {/* Start Card */}
            {currentCard === 0 && (
              <div className="animate-fade-in">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Top Section - Pink */}
                  <div className="bg-[#FDFFE5] h-48 md:h-64 flex items-center justify-center relative overflow-hidden rounded-t-3xl card-section-divider">
                    <Image
                      src="/gifs/giphy.gif"
                      alt="Cute cats on scooter"
                      width={300}
                      height={200}
                      className="object-contain h-full w-auto animate-bounce-subtle"
                      unoptimized
                    />
                    {/* Curved divider */}
                    <svg className="absolute bottom-0 left-0 w-full h-6" viewBox="0 0 400 40" preserveAspectRatio="none">
                      <path d="M0,40 Q100,0 200,20 T400,40 L400,40 L0,40 Z" fill="white" />
                    </svg>
                  </div>
                  
                  {/* Bottom Section - White */}
                  <div className="bg-white p-8 md:p-12 text-center -mt-6 relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 animate-bounce-subtle">
                      Our Future Together🌷
                    </h1>
                    <p className="text-gray-600 mb-8 text-lg">
                      A little glimpse of the life we're creating together...
                    </p>
                    <button
                      onClick={handleStart}
                      className="bg-gradient-to-r from-[#FF6B9D] to-[#FF8CC8] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-subtle"
                    >
                      START
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* How It All Started Card */}
            {currentCard === 1 && (
              <div className="animate-slide-in">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-[#FBE9F3] h-48 md:h-64 flex items-center justify-center relative p-4 overflow-hidden rounded-t-3xl card-section-divider">
                    <Image
                      src="/gifs/giphy (4).gif"
                      alt="Rabbit with phone"
                      width={300}
                      height={200}
                      className="object-contain h-full w-auto"
                      unoptimized
                    />
                    {/* Curved divider */}
                    <svg className="absolute bottom-0 left-0 w-full h-6" viewBox="0 0 400 40" preserveAspectRatio="none">
                      <path d="M0,40 Q100,0 200,20 T400,40 L400,40 L0,40 Z" fill="white" />
                    </svg>
                  </div>
                  <div className="bg-white p-8 md:p-12 text-center -mt-6 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
                      How It All Started 💕
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    It all begin with a simple story reply that changed everything. From studies to random chats to endless laughter, our story found its start💗
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* How It's Going Card */}
            {currentCard === 2 && (
              <div className="animate-slide-in">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-[#F7EEF5] h-48 md:h-64 flex items-center justify-center relative p-4 overflow-hidden rounded-t-3xl card-section-divider">
                    <Image
                      src="/gifs/giphy (1).gif"
                      alt="Cats back to back"
                      width={300}
                      height={200}
                      className="object-contain h-full w-auto"
                      unoptimized
                    />
                    
                    {/* Curved divider */}
                    <svg className="absolute bottom-0 left-0 w-full h-6" viewBox="0 0 400 40" preserveAspectRatio="none">
                      <path d="M0,40 Q100,0 200,20 T400,40 L400,40 L0,40 Z" fill="white" />
                    </svg>
                  </div>
                  <div className="bg-white p-8 md:p-12 text-center -mt-6 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B9D] mb-6">
                      How It's Going 🥀
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    Arguments might come and go, and we may experience moments of frustration, but our connection remains unbreakable, and in the end love always wins!🥰

                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* I Promise You Card */}
            {currentCard === 3 && (
              <div className="animate-slide-in">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-[#FFE2F8] h-48 md:h-64 flex items-center justify-center relative p-4 overflow-hidden rounded-t-3xl card-section-divider">
                    <Image
                      src="/gifs/giphy (2).gif"
                      alt="Cats holding paws"
                      width={300}
                      height={200}
                      className="object-contain h-full w-auto"
                      unoptimized
                    />
                    {/* Curved divider */}
                    <svg className="absolute bottom-0 left-0 w-full h-6" viewBox="0 0 400 40" preserveAspectRatio="none">
                      <path d="M0,40 Q100,0 200,20 T400,40 L400,40 L0,40 Z" fill="white" />
                    </svg>
                  </div>
                  <div className="bg-white p-8 md:p-12 text-center -mt-6 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                      I Promise You 💖
                    </h2>
                    <div className="space-y-4 text-gray-700 text-lg max-w-md mx-auto text-center">
                      <p>I'll always listen to your heart.</p>
                      <p>I'll never stop caring, no matter what.</p>
                      <p>I'll always choose you, every single day.</p>
                      <p>I'll stay by your side through everything.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* You & Me Card */}
            {currentCard === 4 && (
              <div className="animate-slide-in">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-[#B8E6FF] rounded-t-3xl p-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                      You & Me 💝
                    </h2>
                  </div>
                  <div className="bg-white p-6 md:p-8">
                    {/* Image Carousel */}
                    <div className="relative">
                      <div className="overflow-hidden rounded-2xl">
                        <div 
                          className="flex transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                        >
                          {carouselImages.map((img, idx) => (
                            <div key={idx} className="min-w-full">
                              <Image
                                src={img}
                                alt={`Memory ${idx + 1}`}
                                width={600}
                                height={400}
                                className="w-full h-64 md:h-96 object-cover rounded-2xl"
                                unoptimized
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Carousel Navigation */}
                      <button
                        onClick={handleCarouselPrev}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all transform hover:scale-110 z-10"
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={handleCarouselNext}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-purple-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-purple-600 transition-all transform hover:scale-110 z-10 border-2 border-white"
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Carousel Dots */}
                      <div className="flex justify-center gap-2 mt-4">
                        {carouselImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCarouselIndex(idx)}
                            className={`h-3 rounded-full transition-all duration-300 ${
                              idx === carouselIndex ? 'bg-blue-500 w-8' : 'bg-gray-300 w-3'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Special Message Card */}
            {currentCard === 5 && (
              <div className="animate-slide-in">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Top Section - Purple */}
                  <div className="bg-[#E8D5FF] p-8 md:p-12 text-center relative rounded-t-3xl card-section-divider">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8">
                      A Special Message
                    </h2>
                    {/* Inner Card with Textured Background */}
                    <div className="bg-[#D6D9FD]rounded-2xl p-6 md:p-8 border-2 border-white relative shadow-lg" style={{
                      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    }}>
                      {/* Unicorns */}
                      <div className="flex justify-center items-end gap-6 md:gap-8 mb-4 relative">
                        {/* Left Unicorn */}
                        <div className="flex flex-col items-center">
                          <Image
                            src="/gifs/giphy (3).gif"
                            alt="Love"
                            width={120}
                            height={120}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                      
                      {/* TAP HERE Button - Arrow Shape */}
                      {!isMessageRevealed ? (
                        <button
                          onClick={() => setIsMessageRevealed(true)}
                          className="w-full flex justify-center mt-4 cursor-pointer"
                        >
                          <div className="relative animate-pulse-subtle transform hover:scale-105 transition-transform duration-300">
                            {/* Arrow Shape - Downward Pointing */}
                            <div className="relative" style={{
                              width: '180px',
                              height: '100px',
                            }}>
                              <svg width="180" height="100" viewBox="0 0 180 100" className="absolute" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#FF6B9D" />
                                    <stop offset="100%" stopColor="#FF4757" />
                                  </linearGradient>
                                </defs>
                                {/* Arrow shape - rectangular body with triangular point */}
                                <path d="M 30 15 L 150 15 L 150 50 L 180 50 L 90 85 L 0 50 L 30 50 Z" 
                                      fill="url(#arrowGradient)" 
                                      stroke="#FFD700" 
                                      strokeWidth="2.5" 
                                      strokeLinejoin="round" />
                              </svg>
                              {/* Text */}
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-base md:text-lg z-10 pt-2">
                                <span className="leading-tight">TAP</span>
                                <span className="leading-tight">HERE</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ) : (
                        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl animate-fade-in mt-4">
                          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                         
Every moment with you feels like a small piece of our forever. We've laughed, dreamed, and grown
together and this is just the beginning. No matter where life takes us, I'll always hold
these memories close. You're not just my present, you're my favourite part of every tomorrow.
<br></br>
I MISS YOU MORE THAN YOU KNOW💕
                         
                          
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Thank You Card */}
            {currentCard === 6 && (
              <div className="animate-slide-in">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Top Section - Pink */}
                  <div className="bg-[#FFB6D9] p-8 md:p-12 text-center relative rounded-t-3xl card-section-divider">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-bounce-subtle" style={{ fontFamily: 'cursive, sans-serif' }}>
                      THANK YOU
                    </h2>
                    <div className="flex justify-center items-center relative mb-4">
                      {/* <Image
                        src="/gifs/Tea Time Tapioca GIF.gif"
                        alt="Thank you bear"
                        width={150}
                        height={150}
                        className="object-contain relative z-10"
                        unoptimized
                      /> */}
                      {/* Floating hearts */}
                      <span className="absolute top-2 left-1/4 text-2xl animate-bounce-subtle" style={{ animationDelay: '0s' }}>💕</span>
                      <span className="absolute top-6 right-1/4 text-xl animate-bounce-subtle" style={{ animationDelay: '0.3s' }}>💖</span>
                      <span className="absolute bottom-2 left-1/3 text-lg animate-bounce-subtle" style={{ animationDelay: '0.6s' }}>💗</span>
                    </div>
                    {/* Curved divider */}
                    <svg className="absolute bottom-0 left-0 w-full h-6" viewBox="0 0 400 40" preserveAspectRatio="none">
                      <path d="M0,40 Q100,0 200,20 T400,40 L400,40 L0,40 Z" fill="white" />
                    </svg>
                  </div>
                  
                  {/* Bottom Section - White */}
                  <div className="bg-white p-8 md:p-12 text-center -mt-6 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#FF6B9D] mb-6">
                      For Everything
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Thank you for always being there when I needed someone. You make moments feel special just by being a part of them.
                      <br></br>
                      HAPPY BIRTHDAY MIYA JEE 💕
                    </p>
                    <button
                      onClick={handleReplay}
                      className="bg-gradient-to-r from-[#FF6B9D] to-[#FF8CC8] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      REPLAY
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          {isStarted && currentCard > 0 && currentCard < cards.length && (
            <div className="flex justify-center gap-4 mt-6 md:mt-8 animate-fade-in">
              <button
                onClick={handlePrev}
                disabled={currentCard === 1}
                className="bg-pink-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-pink-600 transition-all transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentCard >= cards.length - 1}
                className="bg-purple-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-purple-600 transition-all transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
