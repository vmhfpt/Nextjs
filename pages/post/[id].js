const Post = ({posts}) => {
    
    return (<>
        <h3> Id :  {posts.id} /--/ Title : {posts.title}</h3>
     </>)
}
export default Post;

export async function getStaticPaths() {

    const res = await fetch('https://dummyjson.com/posts?skip=0&limit=5')
    const data = await res.json();
    const paths = data.posts.map((item, key) => ({
         params : { id : item.id.toString()}
    }));
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
  }


export async function getStaticProps({params}) {
    const res = await fetch(`https://dummyjson.com/posts/${params.id}`)
    const posts = await res.json();
    return {
      props: {
        posts 
      },
    }
  }