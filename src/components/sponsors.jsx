
import { sponsors } from '../constants'
import { styles } from '../styles'
import { cn } from "../lib/utils";
import {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";


const Sponsors = () => {

  return (
    <section className='h-full w-full flex flex-col items-center justify-evenly pb-24 pt-4'>
      <div
      > 
        {/* <p className={`${styles.sectionSubText}`}>InC 2024</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Our Sponsors.</h2>
      </div>

      <div className='flex flex-col w-full h-full items-center gap-10 sm:py-16 py-8'>
        {
          Object.keys(sponsors).map(obj => (
            <div key={obj} className='flex flex-col gap-8 items-center'>
              <h3 className='text-center text-3xl font-bold capitalize pb-2 border-b-2 border-orange-100'>
                {obj !== 'association' ? obj === 'co' ? <><span>Co</span><span className='lowercase'>-sponsors</span></> : obj + (sponsors[obj].length > 1 ? " sponsors" : " sponsor") : "In Association With"}
              </h3>
              <div className='flex flex-wrap items-center justify-center gap-8'>
                {
                  sponsors[obj].map(sponsor => (
                    <SponsorCard key={sponsor.name} width={obj === 'title' ? 300 : 250} height={obj === 'title' ? 200 : 150}>
                      <img loading='lazy'  src={sponsor.src} alt={sponsor.name} className='w-full h-full object-contain pointer-events-none'/>
                    </SponsorCard>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      

    </section>
  )
} 

export default Sponsors;

const SponsorCard = ({ children, width, height }) => {
  return (
    <CardContainer className="inter-var"
    containerClassName={`bg-gradient-to-r from-dark-blue via-light-blue to-orange-100`}
    >
      <CardBody className={`relative group/card shadow-lg shadow-orange-100/[0.6] bg-white border-primary p-4 border`}
      style={{width, height}}
      >
        <CardItem translateZ="100" className="w-full h-full group-hover/card:shadow-secondary group-hover/card:shadow-lg">
          {children}
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

{/* <Tilt options={{
  reverse: true,
  max: 30,
  perspective: 1000,
  scale: 1.06,
  speed: 5000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)"
}} 
style={{
  width,
  height,
  background: 'linear-gradient(to right, #1746A2, #5F9DF7, #d4621c)',
  padding: 2,
  // boxShadow: '0px 4px 10px 0px rgba(255, 255, 255, 0.8)',
}}
>
  <div className='bg-white w-full h-full p-px'>
    {children}
  </div>
</Tilt> */}

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    (<MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("p-px flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}>
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>)
  );
};

export const CardBody = ({
  children,
  className,
  style
}) => {
  return (
    (<div
      style={style}
      className={cn(
        "[transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}>
      {children}
    </div>)
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    (<Tag
      ref={ref}
      className={cn("transition duration-200 ease-linear", className)}
      {...rest}>
      {children}
    </Tag>)
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
