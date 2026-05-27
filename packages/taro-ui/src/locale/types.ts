export interface Locale {
  locale: string
  LoadMore: {
    loadingText: string
    moreText: string
    noMoreText: string
  }
  SearchBar: {
    placeholder: string
    actionName: string
  }
  NoticeBar: {
    moreText: string
  }
  Countdown: {
    day: string
    hours: string
    minutes: string
    seconds: string
  }
  Calendar: {
    monthFormat: string
    weekdays: string[]
  }
  Pagination: {
    prev: string
    next: string
  }
}

export type PartialLocale = {
  [K in keyof Locale]?: Locale[K] extends object
    ? { [P in keyof Locale[K]]?: Locale[K][P] }
    : Locale[K]
}
