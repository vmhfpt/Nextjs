import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());
export default function Index(){
    const { data, error } = useSWR('http://localhost:3000/api/category', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (<>
       <ul>
          {data.data.map((value, key) => (
             <li key={key}> {value.name}</li>
          ))}
       </ul>
    </>)
}