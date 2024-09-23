import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Furnituresingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/furnituresingle');

export default Furnituresingl;