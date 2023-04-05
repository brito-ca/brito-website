import getField from "./getField"
import getMedia from "./getMedia"

const getForm = async (data) => {
    const { fields, image } = data
    const formFields = fields ? await Promise.all(fields.map(async (item) => await getField(item))) : []
    return {
        id: 'form',
        fields: formFields?.map((field) => {
            return {
                id: field?.id,
                label: field?.label,
                placeholder: field?.placeholder,
                value: field?.value
            }
        }),
        image: await getMedia(image)
    }
}

export default getForm
