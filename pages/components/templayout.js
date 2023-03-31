const LayoutTemp = ({children, home}) => {
  //  console.log('Temp Layout >>>', home);
    return (
        <>
           <h1>Temp Layout page</h1>
          
           <h2>title : {home.title}</h2>
           <h3>Page number :{home.page}</h3>


           <div>{children}</div>
        </>
      )
}
export default LayoutTemp;