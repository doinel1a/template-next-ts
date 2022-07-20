import { NextPage } from 'next';
import { faCheckCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import MetaHead from '../components/MetaHead';

import Heading from '../components/Text/Heading';
import Paragraph from '../components/Text/Paragraph';
import ButtonPrimary from '../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import ButtonTertiary from '../components/Buttons/ButtonTertiary';
import Form from '../components/Form/Form';
import InputText from '../components/Form/InputText';
import InputNumber from '../components/Form/InputNumber';
import Modal, { ModalManager } from '../components/Modal';

const Home: NextPage = () => {
    const openModal = () => {
        ModalManager.open(
            <Modal
                type='green'
                title='Deactivate account'
                content='Are you sure you want to deactivate
                your account? All of your data will
                be permanently removed. This action
                cannot be undone.'
                btnPrimaryContent='Deactivate'
                btnPrimaryCallback={() => alert('Callback')}
                btnSecondaryContent='Cancel'
            />
        );
    };

    return (
        <>
            <MetaHead />
            <main>
                <section className='w-full h-full flex lg:justify-center lg:items-center flex-wrap gap-x-6 lg:gap-x-20 gap-y-6 px-4 py-4'>
                    <div className='flex flex-col gap-y-6'>
                        <Heading type='h1' text='Heading 1' />
                        <Heading type='h2' text='Heading 2' />
                        <Heading type='h3' text='Heading 3' />
                        <Heading type='h4' text='Heading 4' />
                        <Heading type='h5' text='Heading 5' />
                        <Heading type='h6' text='Heading 6' />
                    </div>
                    <div className='w-96'>
                        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    </div>
                    <div className='flex flex-col gap-y-6'>
                        <ButtonPrimary
                            type='button'
                            text='Button Primary'
                            icon={faEnvelope}
                            spanCss='!text-white'
                            iconCss='!text-white'
                            onClick={() => openModal()}
                        />
                        <ButtonSecondary
                            type='button'
                            text='Button Secondary'
                            icon={faCheckCircle}
                        />
                        <ButtonTertiary
                            type='button'
                            text='Button Tertiary'
                            icon={faCheckCircle}
                        />
                    </div>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <InputText
                            id='test1'
                            label='Test 1'
                            value='Test 1'
                            clean={true}
                        />
                        <InputText
                            id='test2'
                            label='Test 2'
                            value='Test 2'
                            clean={true}
                        />
                        <InputNumber
                            id='test3'
                            label='Test 3'
                            value='Test 3'
                            clean={true}
                        />
                    </Form>
                </section>
            </main>
        </>
    );
};

export default Home;
