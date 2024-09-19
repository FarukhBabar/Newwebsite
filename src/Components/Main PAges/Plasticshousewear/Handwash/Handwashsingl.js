import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Handwashsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/handwashsingle');

export default Handwashsingl;