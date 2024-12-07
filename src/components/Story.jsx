import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorner from "./RoundedCorner";
import Button from "./button";

const Story = () => {
  const frameRef = useRef(null);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    // Calculate relative positions with more nuanced calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Increased responsiveness and more dynamic rotation
    const rotateX = ((yPos - centerY) / centerY) * -15; // Increased range
    const rotateY = ((xPos - centerX) / centerX) * 15; // Increased range

    // Add subtle scaling and shadow for depth effect
    gsap.to(element, {
      duration: 0.5, // Slightly longer duration for smoother transition
      rotateX,
      rotateY,
      scale: 1.05, // Subtle scale-up on hover
      boxShadow: "0 20px 30px rgba(0,0,0,0.2)", // Adds depth illusion
      transformPerspective: 800, // Increased perspective for more 3D feel
      ease: "power3.out", // Softer, more natural easing
      transformOrigin: "center center", // Ensure consistent rotation point
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (element) {
      gsap.to(element, {
        duration: 0.5, // Match move duration
        rotateX: 0,
        rotateY: 0,
        scale: 1, // Return to original size
        boxShadow: "0 10px 15px rgba(0,0,0,0.1)", // Subtle shadow at rest
        ease: "power3.out", // Consistent easing
      });
    }
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px] ">the multiversal Ip world</p>
        <div className="relative size-full">
          <AnimatedTitle title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>" sectionId="#story" containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10" />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img ref={frameRef} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseLeave} onMouseEnter={handleMouseLeave} onMouseMove={handleMouseMove} src="/img/entrance.webp" alt="entrance" className="object-contain " />
              </div>
            </div>
            <RoundedCorner />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end ">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p>
            <Button id="realm-btn" title="discover prologue" containerClass="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
