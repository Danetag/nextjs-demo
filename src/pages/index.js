import Link from "next/link";
import Layout from "~/components/Layout/Layout";
// import HeroImage from "~/components/HeroImage/HeroImage";

// import { getHeroImages } from '~/api';
// import { Experiment, Variant } from "react-optimize";

  
const Index = ({ data }) => {



  return (
    <>
      <Layout>
        <h1 className="cover-heading">Homepage</h1>

        <h3>
          Click the below slug links to route to the corresponding components
        </h3>
       
        <br />
        <br />
        <Link href="/[url_slug]" as="/nitto-terra-grappler-g2-tires">
          <a>nitto-terra-grappler-g2-tires = line page</a>
        </Link>
        <br />
        <br />
        <Link href="/[url_slug]" as="/nitto-terra-grappler-g2-tire-reviews">
          <a>nitto-terra-grappler-g2-tire-reviews = line review page</a>
        </Link>
        <br />
        <br />
        <Link href="/[url_slug]" as="/nitto-245-65r17-215470-tires">
          <a>nitto-245-65r17-215470-tires = product detail page</a>
        </Link>
        <br />
        <br />

      </Layout>
    </>
  );

  
};


export default Index;
