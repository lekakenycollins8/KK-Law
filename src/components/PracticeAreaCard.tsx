import { featuresInterface } from "../constants/data";

interface Props {
  selectedPracticeAreaRef: React.RefObject<HTMLDivElement>;
  selectedPracticeArea: featuresInterface;
  handleImageLoad: () => void;
  imageLoaded: boolean;
}

const PracticeAreaCard = ({
  selectedPracticeAreaRef,
  selectedPracticeArea,
  handleImageLoad,
  imageLoaded,
}: Props) => {


  return (
    <div
      ref={selectedPracticeAreaRef}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="">
        <h2 className="text-xl font-semibold">{selectedPracticeArea.title}</h2>
      </div>
      <p className="mt-4 text-gray-600 ">{selectedPracticeArea.longDescription}</p>
      <div className="mt-6">
        <div className="w-full h-56 rounded-xl sm:h-96 relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center rounded-xl">
              <svg
                className="w-10 h-10 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          )}
          <img
            className={`object-cover w-full h-full rounded-xl ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={selectedPracticeArea.image}
            alt={selectedPracticeArea.title}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
      <h3 className="mt-6 text-lg font-semibold">
        {selectedPracticeArea.title} services
      </h3>
      <ul
        className="mt-2 list-outside  pl-4 list-none"
      >
        {selectedPracticeArea.keyPoints?.map((point: string, index: number) => (
          <li key={index} className="text-primaryTextColor  pb-4 ">
            {point}
          </li>

        ))}
      </ul>
      {/* <p className="mt-6 text-primaryTextColor">
        {selectedPracticeArea.longDescription}
      </p> */}
    </div>
  );
};

export default PracticeAreaCard;
