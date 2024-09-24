import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Kidsstosingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kidssingle');

export default Kidsstosingl;