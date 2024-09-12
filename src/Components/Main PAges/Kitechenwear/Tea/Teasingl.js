
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Teasingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/teasingle');

export default Teasingl;