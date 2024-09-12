import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Carposingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/carposingle');

export default Carposingl;