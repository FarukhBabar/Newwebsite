import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Kidssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kidsssingle');

export default Kidssingle;