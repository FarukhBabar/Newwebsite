import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Barewearsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/barewaresingle');

export default Barewearsingl;