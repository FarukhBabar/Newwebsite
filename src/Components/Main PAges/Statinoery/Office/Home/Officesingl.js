import withDataFetching from '../../../../withDataFrtching';
import SinglePage from '../../../../Singlepage';

const Officesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/officesingle');

export default Officesingle;