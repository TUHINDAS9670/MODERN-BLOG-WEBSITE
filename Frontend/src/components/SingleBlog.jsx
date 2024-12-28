import React from "react";
import { useLoaderData } from "react-router";
import Sidebar from'./Sidebar';
import { FaClock, FaUser } from "react-icons/fa";


const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="py-40 text-center bg-gray-700 px-4 text-white">
        <h1 className="text-5xl lg:text-7xl font-bold mb-5">
          Single Blog Page
        </h1>
      </div>
      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded"/>
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>
          <p  className="mb-3 text-gray-600"><FaUser className="inline-flex items-center mb-1 mr-2"/> {author} | {published_date}</p>
          <p  className="mb-3 text-gray-600"><FaClock className="inline-flex items-center mr-1"/> {reading_time}</p>
          <p className="text-gray-500 mb-6 font-semibold text-xl">{content}</p>
          <div className="text-gray-900 text-lg  text-justify">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates ad atque cupiditate ab doloremque, consectetur quis, delectus placeat rem nisi dignissimos iusto quibusdam, eligendi voluptatibus molestias impedit amet officia ullam nihil. Provident mollitia voluptatem cum exercitationem, illo omnis iste eos animi unde, fugit porro numquam quidem laborum et, suscipit perspiciatis aperiam! Minima, incidunt nesciunt dignissimos ex architecto accusantium odio perferendis vitae magnam, obcaecati laudantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptates possimus dolorem error quasi itaque exercitationem vero, porro odio fugit optio quidem nostrum, officia ex suscipit delectus maxime voluptas! Labore illum a delectus sint. Quos repudiandae alias saepe, consectetur illo fuga et nihil rerum officia facilis architecto voluptate ea ut atque, tempora ullam eligendi asperiores!</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequatur. Corporis quisquam iste rem asperiores similique voluptatem, deleniti assumenda, ea dolores facere neque? Reprehenderit sit, similique recusandae dolore quam consectetur iusto dolores doloremque voluptates fuga? Ipsa iure maxime illum suscipit ratione amet corporis vero, temporibus quam obcaecati ut illo ad repellat, at, beatae quos aut. Nulla fugit tempore velit dolorum ea beatae numquam quibusdam itaque quasi molestiae quo nam vero alias exercitationem doloremque, adipisci eveniet accusantium aut qui voluptate reiciendis repellendus tenetur quaerat dolores. Ipsum voluptatibus numquam consequuntur sequi necessitatibus?</p>
            <br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor deserunt ab velit, voluptatum error quo, nam repellendus ducimus tempore adipisci perspiciatis exercitationem dolorum ea quia alias, nisi voluptas distinctio architecto minus amet? Perspiciatis maiores ab odio, laudantium quibusdam exercitationem optio doloremque veritatis cum. Est quo atque commodi expedita quae magni necessitatibus veritatis suscipit. Asperiores nostrum corporis ipsa praesentium quod.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus alias veritatis illum quis nulla repellendus, eius eligendi quo fuga doloribus nesciunt recusandae in odio! Id consequuntur repellat hic ex earum quos nam, facere ut quia iure sed architecto enim ducimus iusto dicta corrupti numquam tenetur voluptatibus nihil ea quas eveniet. Nisi, velit ad cupiditate quibusdam voluptatum provident adipisci ut qui expedita repellendus, sequi, voluptatibus non eaque labore nesciunt. Obcaecati amet explicabo, error eum ipsa consequuntur magnam nostrum. Delectus odit exercitationem nostrum quam consectetur cum culpa architecto reprehenderit quae. Atque totam magnam a laudantium maxime tenetur quam, eveniet et. Est voluptate ad suscipit! Tenetur, recusandae?</p>
          </div>
          <p></p>
        </div>
        <div>
          <Sidebar/>
        </div>
      </div>
      
    </div>
  );
};

export default SingleBlog;
