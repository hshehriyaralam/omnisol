import Waves from "./WavesBg"



const DynamicBgSection = () => {
  return (
          <section className="relative w-full h-screen overflow-hidden text-white flex items-center justify-center">
      <Waves
        lineColor="rgba(255,255,255,0.3)"
        backgroundColor="rgba(0,0,0,0.85)"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-lg opacity-80">
          Smooth animated waves in the background.
        </p>
      </div>
    </section>


  )
}

export default DynamicBgSection
