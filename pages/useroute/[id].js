import { useRouter } from 'next/router'

export default function Index(){
    const router = useRouter();
    const {id} = router.query;
    const handle = () => {
        router.push('/')
    }
    return (<>
    
    <span>parrmater on url id : {id}</span>
    <h2 onClick={() => handle()}>Click here to redirect to home page</h2>
    <button type="button" onClick={() => router.reload()}>
      Click here to reload
    </button>
    </>);
}