import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Foodposingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/foodposingle');

export default Foodposingl;