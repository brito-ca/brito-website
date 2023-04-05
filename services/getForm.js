import getField from './getField'
import getMedia from './getMedia'

const getForm = async (data) => {
    const {
        fields,
        image,
        send_response_button,
        title,
        button_submit,
        send_response_title,
        send_response_description,
    } = data
    const formFields = fields
        ? await Promise.all(fields.map(async (item) => await getField(item)))
        : []
    return {
        id: 'form',
        fields: formFields?.map((field) => {
            return {
                id: field?.id,
                label: field?.label,
                placeholder: field?.placeholder,
                value: field?.value,
            }
        }),
        image: await getMedia(image),
        title: title,
        button_submit: button_submit,
        send_response_title: send_response_title,
        send_response_description: send_response_description,
        send_response_button: send_response_button,
    }
}

export default getForm
