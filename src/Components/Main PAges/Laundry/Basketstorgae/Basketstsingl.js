import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Basketstsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bascktsingle');

export default Basketstsingle;