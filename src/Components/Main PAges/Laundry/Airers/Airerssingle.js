import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Airerssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Airerssingle');

export default Airerssingle;