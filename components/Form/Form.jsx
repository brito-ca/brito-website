import { useState } from 'react'
import { Popover, Icon, Modal, FormInput, Checkbox, Image, Logo } from '@/components'
import styles from '../../styles/Form.module.css'
import { MEMBER_API_URL } from '@/constants/app'
import { encode } from 'base-64'

const Form = (props) => {
    const {
        id,
        fields,
        image,
        title,
        button_submit,
        send_response_button,
        send_response_title,
        send_response_description,
    } = props

    const [formValues, setFormValues] = useState({
        full_name: '',
        expertise: '',
        company: '',
        residein_canada: false,
        province: '',
        city: '',
        immigration_status: '',
        linkedin_profile: '',
        email: '',
    })

    const handleResideInCanada = () => {
        setResideInCanada(!resideInCanada)
        setFormValues({
            ...formValues,
            province: 'Alberta',
            residein_canada: !resideInCanada,
        })
    }

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = {
            title: formValues.full_name,
            acf: {
                full_name: formValues.full_name,
                expertise: formValues.expertise,
                company: formValues.company,
                residing_canada: formValues.residein_canada,
                province: formValues.province,
                city: formValues.city,
                immigration_status: formValues.immigration_status || 'N/A',
                linkedin_profile: formValues.linkedin_profile,
                email: formValues.email,
            },
        }

        const options = {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + encode(process.env.API_USER + ':' + process.env.API_PWD),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData }),
        }

        const res = await fetch(MEMBER_API_URL, options)
        if (res.status === 200 || res.status === 201) {
            setSubscriptionModalOpen(!subscriptionModalOpen)
            setFormValues({
                full_name: '',
                expertise: '',
                company: '',
                province: '',
                city: '',
                immigration_status: '',
                linkedin_profile: '',
                email: '',
            })
        } else {
            alert(
                `Error: ${res.status} ${res.statusText}  \nSomething went wrong. Please try again.`
            )
        }
    }

    function getField(fields, id) {
        return fields.find((item) => item?.id === id) || {}
    }

    const [immigrationStatusPopover, setImmigrationStatusPopover] = useState(false)
    const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false)
    const [resideInCanada, setResideInCanada] = useState(false)

    return (
        <div id={id} className='flex-row-center'>
            <Image
                className={`${styles.mobileFormImage} ${styles.roundedFormImage} vertical-margin-md`}
                alt={image.alt}
                {...image}
            />
            <div className={styles.formContainer}>
                <h4 className={styles.formTitle}>{title}</h4>
                <form onSubmit={(e) => handleSubmit(e)} method='post'>
                    <div className={styles.formSections}>
                        <div className={styles.primaryInformation}>
                            <FormInput
                                name='full_name'
                                required='yes'
                                fieldStyle={styles.fullNameField}
                                labelContent={getField(fields, 'fullname').label}
                                placeholder={getField(fields, 'fullname').placeholder}
                                value={formValues.full_name}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='expertise'
                                fieldStyle={styles.expertiseField}
                                labelContent={getField(fields, 'expertise').label}
                                placeholder={getField(fields, 'expertise').placeholder}
                                value={formValues.expertise}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='company'
                                fieldStyle={styles.companyField}
                                labelContent={getField(fields, 'company').label}
                                placeholder={getField(fields, 'company').placeholder}
                                value={formValues.company}
                                onChange={handleChange}
                            />

                            <label className={styles.labelForm}>
                                {getField(fields, 'resideInCanada').label}
                            </label>
                            <Checkbox
                                name='residein_canada'
                                onChange={handleResideInCanada}
                                id='1'
                                label={getField(fields, 'yes').label}
                                value={resideInCanada}
                            />
                        </div>
                        <div className={styles.provinceField}>
                            <label htmlFor='province' className={styles.labelForm}>
                                {getField(fields, 'province').label}
                            </label>

                            <select
                                disabled={!formValues.residein_canada}
                                name='province'
                                value={formValues.province}
                                onChange={handleChange}
                                id='province'
                                className={styles.inputForm}
                                required
                            >
                                {getField(fields, 'province')
                                    .value.split(',')
                                    .map((province) => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <FormInput
                            disabled={!formValues.residein_canada}
                            required='required'
                            name='city'
                            fieldStyle={styles.cityField}
                            labelContent={getField(fields, 'city').label}
                            value={formValues.city}
                            placeholder={getField(fields, 'city').placeholder}
                            onChange={handleChange}
                        />
                        <div className={styles.immigrationStatusSection}>
                            <label htmlFor='immigrationStatus' className={styles.labelForm}>
                                {getField(fields, 'immigrationStatus').label.trim()}
                                <span
                                    className={styles.infoIcon}
                                    onMouseEnter={() => setImmigrationStatusPopover(true)}
                                    onMouseLeave={() => setImmigrationStatusPopover(false)}
                                >
                                    <Icon variant={'exclamation'} className={styles.infoIcon} />
                                    {immigrationStatusPopover && (
                                        <Popover>
                                            <p>
                                                {getField(fields, 'statusInformationPopover').label}
                                            </p>
                                        </Popover>
                                    )}
                                </span>
                            </label>

                            <select
                                disabled={!formValues.residein_canada}
                                name='immigration_status'
                                value={formValues.immigration_status}
                                onChange={handleChange}
                                id='immigration-status'
                                className={styles.inputForm}
                                required
                            >
                                <option value='' disabled>
                                    Select
                                </option>
                                {getField(fields, 'immigrationStatus')
                                    .value.split(',')
                                    .map((value) => (
                                        <option key={value} value={value.trim()}>
                                            {value.trim()}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image className={styles.roundedFormImage} alt={image.alt} {...image} />
                        </div>

                        <FormInput
                            name='linkedin_profile'
                            type='url'
                            fieldStyle={styles.linkedinField}
                            labelContent={getField(fields, 'linkedin').label}
                            placeholder={getField(fields, 'linkedin').placeholder}
                            value={formValues.linkedin_profile}
                            onChange={handleChange}
                        />

                        <FormInput
                            name='email'
                            type='email'
                            required='required'
                            fieldStyle={styles.emailField}
                            labelContent={getField(fields, 'email').label}
                            placeholder={getField(fields, 'email').placeholder}
                            value={formValues.email}
                            onChange={handleChange}
                        />

                        <input type='submit' className={styles.sendButton} value={button_submit} />
                        <Modal
                            className={styles.subscriptionModalContainer}
                            isOpen={subscriptionModalOpen}
                            setIsOpen={setSubscriptionModalOpen}
                        >
                            <Logo size='lg' />
                            <div className={styles.subscriptionModalTextDescriptionContainer}>
                                <h1 className={styles.subscriptionModalTitle}>
                                    {send_response_title}
                                </h1>
                                <p className={styles.subscriptionModalDescription}>
                                    {send_response_description}
                                </p>
                                <button
                                    type='button'
                                    className={styles.continueBrowsingButton}
                                    onClick={() => setSubscriptionModalOpen(!subscriptionModalOpen)}
                                >
                                    {send_response_button}
                                </button>
                            </div>
                        </Modal>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
