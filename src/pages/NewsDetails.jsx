import Header from "../components/Header";
import RighNavbar from "../components/layout-component/RighNavbar";
import DetailsCard from "./DetailsCard";

const NewsDetails = () => {
    return (
        <div>
           <header>
              <Header></Header>
           </header>

           <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">

           <section className="col-span-9">
               <DetailsCard></DetailsCard>
           </section>

           <aside className="col-span-3">
                <RighNavbar></RighNavbar>
           </aside>
           </main>
        </div>
    );
};

export default NewsDetails;