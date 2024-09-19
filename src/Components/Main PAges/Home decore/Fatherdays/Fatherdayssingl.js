import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Fatherdayssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/fathersdaysingle');

export default Fatherdayssingl;