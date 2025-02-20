import { useEffect, useState,useRef } from 'react'
import { useParams } from 'react-router-dom';
import { features, featuresInterface } from '../../constants/data';
import { FiArrowUpRight } from 'react-icons/fi';
import PracticeAreaCard from '../../components/PracticeAreaCard';
import Header from '../../components/sharedComponents/Header';

const FeaturesDetails = () => {

  const selectedPracticeAreaRef = useRef<HTMLDivElement | null>(null)
   const [selectedPracticeArea, setSelectedPracticeArea] = useState(
     features[0]
   );
   const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const { id } = useParams()


  //  const handlePracticeAreaClick = (practiceArea: featuresInterface) => {
  //    setSelectedPracticeArea(practiceArea);
  //    setImageLoaded(false);
  //  };


  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image is fully loaded
  };


  const handleScroll = () => {
    selectedPracticeAreaRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContainer = (practiceArea: featuresInterface)=>{
    setSelectedPracticeArea(practiceArea);
    setImageLoaded(false);
    setTimeout(() => {
      handleScroll();
    }, 200);
  }

  useEffect(() => {
    handleScroll();
   }, [selectedPracticeArea]);
  

  useEffect(() => { 
    if (id) {
    const filterFeatures = features.filter(
      (feature) => feature.id === Number(id)
    );
    setSelectedPracticeArea(filterFeatures[0]);
  }

  }, [id])


  return (
    <section>
    <Header title='Practice Areas'/>
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-x-16">
        <div className="max-w-[400px] max-h-[500px] w-full  mx-auto mb-10 bg-[#FAFAFA] p-4 flex flex-col gap-y-3 sm:gap-y-2 sm:p-8 ">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-xl font-medium">Our Practice Areas</h1>
            <span className="w-10 h-[1px]  flex bg-gradient-to-r from-primaryBeige  to-lightBeige rounded-tr-lg rounded-bl-lg"></span>
          </div>
          {features.map((feature, index) => (
            <div
              onClick={() =>scrollToContainer(feature)}
              key={index}
              className={`group  w-full py-4  cursor-pointer px-4 flex items-center justify-between hover:bg-[#B8967E] hover:text-primaryWhite transition-all duration-700 ease-in-out ${
                feature === selectedPracticeArea
                  ? "bg-[#B8967E] text-primaryWhite "
                  : "bg-white"
              }`}
            >
              <h1>{feature.title}</h1>
              <FiArrowUpRight
                className={`text-primaryBeige  group-hover:text-primaryWhite transition-all duration-700 ease-in-out ${
                  feature === selectedPracticeArea ? "text-primaryWhite" : ""
                }`}
                size={20}
              />
            </div>
          ))}
        </div>
        <div className="max-w-3/4 w-full">
          {/* PracticeAreaCard here */}
          <PracticeAreaCard
            selectedPracticeAreaRef={selectedPracticeAreaRef}
            selectedPracticeArea={selectedPracticeArea}
            handleImageLoad={handleImageLoad}
            imageLoaded={imageLoaded}
          />
        </div>
      </div>
    </div>
    </section>
  );
}

export default FeaturesDetails
