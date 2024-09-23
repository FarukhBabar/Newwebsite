import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const HomeBakingsingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/homebakingsingle');

export default HomeBakingsingel;