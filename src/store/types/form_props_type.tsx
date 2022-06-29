import { AsyncThunkAction } from '@reduxjs/toolkit'

import { UserDataRegistrationType } from 'store/types/new_user_data_registration_type'

export type FormPropsType = {
  sendData: (
    data: UserDataRegistrationType,
  ) => AsyncThunkAction<boolean | undefined, UserDataRegistrationType, {}>
  isSuccessSubmit: boolean
  mode: 'edit' | 'create'
}
