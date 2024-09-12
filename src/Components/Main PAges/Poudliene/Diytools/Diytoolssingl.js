import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Diytoolssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/diytoolssingle');

export default Diytoolssingl;