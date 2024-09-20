import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Birdssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/birdssingle');

export default Birdssingl;