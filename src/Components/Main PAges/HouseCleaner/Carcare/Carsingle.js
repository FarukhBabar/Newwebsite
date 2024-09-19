import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Carsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/carsingle');

export default Carsingle;