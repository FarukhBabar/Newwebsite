import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Soapbarsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/soapbarsingle');

export default Soapbarsingle;