import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Template from "../page template/Template";
import Filter from "./FilterTemplate";

const ProductsPage = () => {
  const array = [
    {
      id: 1,
      text: 'Score A',
      amount: 13
    }
  ]; 

  return (
    <Template>
      <Breadcrumbs />
      <div className="main-wrapper">
        <div className="filters-wrapper">
          <Filter title={'Nutri-score'} options={array} />
        </div>
      </div>
    </Template>
  );
};

export default ProductsPage;