
import cowData from '../../helpers/data/cowData';
import utils from '../../helpers/utils';
import cowComponent from '../cow/cow';
import smashData from '../../helpers/data/smash';

const removeCow = (e) => {
  const cowId = e.target.closest('.card').id;
  smashData.completelyRemoveCow(cowId);
  cowData.deleteCow(cowId)
    .then(() => {
    // eslint-disable-next-line no-use-before-define
      buildCows();
      utils.printToDom('single-farmer', '');
    })
    .catch((err) => console.error('cant delete', err));
};

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center">Pasture</h2>';
      domString += '<div class="d-flex flex-wrap">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      utils.printToDom('pasture', domString);
      $('body').on('click', '.delete-cow', removeCow);
    })
    .catch((err) => console.error('get cows broke', err));
};

export default { buildCows };
