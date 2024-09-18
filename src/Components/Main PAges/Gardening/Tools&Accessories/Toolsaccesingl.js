import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Toolsaccesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/toolssingle');

export default Toolsaccesingle;