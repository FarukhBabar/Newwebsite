import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Deodrantsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/dordantsingle');

export default Deodrantsingle;