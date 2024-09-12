import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Cateringsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/cateringsingle');

export default Cateringsingl;