
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Teactowelsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/teatowelsingle');

export default Teactowelsingle;