import { FC } from 'react'

import { SinglePaginationSearchNews } from 'components/SinglePaginationSearchNews'
import { SinglePaginationSectionNews } from 'components/SinglePaginationSectionNews'
import { NEWS_BY_SECTIONS } from 'constants/constants'
import { NewsViewType } from 'store/types'

export const Pagination: FC<{ viewMode: NewsViewType }> = ({ viewMode }) => (
  <div>
    {viewMode === NEWS_BY_SECTIONS ? (
      <SinglePaginationSectionNews />
    ) : (
      <SinglePaginationSearchNews />
    )}
  </div>
)
