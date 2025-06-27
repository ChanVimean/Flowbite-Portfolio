const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:h-[500px]">
      <article className="flex flex-col items-start justify-center md:w-1/2 space-y-4 p-6">
        <h1 className="text-4xl font-bold">Hello I am Rok Rak</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          corporis?
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Contact Me
        </button>
      </article>
      <aside className="md:w-1/2 h-[300px] md:h-full">
        <img
          src="https://www.kindpng.com/picc/m/774-7744802_tony-stark-png-image-file-robert-downey-jr.png"
          alt="Banner"
          className="w-full h-full object-cover rounded shadow-md"
        />
      </aside>
    </div>
  );
};

export default Home;
