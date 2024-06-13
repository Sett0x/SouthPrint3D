import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900">Registro de Usuario</h2>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default RegistrationPage;
