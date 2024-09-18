import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Lighteningsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/lighteningsingle');

export default Lighteningsingle;