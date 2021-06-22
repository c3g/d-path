import React from 'react';
import cx from 'classnames';

import OrganizationForm from './../forms/OrganizationForm';
import DataProcessingForm from './../forms/DataProcessingForm';
import DataUsersForm from './../forms/DataUsersForm';
import DataDonorsForm from './../forms/DataDonorsForm';
import ServicesForm from './../forms/ServicesForm';
import Success from './../forms/Success';
import InfoDescription from './../forms/InfoDescription';
import InfoPublic from './../forms/InfoPublic';
import InfoIdentifiable from './../forms/InfoIdentifiable';
import InfoProcessor from './../forms/InfoProcessor';
import InfoProvince from './../forms/InfoProvince';
import InfoCrossesBorders from './../forms/InfoCrossesBorders';
import InfoHealth from './../forms/InfoHealth';
import UserInfo from './../forms/UserInfo';
import { USER_TYPE } from '../constants';

export var STEPS = [
  UserInfo,
  OrganizationForm,
  DataDonorsForm,
  ServicesForm,
  InfoDescription,
  Success,
]

export const removeLastStep = () => {
  STEPS.pop();
}

export const addInfoPublicStep = () => {
  STEPS.push(InfoPublic);
}

export const addIdentifiableStep = () => {
  STEPS.push(InfoIdentifiable);
}

export const addProcessorStep = () => {
  STEPS.push(InfoProcessor);
}

export const addProvincialStep = () => {
  STEPS.push(InfoProvince);
}

export const addBorderStep = () => {
  STEPS.push(InfoCrossesBorders);
}


export const addHealthStep = () => {
  STEPS.push(InfoHealth);
}

export const resetSteps = () => {
  STEPS = [
    UserInfo,
    OrganizationForm,
    DataDonorsForm,
    ServicesForm,
    InfoDescription,
    Success,
  ]
}

export const getSteps = (step, userType) => {
  if (userType && userType !== USER_TYPE.PROCESSOR){
    return (
      <div className='MainForm__steps'>
        {STEPS.slice(0,2).map((_, i) =>
          <div
            key={i}
            className={cx('MainForm__step',
            { 'MainForm__step--active-1' : i <= step && i === 0 },
            { 'MainForm__step--active-2' : i <= step && i === 1}
            )}
          >
            {i + 1}
          </div>
        )}
      </div>
    )
  }
  else{
    return(
      <div className='MainForm__steps'>
        {STEPS.map((_, i) =>
          <div
            key={i}
            className={cx('MainForm__step',
            { 'MainForm__step--active-1' : i <= step && i === 0},
            { 'MainForm__step--active-2' : i <= step && i === 1},
            { 'MainForm__step--active-3' : i <= step && i === 2},
            { 'MainForm__step--active-4' : i <= step && i === 3},
            { 'MainForm__step--active-5' : i <= step && i === 4},
            { 'MainForm__step--active-6' : i <= step && i === 5},
            { 'MainForm__step--active-7' : i <= step && i === 6},
            { 'MainForm__step--active-8' : i <= step && i === 7},
            { 'MainForm__step--active-9' : i <= step && i === 8},
            { 'MainForm__step--active-10' : i <= step && i === 9},
            { 'MainForm__step--active-11' : i <= step && i === 10},
            { 'MainForm__step--active-12' : i <= step && i === 11},
            )}
          >
            {i + 1}
          </div>
        )}
      </div>
    )
  }
}
