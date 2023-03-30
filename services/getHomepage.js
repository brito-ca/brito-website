const getHomePage = async (locale) => {
    const results = await fetch(`https://brito.it/wp-json/wp/v2/homepage`)
    const result = await results.json()
    const localeData = result.find((item) => item.slug === locale)
    const { id, slug, acf } = localeData
    return {
        id,
        language: slug,
        data: acf,
    }
}

export default getHomePage
