import Link from 'next/link'


export default function Index(){
    return (<>
      <Link
          href="/post/2"
        >
          redirect to page post with paramter id = 2
        </Link>
        <br />
        <Link
          href={{
            pathname: '/',
            query: { ca: '4' } ,
          }}
        >
          redirect to page index with paramter ?ca = 4
        </Link>
    
    </>)
}