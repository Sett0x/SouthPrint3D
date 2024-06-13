import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
    return (
        <div className="container mx-auto py-8 px-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Registro de Usuario</h1>
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;
