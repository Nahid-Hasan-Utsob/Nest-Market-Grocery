import { useState, useEffect } from "react";
import deliveryMan from "../../assets/Icon-Images/banner-13.png.png";
import icon from "../../assets/Icon-Images/man.png";
import Common_Image from "../../Components/Common_Image";
import Text from "../../Components/Text";
import Blog_Card from "./Blog_Card";
import { Bars } from "react-loader-spinner";

export default function Blogs() {
  // Loader state
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 12;

  
const cardData = [
  {
    title: "Exploring the Hidden Secrets of Morning Dew",
    date: "12 March 2023",
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    des: "Nature",
  },
  {
    title: "10 Ways to Stay Motivated Everyday",
    date: "5 May 2024",
    img: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg",
    des: "Lifestyle",
  },
  {
    title: "The Art of Making Perfect Pasta",
    date: "14 June 2022",
    img: "https://images.unsplash.com/photo-1604908812958-73f66f0c6caa",
    des: "Food",
  },
  {
    title: "How to Grow Herbs in Small Spaces",
    date: "9 August 2023",
    img: "https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg",
    des: "Gardening",
  },
  {
    title: "The Power of Minimalist Living",
    date: "2 January 2024",
    img: "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c",
    des: "Lifestyle",
  },
  {
    title: "Why Birds Sing at Dawn",
    date: "27 July 2025",
    img: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
    des: "Nature",
  },
  {
    title: "A Beginner’s Guide to Yoga Poses",
    date: "17 October 2023",
    img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
    des: "Health",
  },
  {
    title: "The Science Behind Perfect Sleep",
    date: "3 April 2022",
    img: "https://images.unsplash.com/photo-1600195077909-3f5c5f09c6d4",
    des: "Wellness",
  },
  {
    title: "Capturing Emotions Through Photography",
    date: "11 November 2023",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    des: "Art",
  },
  {
    title: "Delicious Smoothies for Hot Days",
    date: "21 May 2024",
    img: "https://images.unsplash.com/photo-1600790427103-56d6a83367b2",
    des: "Food",
  },
  {
    title: "How Colors Affect Your Mood",
    date: "14 February 2022",
    img: "https://images.unsplash.com/photo-1557683304-673a23048d34",
    des: "Psychology",
  },
  {
    title: "The Journey to a Greener Planet",
    date: "9 December 2023",
    img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    des: "Environment",
  },
  {
    title: "5 Easy Salad Recipes to Try",
    date: "23 July 2022",
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    des: "Food",
  },
  {
    title: "A Walk Through Misty Mornings",
    date: "30 January 2024",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    des: "Travel",
  },
  {
    title: "The Power of Daily Journaling",
    date: "10 March 2023",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    des: "Motivation",
  },
  {
    title: "Homemade Bread that Smells Like Heaven",
    date: "17 July 2024",
    img: "https://images.unsplash.com/photo-1604908177521-402fa1a73b33",
    des: "Baking",
  },
  {
    title: "Street Food Adventures Around Asia",
    date: "1 May 2022",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    des: "Travel",
  },
  {
    title: "Finding Peace in the Forest",
    date: "19 August 2025",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    des: "Nature",
  },
  {
    title: "Simple Exercises You Can Do at Home",
    date: "15 April 2022",
    img: "https://images.unsplash.com/photo-1571019613914-85f342c53015",
    des: "Fitness",
  },
  {
    title: "The Rise of Plant-Based Diets",
    date: "12 June 2024",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    des: "Health",
  },
  {
    title: "Discovering Old Architecture in Europe",
    date: "5 May 2023",
    img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    des: "Travel",
  },
  {
    title: "The Science of Happiness",
    date: "2 February 2022",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    des: "Psychology",
  },
  {
    title: "Best Coffee Spots in Town",
    date: "9 October 2023",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    des: "Lifestyle",
  },
  {
    title: "A Journey Through the Desert",
    date: "27 May 2022",
    img: "https://images.unsplash.com/photo-1602853055976-527c4bfdf616",
    des: "Travel",
  },
  {
    title: "How Music Heals the Mind",
    date: "14 July 2023",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    des: "Art",
  },
  {
    title: "Creating Art with Everyday Objects",
    date: "4 September 2022",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    des: "Creativity",
  },
  {
    title: "The Joy of Cooking for Family",
    date: "19 December 2024",
    img: "https://images.unsplash.com/photo-1556912998-6e2b9e6b8a79",
    des: "Lifestyle",
  },
  {
    title: "When Rain Tells a Story",
    date: "6 June 2022",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    des: "Nature",
  },
  {
    title: "Building Confidence Step by Step",
    date: "17 March 2023",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    des: "Motivation",
  },
  {
    title: "Exploring Ancient Temples of Asia",
    date: "22 September 2022",
    img: "https://images.unsplash.com/photo-1587223962930-b3586cc81207",
    des: "Travel",
  },
  {
    title: "The Magic of Early Mornings",
    date: "10 May 2024",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    des: "Lifestyle",
  },
  {
    title: "Cultural Festivals You Must See",
    date: "4 December 2023",
    img: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99",
    des: "Culture",
  },
  {
    title: "Healthy Breakfast Ideas",
    date: "1 April 2023",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    des: "Food",
  },
  {
    title: "The Rhythm of the Ocean Waves",
    date: "19 August 2023",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    des: "Nature",
  },
  {
    title: "A Cup of Tea and Some Thoughts",
    date: "2 January 2022",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    des: "Lifestyle",
  },
  {
    title: "Urban Gardening for Beginners",
    date: "16 June 2024",
    img: "https://images.unsplash.com/photo-1598032895398-93f06bcae3ef",
    des: "Gardening",
  },
  {
    title: "Street Photography Tips You’ll Love",
    date: "10 September 2023",
    img: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
    des: "Art",
  },
  {
    title: "The Calm Before the Storm",
    date: "23 May 2022",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    des: "Nature",
  },
  {
    title: "How Books Shape Our Lives",
    date: "5 February 2023",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    des: "Education",
  },
  {
    title: "Life Lessons from the Mountains",
    date: "28 April 2025",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    des: "Travel",
  },
  {
    title: "Creating Calm Workspaces at Home",
    date: "12 July 2024",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    des: "Lifestyle",
  },
  {
    title: "The Future of Eco-Friendly Homes",
    date: "3 August 2025",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    des: "Environment",
  },
  {
    title: "Baking Cakes That Melt Hearts",
    date: "22 February 2024",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    des: "Baking",
  },
  {
    title: "Wonders of the Night Sky",
    date: "17 October 2022",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    des: "Science",
  },
  {
    title: "Discovering the Charm of Countryside Life",
    date: "13 March 2023",
    img: "https://images.unsplash.com/photo-1498598453737-3bf4e5d7e9b2",
    des: "Culture",
  },
  {
    title: "Fresh Juices to Start Your Day",
    date: "29 May 2024",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    des: "Food",
  },
  {
    title: "Simple Ways to Reduce Plastic Waste",
    date: "8 June 2025",
    img: "https://images.unsplash.com/photo-1593376862571-9e9cdbd4e0b1",
    des: "Environment",
  },
  {
    title: "The Essence of Time in Photography",
    date: "3 July 2024",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    des: "Art",
  },
  {
    title: "A Journey Through Street Markets",
    date: "12 October 2023",
    img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
    des: "Travel",
  },
  {
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2022",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    des: "Side Dish",
  },
];


  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = cardData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(cardData.length / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Simulate data loading (API call)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="lg:my-20">
      {/* Header Section */}
      <section>
        <div className="relative bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2017/10/05/10/37/paper-2818976_1280.jpg')",
              backgroundRepeat: "repeat",
            }}
          ></div>

          <div className="relative flex flex-col justify-center items-start lg:h-[350px] h-[180px] lg:pl-16 pl-5 gap-2 lg:gap-10 z-10">
            <div>
              <h2 className="lg:text-6xl md:text-3xl text-xl font-semibold lg:mb-4 menu-text-color quicksand-regular leading-snug">
                Blog & News
              </h2>
            </div>
          </div>

          <img
            src={deliveryMan}
            alt="Delivery Man"
            className="absolute bottom-0 right-0 w-[200px] lg:w-[450px] h-auto object-contain"
          />
        </div>
      </section>

      {/* Section Title */}
      <div className="flex items-center lg:gap-5 gap-2 lg:my-16 my-8">
        <Common_Image className={"lg:w-[50px] w-[40px]"} img={icon}></Common_Image>
        <Text
          text={"Recips Articles"}
          className={
            "lg:text-[40px] text-[18px] menu-text-color quicksand-regular font-bold"
          }
        ></Text>
      </div>

      {/* Blog Grid with Loader */}
      {loading ? (
            <div className="flex justify-center items-center h-[400px]">
          <Bars
            height="30"
            width="30"
            color="#3bb77e"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
       
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-3">
          {currentBlogs.map((blog, index) => (
            <Blog_Card key={index} cardData={blog}></Blog_Card>
          ))}
        </div>
      )}

      {/* Pagination Buttons */}
      {!loading && (
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`lg:px-6 lg:py-2 px-3 py-1 lg:rounded-xl rounded-md  font-semibold text-xs hover:text-white${
              currentPage === 1
                ? " text-white cursor-pointer bg-blue-600 "
                : " bg-gray-300 menu-text-color hover:bg-blue-600 text-white hover:text-white"
            }`}
          >
            Prev
          </button>

          <span className="lg:text-lg text-[12px] font-semibold menu-text-color">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`lg:px-6 lg:py-2 px-3 py-1 lg:rounded-xl rounded-md  font-semibold text-xs  ${
              currentPage === totalPages
                ? " text-white cursor-not-allowed bg-blue-600 hover:text-white"
                : " bg-gray-300 menu-text-color hover:bg-blue-600 text-white hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
