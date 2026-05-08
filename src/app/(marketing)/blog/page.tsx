import Link from "next/link";
import { BLOG_POSTS } from "./_data";

export default function BlogIndexPage() {
  return (
    <>
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Blog</p>
          <h1 className="frag-hero-h1 mt-1.5">Ideas for better discussions</h1>
          <p className="frag-hero-lead max-w-2xl">
            Product updates, teaching tips, and how teams use Fragments in the
            wild.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="frag-container">
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-6">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <article className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-textMuted sm:text-xs">
                      {post.date} · {post.read}
                    </p>
                    <h2 className="mt-1.5 text-lg font-bold text-secondary sm:text-xl">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="transition hover:text-highlight-dark"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-textMuted">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="mt-4 inline-flex text-sm font-bold text-highlight-dark hover:text-secondary"
                    >
                      Read article →
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
