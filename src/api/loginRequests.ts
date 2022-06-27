import { instanceLogin } from 'api/instance'
import { RequestLogin } from 'enums/enums'
import { UserDataType } from 'store/types/user_data_type'

export const loginRequests = {
  postLogin: (userData: UserDataType) => instanceLogin.post(RequestLogin.LOGIN, userData),
}
