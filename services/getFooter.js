import sanitize from 'sanitize-html'
import getPage from './getPage'

const getFooter = async (data) => {
    const { links, ...rest } = data
    const pageLinks = links ? await Promise.all(links.map(async (item) => await getPage(item))) : []
    return {
        id: 'footer',
        ...rest,
        links: pageLinks?.map((link) => {
            return {
                id: link?.id,
                content: sanitize(link.content.rendered),
                title: link.title.rendered,
            }
        }),
    }
}

export default getFooter
