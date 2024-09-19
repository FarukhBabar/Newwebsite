import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Bonitsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/bonitsingle');

export default Bonitsingle;