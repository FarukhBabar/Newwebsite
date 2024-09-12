import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Lightergassingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/lightergassingle');

export default Lightergassingl;
