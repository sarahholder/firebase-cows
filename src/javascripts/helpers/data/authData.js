import firebase from 'firebase/app';
import 'firebase/auth';

import pasture from '../../components/pasture/pasture';
import farmHouse from '../../components/farmhouse/farmhouse';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmhouseDiv = $('#farmhouse');
const singleFarmerDiv = $('#single-farmer');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      farmhouseDiv.removeClass('hide');
      singleFarmerDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pasture.buildCows();
      farmHouse.buildFarmers();
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      farmhouseDiv.addClass('hide');
      singleFarmerDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
