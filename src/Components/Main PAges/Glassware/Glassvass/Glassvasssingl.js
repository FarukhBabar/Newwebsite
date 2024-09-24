import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Glassvasssingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/glassvasssingle');

export default Glassvasssingl;