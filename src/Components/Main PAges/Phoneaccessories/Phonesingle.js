import withDataFetching from '../../withDataFrtching';
import SinglePage from '../../Singlepage';

const Phonesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Phonesingle');

export default Phonesingle;