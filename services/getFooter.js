import getPage from './getPage'

const getFooter = async (data) => {
    const { links, ...rest } = data
    const pageLinks = await Promise.all(links.map(async (item) => await getPage(item)))
    return {
        id: 'footer',
        ...rest,
        links: pageLinks?.map((link) => {
            return {
                id: link?.id,
                content: link.content.rendered,
                title: link.title.rendered,
            }
        }),
    }
}

export default getFooter
