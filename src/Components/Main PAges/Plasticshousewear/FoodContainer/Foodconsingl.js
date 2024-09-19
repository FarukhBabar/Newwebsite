import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Foodconsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/foodconsingle');

export default Foodconsingl;