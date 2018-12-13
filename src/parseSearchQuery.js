// eslint-disable-next-line no-useless-escape
const FILTER_RE = /[\[|(]([^\]]+)[\]|)]/g

function parseSearchQuery(queryStr, opts) {
  const groqFilters = []

  let termsStr = queryStr

  let match
  while ((match = FILTER_RE.exec(queryStr))) {
    groqFilters.push(match[1])
    termsStr = termsStr.replace(match[0], ' ')
  }

  const terms = termsStr.split(/\s+/g).filter(Boolean)

  return {
    original: queryStr,
    terms,
    groqFilters
  }
}

export default parseSearchQuery
