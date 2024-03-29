// import React, { useEffect, useState } from "react"
// import { graphql } from "gatsby"

// import Seo from "../components/seo"
// import Layout from "../components/layout"
// import ManualCard from "../components/priceCard"



// function ManualsPage({ data, location }) {

//   const allPosts = data.allMarkdownRemark.nodes
//   const [posts, setPosts] = useState(allPosts)
//   const [filter, setFilter] = useState(
//     new URLSearchParams(location.search.substring(1)).get("filter")
//   )
//   const [activeTag, setActiveTag] = useState(allPosts[0].frontmatter.tags[0]); // Set the default tag

//   const handleTagClick = (tag) => {
//     setActiveTag(tag);
//   };
//   const emptyQuery = ""

//   const [filteredPosts, setFilteredPosts] = useState({
//     filteredPosts: [],
//     query: emptyQuery,
//   })

//   const tags = Array.from(
//     new Set(
//       allPosts
//         .map(post => post.frontmatter.tags)
//         .flat()
//         .filter(tag => tag != null)
//     )
//   )

//   useEffect(() => {
//     if (filter) {
//       window.history.pushState(filter, "", `?filter=${filter.toLowerCase()}`)
//     }
//   console.log(allPosts.filter(post => post.frontmatter.tags.includes(allPosts[0].frontmatter.tags[0])), 'hej', allPosts[1].frontmatter.tags)

//     setPosts(
//       filter === "all" || !filter
//         ? allPosts.filter(post => post.frontmatter.tags.includes(allPosts[0].frontmatter.tags[0]))
//         : allPosts.filter(post =>
//             post.frontmatter.tags.includes(filter[0].toUpperCase() + filter.substring(1))
//           )
//     )
//   }, [filter, allPosts])


  
//   if (posts.length === 0) {
//     return (
//       <Layout>
//         <Seo title="All posts" />
//         <div className="posts-found medium">
//         <h3>No manuals's found.</h3>
//         </div>

//       </Layout>
//     )
//   }

//   const postFiltered = filteredPosts.query ? filteredPosts.filteredPosts : posts
// console.log(postFiltered.map(post => (post)), 'test')
//   return (
//     <Layout>
//       <Seo title="All posts" />

//         <h1>Our Manuals</h1>
//         <p>
//           Our experienced team can handle complex payroll in an international
//           setting
//         </p>

//       <section className="section">
//         <div className="questions_answers">
//           <div className="questions_answers-content manuals-content medium">
//             <select id="categories"></select>

//               <div className="filter">
//                 <h3>Categories:</h3>
//                 <div className="manual-filter-tags">
//                   {tags.map((tag, index) => (
//                     <div className={tag === activeTag ? 'active-tag' : ''  } 
//                     >
//                       <button
//                         className="filter-option " 
//                         onClick={e => {setFilter(e.target.value); handleTagClick(tag)}}
//                         key={index}
//                         value={tag.toLowerCase()}
//                         >
//                         {tag}
//                       </button>
//                     </div>
//                   ))}
//               </div>
    
//             </div>
//             <div className="questions_answers-flex">
//             <ol className="manuals-grid">
//             {postFiltered.map(post => (
//                 <ManualCard
//                   key={post.fields.slug}
//                   post={post}
//                   setFilter={setFilter}
//                 />
//               ))}
//             </ol>
//           </div>
//           </div>
//         </div>
//       </section>

//     </Layout>
//   )
// }

// export default ManualsPage

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { type: { eq: "prices" } } }
//     ) {
//       nodes {
//         excerpt(truncate: true, pruneLength: 1000)
//         html
//         fields {
//           slug
//         }
//         frontmatter {
//           title
//           tags
//           description
//           type
//         }
//       }
//     }
//   }
// `
