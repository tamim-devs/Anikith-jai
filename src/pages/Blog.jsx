import React, { useState, useRef } from "react";
import {
  blogPosts,
  recentPosts,
  BLOG_CATEGORIES,
  blogTags,
} from "../constant/blog";

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(null);

  const postRefs = useRef({});

  /* ===============================
      BOLD PARSER (ONLY **text**)
  =============================== */
  const parseBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  /* ===============================
      TOGGLE
  =============================== */
  const togglePost = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /* ===============================
      SCROLL
  =============================== */
  const scrollToPost = (id) => {
    setActiveId(id);

    postRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* ===============================
      CATEGORY CLICK
  =============================== */
  const handleCategoryClick = (cat) => {
    const found = blogPosts.find((p) => p.category === cat);
    if (found) {
      scrollToPost(found.id);
      setExpandedPosts((prev) => ({ ...prev, [found.id]: true }));
    }
  };

  /* ===============================
      TAG CLICK
  =============================== */
  const handleTagClick = (tag) => {
    const found = blogPosts.find((p) => p.tags?.includes(tag));
    if (found) {
      scrollToPost(found.id);
      setExpandedPosts((prev) => ({ ...prev, [found.id]: true }));
    }
  };

  /* ===============================
      SEARCH
  =============================== */
  const handleSearch = () => {
    const term = search.toLowerCase().trim();
    if (!term) return;

    const found = blogPosts.find((post) => {
      const title = post.title.toLowerCase().includes(term);
      const category = post.category.toLowerCase().includes(term);
      const tag = post.tags?.some((t) =>
        t.toLowerCase().includes(term)
      );

      return title || category || tag;
    });

    if (found) {
      scrollToPost(found.id);
      setExpandedPosts((prev) => ({ ...prev, [found.id]: true }));
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-6 lg:py-10">

        {/* TITLE */}
        <h1 className="text-center font-bold text-base sm:text-xl lg:text-3xl mb-8 break-words">
          ✦ THOUGHT LEADERSHIP FOR MODERN ENTREPRENEURS ✦
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 w-full lg:max-w-7xl lg:mx-auto">

          {/* POSTS */}
          <div className="space-y-10 order-2 lg:order-1">

            {blogPosts.map((post) => {
              const expanded = expandedPosts[post.id];
              const isActive = activeId === post.id;

              return (
                <div
                  key={post.id}
                  ref={(el) => (postRefs.current[post.id] = el)}
                  className={`
                    w-full
                    p-4 sm:p-6
                    bg-gray-950
                    rounded-2xl
                    space-y-4
                    transition
                    ${isActive ? "ring-2 ring-white" : ""}
                  `}
                >
                  {/* IMAGE */}
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-auto object-cover rounded-xl"
                  />

                  {/* TITLE */}
                  <h2 className="font-bold text-sm sm:text-lg lg:text-xl break-words">
                    {post.title}
                  </h2>

                  {/* CONTENT */}
                  {post.sections
                    .slice(0, expanded ? post.sections.length : 1)
                    .map((section, i) => (
                      <div key={i}>
                        {section.heading && (
                          <h3 className="font-semibold mb-2">
                            {section.heading}
                          </h3>
                        )}

                        {section.content.map((item, j) => {
                          if (item.type === "text") {
                            return (
                              <p
                                key={j}
                                className="text-gray-300 leading-relaxed mb-3 break-words whitespace-pre-line"
                              >
                                {parseBold(item.value)}
                              </p>
                            );
                          }

                          if (item.type === "image") {
                            return (
                              <img
                                key={j}
                                src={item.value}
                                className="w-full rounded-xl my-4"
                              />
                            );
                          }

                          return null;
                        })}
                      </div>
                    ))}

                  {/* BUTTON */}
                  <button
                    onClick={() => togglePost(post.id)}
                    className="w-full sm:w-auto bg-white text-black px-4 py-2 rounded-full"
                  >
                    {expanded ? "Show Less" : "Show More"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6 order-1 lg:order-2">

            <div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search posts..."
                className="w-full p-3 rounded bg-gray-900"
              />

              <button
                onClick={handleSearch}
                className="w-full bg-white text-black mt-2 p-3 rounded"
              >
                Search
              </button>
            </div>

           <div>
  <h3 className="font-bold mb-2">RECENT POSTS</h3>
{recentPosts.map((r) => (
  <p
    key={r.id}
    onClick={() => {
      scrollToPost(r.id);
      setExpandedPosts(prev => ({
        ...prev,
        [r.id]: true
      }));
    }}
    className="cursor-pointer text-gray-400 hover:text-white transition break-words"
  >
    {r.title}
  </p>
))}

</div>


            <div>
              <h3 className="font-bold mb-2">CATEGORIES</h3>
              {BLOG_CATEGORIES.map((cat) => (
                <p
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className="cursor-pointer text-gray-400 hover:text-white transition"
                >
                  {cat}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {blogTags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="cursor-pointer text-gray-400 hover:text-white transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
