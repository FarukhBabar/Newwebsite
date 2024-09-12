import withDataFetching from '../../withDataFrtching';
import SinglePage from '../../Singlepage';

const Drinkssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/drifreedeliverysingle');

export default Drinkssingle;