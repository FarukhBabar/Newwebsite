import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Curtainssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/curtainssingle');

export default Curtainssingle;