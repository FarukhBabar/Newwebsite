import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Hairsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/hairsingle');

export default Hairsingle;