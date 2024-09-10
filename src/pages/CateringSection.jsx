import React from "react";
import image from "/image6.jpg";
import image1 from "../../src/assets/good1.jpg";



const CateringSection = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto mt-10">
      <h1 className="text-6xl font-bold ">Our Story</h1>
      <div className="flex gap-10  justify-center items-center">
        <div className="bg-white size-full">
          <p className="text-xl font-bold text-gray-400 mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nobis
            laboriosam, mollitia optio dolore excepturi repellat expedita,
            voluptate nostrum suscipit non commodi, saepe libero odio tenetur
            autem laborum praesentium pariatur! Ut, vel totam vitae adipisci ex
            dolorum ipsam reprehenderit nam natus dolor cum enim, quas atque
            rerum esse placeat sit, saepe quo est. Magni, nulla placeat pariatur
            nemo eos culpa excepturi odit modi repellendus tempore
            reprehenderit, aperiam praesentium necessitatibus corrupti, sed
            tenetur officiis error fugit? Similique quos iste ad fugit? Pariatur
            veniam asperiores totam perferendis repellendus consectetur
            repudiandae dolore expedita eaque, deserunt delectus commodi, enim
            quisquam. Eaque, nemo sit quas quae, inventore rem, dicta doloremque
            numquam nisi iusto eum! Eum delectus vel ullam nisi aperiam itaque
            corrupti voluptatum harum architecto ipsum officiis sit alias hic
            veniam cum, expedita dignissimos dolorem? Ratione maiores placeat
            quas, error cum, libero laborum modi voluptates a dolor quam. Eius,
            laudantium commodi! Tempore nostrum commodi, voluptas aperiam amet
            laborum a inventore, maiores reprehenderit repudiandae laboriosam
            impedit possimus sint quod eum et! Similique nobis facilis ullam.
            Minus saepe sequi distinctio quidem temporibus labore, quod earum
            sapiente animi eum rem, odio nostrum explicabo veniam expedita
            fugiat esse voluptates consequatur, voluptatum alias nisi. Soluta ex
            atque repudiandae ea enim voluptates iure id tempora doloribus quo!
            Atque ea beatae tempora reprehenderit, pariatur amet ad quia iusto,
            mollitia deserunt repellendus fugiat est? Nobis harum fugiat
            expedita doloribus reprehenderit itaque quisquam modi unde dolor
            delectus illo repellat vitae maxime, dicta laborum soluta ratione
            ipsum. Nulla perferendis maxime minima aspernatur rerum et inventore
            ducimus blanditiis commodi adipisci omnis laboriosam, accusantium
            corporis. Enim atque distinctio magnam deleniti sint corporis
            corrupti expedita iusto tempora doloribus. Tempora aut perspiciatis
            possimus, nihil ullam fugiat eos nulla porro alias perferendis qui
            veniam ratione maiores tenetur repudiandae, facere unde voluptates?
            Asperiores nisi vero quisquam veritatis repellendus dolore inventore
            illum?
          </p>
        </div>
        <div className="w-full h-full">
          <img className="object-fill" src={image} alt="" />
        </div>
      </div>

      <div className="text-6xl font-bold mt-10 text-center mt-16">
        <h1>Perfect For Any Occasion</h1>
   <div className="grid grid-cols-3 gap-8">
   <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-6 mt-16">
      <img
        className=" w-[200px] mx-auto mb-4"
        src={image1}
        alt="Card Image"
      />
      <h2 className="text-2xl font-bold mb-2 text-center">Bussiness Catering</h2>
      <p className="text-gray-700 text-base mb-4">
        This is a brief description of the card content.
      </p>
      <ul className="list-disc list-inside space-y-2 text-xl">
        <li>Holiday Partyes</li>
        <li>Metting Office </li>
        <li>Employee Appreciente</li>
      </ul>
    </div>
   <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-6 mt-16">
      <img
        className=" w-[200px] mx-auto mb-4"
        src={image1}
        alt="Card Image"
      />
      <h2 className="text-2xl font-bold mb-2 text-center">Bussiness Catering</h2>
      <p className="text-gray-700 text-base mb-4">
        This is a brief description of the card content.
      </p>
      <ul className="list-disc list-inside space-y-2 text-xl">
        <li>Holiday Partyes</li>
        <li>Metting Office </li>
        <li>Employee Appreciente</li>
      </ul>
    </div>
   <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-6 mt-16">
      <img
        className=" w-[200px] mx-auto mb-4"
        src={image1}
        alt="Card Image"
      />
      <h2 className="text-2xl font-bold mb-2 text-center">Bussiness Catering</h2>
      <p className="text-gray-700 text-base mb-4">
        This is a brief description of the card content.
      </p>
      <ul className="list-disc list-inside space-y-2 text-xl">
        <li>Holiday Partyes</li>
        <li>Metting Office </li>
        <li>Employee Appreciente</li>
      </ul>
    </div>

   </div>

      
      </div>

      
    </section>
   
    </div>
  );
};

export default CateringSection;
