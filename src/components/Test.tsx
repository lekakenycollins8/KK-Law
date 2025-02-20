import { TeamInterface } from "../constants/data"

type Props = {
  
  member:TeamInterface | undefined

}
const Test = ({member}:Props) => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={member?.profile_img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {member?.name}
              </h1>

              <p className="leading-relaxed">{member?.desc}</p>
            </div>
          </div>
        
        </div>
      </section>
    </div>
  );
}

export default Test