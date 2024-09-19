import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Birdbrandsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/birdbrandsingle');

export default Birdbrandsingle;