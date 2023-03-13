import Image from 'next/image'
import { useState } from 'react'
import { RadioButton, Popover } from '@/components'
import styles from '../../styles/Form.module.css'
import britoFormImage from '../../public/images/brito-group-image-form.svg'
import profilePictureTemplate from '../../public/images/brito-profile-picture-template.svg'
import closeModalIcon from '../../public/images/close-modal-icon.svg'
import logo from '../../public/images/logo-small.svg'
import FormInput from '../FormInput/FormInput'

const Form = () => {
    const [fullName, setFullName] = useState('')
    const [expertise, setExpertise] = useState('')
    const [company, setCompany] = useState('')
    const [immigrationStatus, setImmigrationStatus] = useState('')
    const [resideInCanada, setResideInCanada] = useState('yes')
    const [city, setCity] = useState('')
    const [linkedinProfileLink, setLinkedinProfileLink] = useState('')
    const [email, setEmail] = useState('')

    const [formValues, setFormValues] = useState({
        fullName: '',
        expertise: '',
        company: '',
        immigrationStatus: '',
        resideInCanada: '',
        city: '',
        linkedinProfileLink: '',
        email: '',
    })

    const [isProfilePictureModalOpen, setIsProfilePictureModalOpen] = useState(false)
    const [isSuccesfullSubmissionModalOpen, setisSuccesfullSubmissionModalOpen] = useState(false)

    function openCloseProfilePictureModal() {
        setIsProfilePictureModalOpen(!isProfilePictureModalOpen)
    }

    function openCloseSubscriptionSuccessModal() {
        setisSuccesfullSubmissionModalOpen(!isSuccesfullSubmissionModalOpen)
    }

    const radioButtonHandler = (e) => {
        setResideInCanada(e.target.value)
    }

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Want to join Brito&#39;s network?</h3>
            <form method='post'>
                <div className={styles.formSections}>
                    <div className={styles.primaryInformation}>
                        <label className={styles.labelForm}>
                            Your full name
                            <span className={styles.mandatoryFieldSpan}>*</span>
                        </label>
                        <FormInput
                            className={styles.inputForm}
                            placeholder='E.g Amanda Costa'
                            value={fullName}
                            setValue={setFullName}
                        />
                        <label className={styles.labelForm}>Your expertise</label>
                        <FormInput
                            className={styles.inputForm}
                            placeholder='E.g. UX Designer'
                            value={expertise}
                            setValue={setExpertise}
                        />
                        <label className={styles.labelForm}>Your company</label>
                        <FormInput
                            className={styles.inputForm}
                            placeholder='E.g. TD bank'
                            value={company}
                            setValue={setCompany}
                        />
                        <label className={styles.labelForm}>Are you residing in Canada?</label>
                        <label className={styles.labelForm}>
                            <RadioButton
                                changed={radioButtonHandler}
                                id='1'
                                isSelected={resideInCanada === 'yes'}
                                label='Yes'
                                value='yes'
                            />
                        </label>
                        <label className={styles.labelForm}>
                            <RadioButton
                                changed={radioButtonHandler}
                                id='2'
                                isSelected={resideInCanada === 'no'}
                                label='No'
                                value='no'
                            />
                        </label>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.roundedFormImage}
                            src={britoFormImage}
                            alt='Picture of members of BRITO co-working in their computers in one of the meetings '
                        />
                    </div>
                    <div className={styles.immigrationStatusSection}>
                        <label className={styles.labelForm}>
                            In wich city do you live in Canada?
                        </label>
                        <FormInput
                            value={city}
                            placeholder='E.g. Ottawa'
                            className={styles.inputForm}
                            setValue={setCity}
                        />
                        <label htmlFor='immigration-status' className={styles.labelForm}>
                            Immigration Status
                            <span>
                                <Popover
                                    icon='exclamation'
                                    className={styles.immigrationStatusPopover}
                                />
                            </span>
                        </label>
                        <select
                            value={immigrationStatus}
                            onChange={(event) => setImmigrationStatus(event.target.value)}
                            id='immigration-status'
                            className={styles.immigrationStatusList}
                            required
                        >
                            <option value='' disabled>
                                Select
                            </option>
                            <option key={1} value='Canadian Citizen (Foreign born)'>
                                Canadian Citizen (Foreign born)
                            </option>
                            <option key={2} value='Convention Refugee / Protected Person'>
                                Convention Refugee / Protected Person
                            </option>
                            <option key={3} value='Permanent Resident'>
                                Permanent Resident
                            </option>
                            <option key={4} value='Temporary Resident WITHOUT a Work Permit'>
                                Temporary Resident WITHOUT a Work Permit
                            </option>
                            <option key={5} value='Temporary Resident WITH a Work Permit'>
                                Temporary Resident WITH a Work Permit
                            </option>
                            <option key={6} value='Other'>
                                Other
                            </option>
                        </select>
                    </div>
                    <FormInput
                        madatory={true}
                        fieldStyle={styles.linkedinField}
                        labelContent='LinkedIn profile'
                        labelStyle={styles.labelForm}
                        inputStyle={styles.inputForm}
                        placeholder='Paste your profile link'
                        value={linkedinProfileLink}
                        setValue={setLinkedinProfileLink}
                    />

                    <FormInput
                        fieldStyle={styles.emailField}
                        labelContent='E-mail'
                        labelStyle={styles.labelForm}
                        inputStyle={styles.inputForm}
                        placeholder='E.g. john@gmail.com'
                        value={email}
                        setValue={setEmail}
                    />

                    <div className={styles.uploadPhotoField}>
                        <label className={styles.labelForm}>
                            Upload photo<span className={styles.mandatoryFieldSpan}>*</span>
                        </label>
                        <button
                            type='button'
                            className={styles.chooseFileButton}
                            onClick={openCloseProfilePictureModal}
                        >
                            Choose file
                        </button>
                        {isProfilePictureModalOpen && (
                            <div className={styles.backdrop}>
                                <div className={styles.menuModal}>
                                    <Image
                                        src={closeModalIcon}
                                        alt='X icon to close upload photo field'
                                        className={styles.closeProfilePictureModalIcon}
                                        onClick={openCloseProfilePictureModal}
                                    />
                                    <div className={styles.profilePictureModal}>
                                        <h1 className={styles.profilePictureModalTitle}>
                                            Profile Picture
                                        </h1>
                                        <p className={styles.profilePictureModalDescription}>
                                            A profile picture make a positive first impression on
                                            potential connections It can also help to differentiate
                                            you from others in your network and make your profile
                                            stand out in search results.
                                        </p>
                                        <Image
                                            src={profilePictureTemplate}
                                            alt="A front face picture of a man. It's a template for the profile picture field before the user selects its own"
                                            className={styles.profilePictureAvatar}
                                        />

                                        <button
                                            type='button'
                                            className={styles.profilePictureModalSaveButton}
                                        >
                                            Save
                                        </button>
                                        <button className={styles.profilePictureModalChangeButton}>
                                            Change
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.fileChosenBox}>
                        <p className={styles.chosenBoxText}>No file chosen</p>
                    </div>
                    <button
                        className={styles.sendButton}
                        type='button'
                        onClick={openCloseSubscriptionSuccessModal}
                    >
                        Send
                    </button>
                    {isSuccesfullSubmissionModalOpen && (
                        <div className={styles.backdrop}>
                            <div
                                className={styles.menuModal}
                                onClick={(e) => void e.stopPropagation()}
                            >
                                <div className={styles.subscriptionModalContainer}>
                                    <Image
                                        src={closeModalIcon}
                                        alt='X icon to close upload photo field'
                                        className={styles.closeSubscriptionModalIcon}
                                        onClick={openCloseSubscriptionSuccessModal}
                                    />
                                    <Image
                                        src={logo}
                                        alt="Brito's logo"
                                        className={styles.logoSubscriptionModal}
                                    />
                                    <div
                                        className={styles.subscriptionModalTextDescriptionContainer}
                                    >
                                        <h1 className={styles.subscriptionModalTitle}>
                                            Thank you for connect with us!
                                        </h1>
                                        <p className={styles.subscriptionModalDescription}>
                                            Your informations were submitted for approval.
                                        </p>
                                        <p className={styles.subscriptionModalDescription}>
                                            You will receive a notification on your email.
                                        </p>
                                        <button
                                            type='button'
                                            className={styles.continueBrowsingButton}
                                            onClick={openCloseSubscriptionSuccessModal}
                                        >
                                            Continue browsing
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Form
