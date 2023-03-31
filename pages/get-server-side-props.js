const Contact = (props) => {
    console.log(props);
    return (<>
      <h1>get-server-side-props page</h1>
    </>);
}
export default Contact;
export async function getServerSideProps(context) {
    return {
      props: { message: `Next.js is awesome` }, // will be passed to the page component as props
    }
  }