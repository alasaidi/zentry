const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video src={src} loop muted autoPlay className="absolute left-0 top-0 size-full object-cover object-center" />
      <div className="relative z-10 flex size-full flex-center justify-between p-5 text-blue-50">
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};
const Features = () => {
  return (
    <section className="bg-black pb-52 -mt-[1px]">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Into the Metagame Layer</p>
        </div>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">Immerse yourself in a rich and ever-expanding ecosystem where a vibrant array of products converge into an interconnected universe.</p>
      </div>
      <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              radi<b>n</b>t
            </>
          }
          description="Unlock the secrets of the metagame layer and discover new ways to play, create and connect with others."
          isComingSoon
        />
      </div>
    </section>
  );
};

export default Features;
