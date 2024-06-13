import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Registro de Usuario</h1>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default RegistrationPage;
