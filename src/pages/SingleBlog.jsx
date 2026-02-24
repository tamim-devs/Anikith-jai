import React from 'react'

const SingleBlog = ({ post }) => {
  return (
    <div className="space-y-12">

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[420px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold leading-snug">
        {post.title}
      </h1>

      <div className="space-y-10">
        {post.sections.map((section, index) => (
          <div key={index} className="space-y-4">

            {section.heading && (
              <h2 className="text-2xl font-semibold mt-6">
                {section.heading}
              </h2>
            )}

            <div className="text-gray-400 leading-7">
              {Array.isArray(section.content)
                ? section.content.map((item, i) => {
                    if (item.type === "bold") return <b key={i}>{item.value}</b>;
                    if (item.type === "br") return <br key={i} />;
                    return <span key={i}>{item.value}</span>;
                  })
                : (
                  <span
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
