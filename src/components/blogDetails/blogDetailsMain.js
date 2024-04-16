import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
// import BlogAuthor from './blogAuthor';
// import BlogCategories from './blogCategories';
// import BlogInfo from './blogInfo';
// import CommentForm from './commentForm';
// import CommentSection from './commentSection';
// import SearchBar from './searchBar';
import SidebarPost from './sidebarPost';
import SidebarTags from './sidebarTags';

const BlogDetailsMain = () => {
    const blogItem = useSelector(state => state.blogs.specificItem);
    return (
        <>
            <section className="page-title-area breadcrumb-spacing" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-website.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-9">
                            <div className="page-title-wrapper text-center">
                                <h3 className="page-title mb-25">{blogItem.title}</h3>
                                <div className="breadcrumb-menu">
                                    <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                        <ul className="trail-items">
                                            <li className="trail-item trail-begin"><Link to="/"><span>Home</span></Link></li>
                                            <li className="trail-item trail-end"><span>{blogItem.title}</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-details-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <div className="kblog">
                                <div className="kblog-img">
                                    <img src={blogItem.image} className="img-fluid" alt="blog-img" />
                                    <span>{blogItem.date}</span>
                                </div>
                                <div className="kblog-text kblog-text2 kblog-text22">
                                    <div className="kblog-meta">
                                        {/* <Link to="/blog-details"><i className="fal fa-user-circle"></i> {blogItem.user}</Link> */}
                                        {/* <Link to="/blog-details"><i className="fal fa-comments"></i> {blogItem.comments}</Link> */}
                                    </div>
                                    <p className="mb-35">When designing a website, there are several things you need to consider to ensure that your website is effective, user-friendly, and visually appealing. Below are some of the essential factors to keep in mind:

                                        1. Purpose and target audience: Determine the purpose of your site and the target audience. This will help you to create relevant content, navigation, and design that caters to your audience's needs.

                                        2. Mobile responsiveness: With the increasing number of mobile device users, it is vital to design a mobile-friendly website. Google penalizes websites that are not mobile-responsive, and your site may have a lower search result ranking if it is not optimized for mobile devices.

                                        3. Competitive analysis: Conduct a thorough analysis of your competitors and other businesses in the same industry. This can help you to identify areas where you can improve and find innovative ways to boost traffic to your site.

                                        4. Time and monetary investment: Investing enough time and money is crucial when rebuilding a website. Ensure that the time you spend on designing the website is equal to your monetary investment.

                                        5. Uniqueness: Being unique and creative can make your website stand out from the crowd. Don't be afraid to do something different from others. Including distinctive elements in your website and business can help to create a unique brand identity.

                                        By considering these factors, you can create a website that meets the needs of your audience, is mobile-friendly, stands out from the competition, and achieves your business goals.

                                        If you want the best solutions for your business and the best graphic design services in Houston, TX, click on the link below.

                                    </p>
                                </div>
                            </div>
                            {/* <BlogInfo /> */}
                            {/* <BlogAuthor /> */}
                            {/* <CommentSection /> */}
                            {/* <CommentForm /> */}
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-md-40 mt-xs-40">
                            <div className="sidebar-wrap">
                                {/* <SearchBar /> */}
                                <SidebarPost />
                                {/* <BlogCategories /> */}
                                <SidebarTags />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsMain;