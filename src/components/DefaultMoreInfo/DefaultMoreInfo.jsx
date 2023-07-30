/* eslint-disable react/prop-types */
import { petValues } from '../../constants';
import Comments from '../Comment/Comment';
import FieldInput from '../FieldInput/FieldInput';
import File from '../File/File';
import GenderRadio from '../GenderRadio/GenderRadio';
import { BackIcon, FemaleIcon, MaleIcon, PawIcon } from '../../icons';
import { getColorGender } from '../../utils';
import { ButtonsWrapper } from '../ChoiseOption/ChoiseOption.styled';
import { ButtonNext, ButtonPrev } from '../StyledButtons/StyledButtons';
import { useDispatch } from 'react-redux';
import { useAddPet } from '../../hooks';
import { useEffect } from 'react';
import { saveSex } from '../../redux/add-pet/moreInfoSlice';
import { FormDefaultMoreInfo, RadioWrapper } from './DefaultMoreInfo.styled';

function DefaultMoreInfo({ formik, handleDefinePage }) {
  const dispatch = useDispatch();

  const { moreInfo } = useAddPet();

  useEffect(() => {
    if (moreInfo.data.sex !== '') {
      formik.setFieldValue('gender', moreInfo.data.sex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, moreInfo.data.sex]);

  const handleChangeSex = event => {
    formik.handleChange(event);
    dispatch(saveSex(event.target.id));
  };

  return (
    <FormDefaultMoreInfo onSubmit={formik.handleSubmit}>
      <RadioWrapper>
        <GenderRadio
          formik={formik}
          text="Female"
          id="female"
          onChange={handleChangeSex}
          value={petValues.female}
          checked={formik.values.gender}
          icon={
            <FemaleIcon
              stroke={getColorGender({ value: petValues.female, formik })}
            />
          }
        />
        <GenderRadio
          formik={formik}
          text="Male"
          id="male"
          onChange={handleChangeSex}
          value={petValues.male}
          checked={formik.values.gender}
          icon={
            <MaleIcon
              stroke={getColorGender({ value: petValues.male, formik })}
            />
          }
        />
      </RadioWrapper>
      <File formik={formik} />
      <FieldInput
        formik={formik}
        text="Location"
        id="location"
        name="location"
        value={formik.values.location}
        onChange={formik.handleChange}
      />
      <Comments formik={formik} />
      <ButtonsWrapper>
        <ButtonNext type="submit">
          Done
          <PawIcon />
        </ButtonNext>
        <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
          <BackIcon />
          Cancel
        </ButtonPrev>
      </ButtonsWrapper>
    </FormDefaultMoreInfo>
  );
}

export default DefaultMoreInfo;
