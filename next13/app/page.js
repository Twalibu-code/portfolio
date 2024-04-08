// Static metadata to title the current page:
export const metadata = {
    title: 'Pembe-portfolio | Home',
};

// Dynamic metadata to title the current page
/*
export async function generateMetadata({ params, searchParams }) {
    const product = await getProduct(params.id);

    return {
        title: product.title
    };
}
*/

const Home = () => {
    return ( 
        <div>Home Page</div>
    );
}
 
export default Home;