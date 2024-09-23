import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Dinnersingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/dinnersingle');

export default Dinnersingel;