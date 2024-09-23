import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Mugscupssingel = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/mugcupsingle');

export default Mugscupssingel;