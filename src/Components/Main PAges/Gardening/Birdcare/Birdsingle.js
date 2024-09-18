import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Birdsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/birdcaresingle');

export default Birdsingle;