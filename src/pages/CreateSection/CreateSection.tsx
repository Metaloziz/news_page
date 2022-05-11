import { FC } from 'react'

import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { Paths } from 'utils/enums'

export const CreateSection: FC = () => (
  <div>
    <NavLinkComponent nameButton="на главную" path={Paths.MAIN} />
    <div>section</div>
  </div>
)
