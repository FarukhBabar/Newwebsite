import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Earphonesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/earephonesingle');

export default Earphonesingle;