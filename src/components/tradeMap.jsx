const All = ({ allBlog }) => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-8">
      {allBlog.map((blog) => (
        <div className=" w-[392px] relative h-[320px]">
          <img src={blog.img} alt="photo" className="h-[320px] w-[260px]" />

          <div className="absolute bottom-7 left-7 right-7">
            <h5 className="mt-6 text-[#4B6BFB]   text-sm ">{blog.category}</h5>
            <p className="mt-4 text-lg text-[#181A2A] font-semibold ">
              {blog.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
