const Index = ({users}) => {
    console.log(users);
    return (<>
    
      {users.map((item, key) => (

        <h3 key={key}>name: {item.name} --  age : {item.age}</h3>
      ))}
    
    </>);
}
export default Index;


export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/hello')
    const users = await res.json()
    return {
      props: {
        users
      },
    }
  }