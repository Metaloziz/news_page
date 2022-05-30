import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  memo,
  ReactElement,
  RefAttributes,
  useCallback,
  useState,
} from 'react'

import { DeBounceTimer } from 'enums'
import { useDebounce } from 'hooks'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type DebounceSearchFieldPropsType = DefaultInputPropsType &
  RefAttributes<HTMLInputElement> & {
    searchValue: (value: string) => void
  }

export const DebounceSearchField: FC<DebounceSearchFieldPropsType> = memo(
  forwardRef(({ searchValue, ...restProps }, ref): ReactElement => {
    const [value, setValue] = useState('')

    const search = (word: string): void => {
      if (word) {
        searchValue(word)
      }
    }

    const debounceSearch = useDebounce(search, DeBounceTimer.SEARCH_DELAY)

    const onSearchQuestionChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value)
        debounceSearch(e.currentTarget.value)
      },
      [],
    )

    return (
      <input
        ref={ref}
        value={value}
        onChange={onSearchQuestionChange}
        placeholder="Поиск по заголовкам"
        type="search"
        {...restProps}
      />
    )
  }),
)
