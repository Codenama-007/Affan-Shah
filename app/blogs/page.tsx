import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CRTOverlay from "@/components/Effects/CRTOverlay";
import { blogs } from "@/data/blogs";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "BLOG DATABASE // AFFAN SHAH",
  description: "Articles, notes, and build logs from the developer.",
};

export default function BlogsPage() {
  return (
    <>
      <CRTOverlay />
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <div className="text-[0.8rem] tracking-[0.3em] text-[#777777] uppercase mb-2">
                BLOG DATABASE
              </div>
              <div className="text-[0.8rem] tracking-[0.2em] text-[#777777] uppercase">
                ARTICLES / NOTES / BUILD LOGS
              </div>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <div key={blog.id} className="terminal-panel hover-glow transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.7rem] tracking-[0.2em] text-[#777777] uppercase">
                      ARTICLE // {blog.number}
                    </span>
                    <span className="text-[0.65rem] tracking-[0.15em] text-[#454545] uppercase border border-[#454545] px-2 py-0.5">
                      {blog.category}
                    </span>
                  </div>

                  <div className="border-t border-[#454545] pt-3 mb-3" />

                  <h3 className="text-[1rem] font-bold tracking-[0.1em] text-[#EAEAEA] uppercase mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-[0.8rem] leading-relaxed text-[#EAEAEA]/70 mb-4">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[0.7rem] tracking-[0.1em] text-[#777777] uppercase">
                      <Calendar size={10} />
                      {blog.date}
                    </div>
                    {blog.url && (
                      <a
                        href={blog.url}
                        className="text-[0.8rem] tracking-[0.1em] text-[#FF6500] uppercase hover:text-[#FF7A00] transition-colors"
                      >
                        READ ARTICLE
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
