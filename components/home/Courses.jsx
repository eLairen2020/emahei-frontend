export default function Courses({categories, Courses}) {

    return(

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Courses</h1>
                <div className="flex mt-6 justify-center">
                {categories.map(item => (
                     <p>

                        <a key={item.id} className="text-gray-600 hover:text-sky-800 hover:font-semibold
                          cursor-pointer font-normal transition-colors duration-300 px-2">
                           {item.name}
                        </a> 
                        |
                       
                    </p>
                     ) ) }
                </div>

                </div>
                        
    <div className="px-4 py-7 m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
         
      <div  className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      {Courses.map(item => (
        <div key={item.id} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={item.picture}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                {item.title}
              </a>
              <span className="text-gray-600">{item.subtitle}</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        ) ) }
        </div>
    
      </div>
       
     
    
<button className="flex mx-auto text-white bg-sky-800 border-0 py-1 px-8 focus:outline-none hover:bg-rose-800 rounded text-lg">More</button>
            </div>
            </section>






        );
}